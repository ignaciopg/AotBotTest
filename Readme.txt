El cuerpo del mensaje debe ser un objeto con cuatro variables:
    - alchemy: que tendrá la API Key de Alchemy
    - conversation: que tendrá las credenciales de Conversation (username, password & workspace_id)
    - context: variables de contexto de la conversación
    - input: entrada del usuario (texto)
    
    BODY EXAMPLE: {
      alchemy: 'API_KEY',
      conversation: {
        username: "6a5073b0-2515-4ed6-8ab5-033a98365753",
        password: "3a63GYjlJ7DH",
        workspace_id: "c0d13855-27e4-4856-a918-85c04ce7cc12"
      },
      context:  { 
	    conversation_id: '63c168a2-6ace-49a7-b60d-d75261780a97',
        system:
          { dialog_stack: [Object],
            dialog_turn_counter: 1,
            dialog_request_counter: 1,
            _node_output_map: [Object] },
        Job: '',
        Brand: '',
        Colour: '',
        Retried: false,
        MaxPrice: 1300,
        MinCores: 4,
        MinPrice: 0,
        UsagesMax: 5,
        UsagesNum: 0,
        MinSensors: 1,
        ShowAction: '',
        BioSecurity: false,
        UsageAskedC: false,
        UsageAskedG: false,
        UsageAskedL: false,
        UsageAskedS: false,
        UsageAskedW: false,
        UsagesCycle: 0,
        UsageAskedSN: false,
        MaxScreenSize: 6,
        MinScreenSize: 4,
        SwearingCount: 0,
        profile_video: false,
        OperatingSystem: '',
        feature_control: 0,
        profile_usework: false,
        BackCameraMinRes: 8,
        BioSecurityAsked: false,
        DoubleBackCamera: false,
        MinStorageSizeGB: 32,
        profile_usesport: false,
        MinWaterResistant: 'IP00',
        profile_usegaming: false,
        profile_usesocial: false,
        profile_usetravel: false,
        PrimeSocialNetwork: '',
        SocialNetworkCount: 0,
        profile_useleisure: false,
        terminalList_shown: false,
        profile_photography: false,
        profile_usenavigation: false,
        BatteryMinConversation: 6 },
      input: {text: 'I use the cell phone to watch basketball'}
    }
	
Si se sube a bluemix (suponiendo que se sube a la región de USA) la URL donde realizar el POST sería: wrapper-telefonica.mybluemix.net/message
donde el cuerpo debería contener lo indicado anteriormente. El API_KEY no lo he rellenado porque deben crear una instancia del servicio de Alchemy e introducir
el valor que te proporcione.
