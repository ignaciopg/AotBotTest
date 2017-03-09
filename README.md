This repository is an example Node-RED & Telegram based Watson virtual assistant flow for pre-sales support

It can not be deployed directy by means of the "Bluemix Deploy Button" as GHE is not accesible from internet. So you will have to download this project as a ZIP and import into your own Bluemix project

This project contains two branches:

- master: It contains the latest development version and will be updated constantly
- PRO: It conains a stable version with no extensions. This is the live version you can find here: 

Then follow these steps.

	1.- Create a new bluemix project in https://hub.jazz.net linking it to your forked IBM GIT repository. Give it a name and add Bluemix parameters where you want to deploy.

	2.- Create a “Build & Deploy” stage by copying the script in /config/deploy.config, and deploy the code.

	3.- Once Node-RED is available, copy flow content from /config/Main.flow and import it in Node-RED via clipboard.

	4.- Open Conversations tool and load new workspace from file /config/PadronAyto-workspace.json
		5.- Open the cloudant service console. Create database named “wea_qa” and create different documents by copy-pasting each entry in /config/wea_qa.sample

	6.- On Node-RED, Main flow, create new Telegram BOT credentials (edit node “BOT Receive”) adding your BOT name and token provided by BotFather. Check also node “BOT Sender” and also paste the BOT token in function node named “saveSourceMsg & Settings”.

	7.- Update Conversation workspace_id on the “Conversation” node and on node “saveSourceMsg & Settings”.

	8.- Validate cloudant credentials in all cloudant nodes.

	9.- Update “Speech to Text” component language & credentials from service information

	10.- Test!!

