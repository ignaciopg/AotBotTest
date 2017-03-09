var watson = require('watson-developer-cloud');  // watson sdk

exports.message = function(body, callback) {
  // Create the service wrapper
  var conversation = getConversationService(body.credentials)
  // Create conversation payload
  var payload = getPayload(body);
  // Call to conversation service
  conversation.message(payload, function(err, data) {
    if (err)
      return callback(err, undefined);
    else
      return callback(undefined, data);
  });
}

function getConversationService(credentials) {
  return watson.conversation({
    url: 'https://gateway.watsonplatform.net/conversation/api',
    username: credentials.username || '<username>',
    password: credentials.password || '<password>',
    version_date: '2016-09-20',
    version: 'v1'
  });
}

function getPayload(body) {
  var workspace = body.credentials.workspace_id || '<workspace-id>';

  var payload = {
    workspace_id: workspace,
    context: {},
    input: {}
  };

  if (body) {
    if (body.input)
      payload.input = {text: body.input};
    payload.context = body.context;
  }

  return payload;
}