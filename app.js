/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

require('dotenv').config({
	silent: true
});

var express = require('express');
var bodyParser = require('body-parser'); // parser for post requests

var app = express();

app.use(bodyParser.json());

var conversation = require('./js/conversation.js')
var alchemy = require('./js/alchemy.js')
var tradeof = require('./js/tradeof.js')

// Endpoint to be call from the client side
app.post('/message', function(req, res) {
	//	req.body.alchemy = 'cc62171c072dddaa49bf9be29ac5c142c3dc4a69'

	/*************************************************************************/
	/****************** CONTROL DE SEGURIDAD *********************************/
	/*************************************************************************/
	if (typeof(req.body.input) != 'undefined') {
		if (typeof(req.body.input.Token) != 'undefined') {
			if (req.body.input.Token != "343d608e-0ae7-4a43-92cc-01217624beb5")
				return res.status(500).json("Fallo de aceso");
		} else {
			return res.status(500).json("Fallo de aceso");
		}
	} else {
		return res.status(500).json("Fallo de aceso");
	}
	/*************************************************************************/
	/*************************************************************************/
	/*************************************************************************/

	req.body.alchemy = '4afc8adf8b57625dc3b1012df95acab36b1121b9'
	req.body.conversation = {
		'username': '6a5073b0-2515-4ed6-8ab5-033a98365753',
		'password': '3a63GYjlJ7DH',
		//		'workspace_id': 'c0d13855-27e4-4856-a918-85c04ce7cc12'  // Inglés
		//		'workspace_id': '4e899800-2fda-49bf-8fac-4eefe97d7ef1'  // Español
		'workspace_id': '343d608e-0ae7-4a43-92cc-01217624beb5' // Nueva versión Inglés
	};
	req.body.tradeof = {
		"password": "60NksbrETKCx",
		"username": "07e16d18-d1f2-4eb6-b798-f05dbf031144"
	};

	var alchemyBody = getAlchemyBody(req.body);
	var conversationRes = null;
	var respuesta1 = "";
	alchemy.getConcepts(alchemyBody, function(err, response) //Llamada a Alchemy
		{
			//			if (err)
			//				return res.status(err.code || 500).json(err);
			var conversationBody = getConversationBody(req.body, response) //Llamada a Conversation

			conversation.message(conversationBody, function(err, response) {
				if (err)
					return res.status(err.code || 500).json(err);
				response = concatPhrases(response);
				respuesta1 = response.output.text[0] + " ";
				//			if (response.context.terminalList_shown != false) // Mostrar terminales
				//			{
				conversationRes = response;
				var tradeofBody = getTradeofBody(req.body, response);
				tradeof.message(tradeofBody, function(err, response) {
					if (err)
						return res.status(err.code || 500).json(err);
					conversationRes.selection = response.selection;
					response = conversationRes;
					if (response.selection.numDevicesWithExc > 2 && response.context.terminalList_shown == false) //Todavía no hace falta enseñar terminales
					{
						return res.json(response); // Response Conversation1						
					} else if (response.selection.numDevices == 0) { // no hay terminales, llamo a true a conversations
						response.input.text = "Show Devices";
						conversationBody.input = response.input.text;
						conversationBody.context = response.context;
						conversationBody.context.terminalList_shown = true;
						conversation.message(conversationBody, function(err, response) //2ª llamada a conversation
							{
								if (err)
									return res.status(err.code || 500).json(err);
								response.selection = conversationRes.selection;
								response = concatPhrases(response);
								return res.json(response); //Response Conversation2
							});
					} else // Hay que enseñar terminales
					{
						response.input.text = "Farewell";
						conversationBody.input = response.input.text;
						conversationBody.context = response.context;
						if (response.context.terminalList_shown == false) // Comprobamos si hay que devolver la respuesta almacenada
							respuesta1 = "";
						conversationBody.context.terminalList_shown = true;
						conversation.message(conversationBody, function(err, response) //2ª llamada a conversation
							{
								if (err)
									return res.status(err.code || 500).json(err);
								response.selection = conversationRes.selection;
								response = concatPhrases(response);
								response.output.text[0] = respuesta1 + response.output.text[0];
								return res.json(response); //Response del TradeOfAnalytics
							});
					}
				});
				//			} else  // Todavía no hay que enseñar terminales
				//			return res.json(response); // Response Conversation1
			});
		});
});

function concatPhrases(response) {
	var frase = response.output.text[0];
	var i = 1;
	while (response.output.text[i] != null) {
		frase = frase + " " + response.output.text[i];
		i++;
	}
	response.output.text = [frase];
	return response;
}

function getTradeofBody(body, conversation) {

	return {
		credentials: body.tradeof,
		conversation: conversation
	}
}

function getAlchemyBody(body) {
	return {
		apikey: body.alchemy,
		input: body.input
	}
}

function getConversationBody(body, alchemy) {
	var input
	if (alchemy != undefined)
		input = body.input ? body.input.text + ' ' + alchemy : ''
	else
		input = body.input ? body.input.text : ''

	return {
		credentials: body.conversation,
		context: body.context,
		input: input
	}
}

module.exports = app;