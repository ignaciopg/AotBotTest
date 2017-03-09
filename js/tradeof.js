var watson = require('watson-developer-cloud/tradeoff-analytics/v1'); // watson sdk
var j = 0;

exports.message = function(body, callback) {
	//	var problem = require('./telefonos.js').problem;

	var problem = {
		"subject": "phone",
		"columns": [{
			"key": "Brand",
			"full_name": "Brand",
			"type": "categorical",
			"is_objective": false,
			"goal": "min",
			"range": ["Apple", "Samsung", "Huawei", "LG"]
		}, {
			"key": "Price",
			"full_name": "Price",
			"type": "numeric",
			"is_objective": true,
			"goal": "min",
			"format": "####0.00",
			"range": {
				"low": 0,
				"high": 1500
			}
		}, {
			"key": "Operating System",
			"full_name": "Operating System",
			"type": "categorical",
			"is_objective": false,
			"goal": "min",
			"range": ["iOS", "Android"]
		}, {
			"key": "Valoracion usuarios",
			"full_name": "Valoracion usuarios",
			"type": "numeric",
			"is_objective": false,
			"goal": "max"
		}, {
			"key": "Valoracion OCU",
			"full_name": "Valoracion OCU",
			"type": "categorical",
			"is_objective": false,
			"goal": "max",
			"range": [""]
		}, {
			"key": "Procesador",
			"full_name": "Procesador",
			"type": "categorical",
			"is_objective": false,
			"goal": "min",
			"range": ["A10 Fusion", "Octa Core", "A9", "Quad core", "A7"]
		}, {
			"key": "#Core",
			"full_name": "#Core",
			"type": "numeric",
			"is_objective": false,
			"goal": "max"
		}, {
			"key": "Memory",
			"full_name": "Memory",
			"type": "numeric",
			"is_objective": false,
			"goal": "max",
			"format": "####0 GB"

		}, {
			"key": "RAM",
			"full_name": "RAM",
			"type": "numeric",
			"is_objective": false,
			"goal": "max",
			"format": "####0 GB"
		}, {
			"key": "Screen Size inches",
			"full_name": "Screen Size inches",
			"type": "numeric",
			"is_objective": false,
			"goal": "max",
			"range": {
				"low": 0,
				"high": 15
			}

		}, {
			"key": "Biometric security",
			"full_name": "Biometric security",
			"type": "categorical",
			"is_objective": false,
			"goal": "min",
			"range": ["Fingerprint", "NO"]
		}, {
			"key": "Water resistance",
			"full_name": "Water resistance",
			"type": "categorical",
			"is_objective": false,
			"goal": "min",
			"range": ["IP68", "IP67", "NO"]
		}, {
			"key": "Battery (mAh)",
			"full_name": "Battery (mAh)",
			"type": "numeric",
			"is_objective": false,
			"goal": "max"
		}, {
			"key": "Duración Batería Espera",
			"full_name": "Duración Batería Espera",
			"type": "numeric",
			"is_objective": false,
			"goal": "max"
		}, {
			"key": "Duración Batería Conversación",
			"full_name": "Duración Batería Conversación",
			"type": "numeric",
			"is_objective": false,
			"goal": "max"
		}, {
			"key": "Peso",
			"full_name": "Peso",
			"type": "numeric",
			"is_objective": false,
			"goal": "max"
		}, {
			"key": "Front Camera (MP)",
			"full_name": "Front Camera (MP)",
			"type": "numeric",
			"is_objective": false,
			"goal": "max"
		}, {
			"key": "Back Camera (MP)",
			"full_name": "Back Camera (MP)",
			"type": "numeric",
			"is_objective": false,
			"goal": "max"
		}, {
			"key": "back cameras",
			"full_name": "back cameras",
			"type": "categorical",
			"is_objective": false,
			"goal": "min",
			"range": ["SI", "NO"]
		}, {
			"key": "Resolución Video",
			"full_name": "Resolución Video",
			"type": "categorical",
			"is_objective": false,
			"goal": "max",
			"range": [""]
		}, {
			"key": "Conectividad Alta velocidad",
			"full_name": "Conectividad Alta velocidad",
			"type": "categorical",
			"is_objective": false,
			"goal": "max",
			"range": ["4G"]
		}, {
			"key": "GPS",
			"full_name": "GPS",
			"type": "categorical",
			"is_objective": false,
			"goal": "min",
			"range": ["SI", "NO"]
		}, {
			"key": "Sensors",
			"full_name": "Sensors",
			"type": "categorical",
			"is_objective": false,
			"goal": "min",
			"range": ["Alto", "Medio", "Bajo"]
		}, {
			"key": "Carga Inalámbrica",
			"full_name": "Carga Inalámbrica",
			"type": "categorical",
			"is_objective": false,
			"goal": "min",
			"range": ["SI", "NO"]
		}],
		"options": [{
			"key": "1",
			"name": "K4",
			"values": {
				"Brand": "LG",
				"Price": 70,
				"Operating System": "Android",
				"Valoracion usuarios": 5,
				"Valoracion OCU": "",
				"Procesador": "Quad core",
				"#Core": 4,
				"Memory": 8,
				"RAM": 1,
				"Tamaño Pantalla Normalizado": "",
				"Screen Size inches": 4.5,
				"Biometric security": "NO",
				"Water resistance": "NO",
				"Battery (mAh)": 1940,
				"Duración Batería Espera": 0,
				"Duración Batería Conversación": 0,
				"Peso": 120,
				"Front Camera (MP)": 2,
				"Back Camera (MP)": 5,
				"back cameras": "NO",
				"Resolución Video": "",
				"Color": "Negro",
				"Conectividad Alta velocidad": "4G",
				"GPS": "SI",
				"Sensors": "Bajo",
				"Carga Inalámbrica": "NO"
			},
			"description_html": "<img style='max-height: 100px; max-width: 100px;'  src='http://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Samsung_GALAXY_S4_zoom_%28White%29.jpg/800px-Samsung_GALAXY_S4_zoom_%28White%29.jpg'/> <a title='Photo by Samsung Belgium (Flickr: GALAXY S4 zoom (1)) [CC BY 2.0 (http://creativecommons.org/licenses/by/2.0)], via Wikimedia Commons' href='http://commons.wikimedia.org/wiki/File:Samsung_GALAXY_S4_zoom_(White).jpg' target='_blank'> <img style='max-height: 14px; max-width: 14px;'  src='http://mirrors.creativecommons.org/presskit/icons/cc.png'/> </a>",
			"description_file": "lg-k4.jpg"
		}, {
			"key": "2",
			"name": "Y5 II",
			"values": {
				"Brand": "Huawei",
				"Price": 109,
				"Operating System": "Android",
				"Valoracion usuarios": 4,
				"Valoracion OCU": "",
				"Procesador": "Quad core",
				"#Core": 4,
				"Memory": 8,
				"RAM": 1,
				"Tamaño Pantalla Normalizado": "",
				"Screen Size inches": 5,
				"Biometric security": "NO",
				"Water resistance": "NO",
				"Battery (mAh)": 2200,
				"Duración Batería Espera": 268,
				"Duración Batería Conversación": 11,
				"Peso": 135,
				"Front Camera (MP)": 2,
				"Back Camera (MP)": 8,
				"back cameras": "NO",
				"Resolución Video": "",
				"Color": "Negro Blanco",
				"Conectividad Alta velocidad": "4G",
				"GPS": "SI",
				"Sensors": "Bajo",
				"Carga Inalámbrica": "NO"
			},
			"description_html": "<img style='max-height: 100px; max-width: 100px;'  src='http://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Samsung_GALAXY_S4_zoom_%28White%29.jpg/800px-Samsung_GALAXY_S4_zoom_%28White%29.jpg'/> <a title='Photo by Samsung Belgium (Flickr: GALAXY S4 zoom (1)) [CC BY 2.0 (http://creativecommons.org/licenses/by/2.0)], via Wikimedia Commons' href='http://commons.wikimedia.org/wiki/File:Samsung_GALAXY_S4_zoom_(White).jpg' target='_blank'> <img style='max-height: 14px; max-width: 14px;'  src='http://mirrors.creativecommons.org/presskit/icons/cc.png'/> </a>",
			"description_file": "huawei-y5-ii.png"
		}, {
			"key": "3",
			"name": "K10",
			"values": {
				"Brand": "LG",
				"Price": 115,
				"Operating System": "Android",
				"Valoracion usuarios": 4,
				"Valoracion OCU": "",
				"Procesador": "Quad core",
				"#Core": 4,
				"Memory": 16,
				"RAM": 1.5,
				"Tamaño Pantalla Normalizado": "",
				"Screen Size inches": 5.3,
				"Biometric security": "Fingerprint",
				"Water resistance": "NO",
				"Battery (mAh)": 2300,
				"Duración Batería Espera": 255,
				"Duración Batería Conversación": 0,
				"Peso": 153,
				"Front Camera (MP)": 5,
				"Back Camera (MP)": 13,
				"back cameras": "NO",
				"Resolución Video": "",
				"Color": "Negro",
				"Conectividad Alta velocidad": "4G",
				"GPS": "SI",
				"Sensors": "Medio",
				"Carga Inalámbrica": "NO"
			},
			"description_html": "<img style='max-height: 100px; max-width: 100px;'  src='http://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Samsung_GALAXY_S4_zoom_%28White%29.jpg/800px-Samsung_GALAXY_S4_zoom_%28White%29.jpg'/> <a title='Photo by Samsung Belgium (Flickr: GALAXY S4 zoom (1)) [CC BY 2.0 (http://creativecommons.org/licenses/by/2.0)], via Wikimedia Commons' href='http://commons.wikimedia.org/wiki/File:Samsung_GALAXY_S4_zoom_(White).jpg' target='_blank'> <img style='max-height: 14px; max-width: 14px;'  src='http://mirrors.creativecommons.org/presskit/icons/cc.png'/> </a>",
			"description_file": "lg-k10.JPG"
		}, {
			"key": "4",
			"name": "Galaxy J3",
			"values": {
				"Brand": "Samsung",
				"Price": 122,
				"Operating System": "Android",
				"Valoracion usuarios": 5,
				"Valoracion OCU": "",
				"Procesador": "Quad core",
				"#Core": 4,
				"Memory": 8,
				"RAM": 1.5,
				"Tamaño Pantalla Normalizado": "",
				"Screen Size inches": 5,
				"Biometric security": "NO",
				"Water resistance": "NO",
				"Battery (mAh)": 2600,
				"Duración Batería Espera": 0,
				"Duración Batería Conversación": 13,
				"Peso": 138,
				"Front Camera (MP)": 5,
				"Back Camera (MP)": 8,
				"back cameras": "NO",
				"Resolución Video": "",
				"Color": "Dorado Blanco",
				"Conectividad Alta velocidad": "4G",
				"GPS": "SI",
				"Sensors": "Medio",
				"Carga Inalámbrica": "NO"
			},
			"description_html": "<img style='max-height: 100px; max-width: 100px;'  src='http://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Samsung_GALAXY_S4_zoom_%28White%29.jpg/800px-Samsung_GALAXY_S4_zoom_%28White%29.jpg'/> <a title='Photo by Samsung Belgium (Flickr: GALAXY S4 zoom (1)) [CC BY 2.0 (http://creativecommons.org/licenses/by/2.0)], via Wikimedia Commons' href='http://commons.wikimedia.org/wiki/File:Samsung_GALAXY_S4_zoom_(White).jpg' target='_blank'> <img style='max-height: 14px; max-width: 14px;'  src='http://mirrors.creativecommons.org/presskit/icons/cc.png'/> </a>",
			"description_file": "samsung-galaxy-j3.jpg"
		}, {
			"key": "5",
			"name": "Xcover 3 VE",
			"values": {
				"Brand": "Samsung",
				"Price": 146,
				"Operating System": "Android",
				"Valoracion usuarios": 0,
				"Valoracion OCU": "",
				"Procesador": "Quad core",
				"#Core": 4,
				"Memory": 8,
				"RAM": 1.5,
				"Tamaño Pantalla Normalizado": "",
				"Screen Size inches": 4.5,
				"Biometric security": "NO",
				"Water resistance": "IP68",
				"Battery (mAh)": 2200,
				"Duración Batería Espera": 0,
				"Duración Batería Conversación": 13,
				"Peso": 154,
				"Front Camera (MP)": 2,
				"Back Camera (MP)": 5,
				"back cameras": "NO",
				"Resolución Video": "",
				"Color": "Blanco",
				"Conectividad Alta velocidad": "4G",
				"GPS": "SI",
				"Sensors": "Medio",
				"Carga Inalámbrica": "NO"
			},
			"description_html": "<img style='max-height: 100px; max-width: 100px;'  src='http://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Samsung_GALAXY_S4_zoom_%28White%29.jpg/800px-Samsung_GALAXY_S4_zoom_%28White%29.jpg'/> <a title='Photo by Samsung Belgium (Flickr: GALAXY S4 zoom (1)) [CC BY 2.0 (http://creativecommons.org/licenses/by/2.0)], via Wikimedia Commons' href='http://commons.wikimedia.org/wiki/File:Samsung_GALAXY_S4_zoom_(White).jpg' target='_blank'> <img style='max-height: 14px; max-width: 14px;'  src='http://mirrors.creativecommons.org/presskit/icons/cc.png'/> </a>",
			"description_file": "samsung-galaxy-xcover.jpg"
		}, {
			"key": "6",
			"name": "Galaxy J5",
			"values": {
				"Brand": "Samsung",
				"Price": 158,
				"Operating System": "Android",
				"Valoracion usuarios": 5,
				"Valoracion OCU": "",
				"Procesador": "Quad core",
				"#Core": 4,
				"Memory": 16,
				"RAM": 2,
				"Tamaño Pantalla Normalizado": "",
				"Screen Size inches": 5.2,
				"Biometric security": "NO",
				"Water resistance": "NO",
				"Battery (mAh)": 3100,
				"Duración Batería Espera": 0,
				"Duración Batería Conversación": 21,
				"Peso": 158,
				"Front Camera (MP)": 5,
				"Back Camera (MP)": 13,
				"back cameras": "NO",
				"Resolución Video": "",
				"Color": "Dorado Blanco",
				"Conectividad Alta velocidad": "4G",
				"GPS": "SI",
				"Sensors": "Medio",
				"Carga Inalámbrica": "NO"
			},
			"description_html": "<img style='max-height: 100px; max-width: 100px;'  src='http://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Samsung_GALAXY_S4_zoom_%28White%29.jpg/800px-Samsung_GALAXY_S4_zoom_%28White%29.jpg'/> <a title='Photo by Samsung Belgium (Flickr: GALAXY S4 zoom (1)) [CC BY 2.0 (http://creativecommons.org/licenses/by/2.0)], via Wikimedia Commons' href='http://commons.wikimedia.org/wiki/File:Samsung_GALAXY_S4_zoom_(White).jpg' target='_blank'> <img style='max-height: 14px; max-width: 14px;'  src='http://mirrors.creativecommons.org/presskit/icons/cc.png'/> </a>",
			"description_file": "samsung-galaxy-j5.jpg"
		}, {
			"key": "7",
			"name": "Galaxy J7",
			"values": {
				"Brand": "Samsung",
				"Price": 200,
				"Operating System": "Android",
				"Valoracion usuarios": 5,
				"Valoracion OCU": "",
				"Procesador": "Octa Core",
				"#Core": 8,
				"Memory": 16,
				"RAM": 2,
				"Tamaño Pantalla Normalizado": "",
				"Screen Size inches": 5.5,
				"Biometric security": "NO",
				"Water resistance": "NO",
				"Battery (mAh)": 3300,
				"Duración Batería Espera": 354,
				"Duración Batería Conversación": 18,
				"Peso": 166,
				"Front Camera (MP)": 5,
				"Back Camera (MP)": 13,
				"back cameras": "NO",
				"Resolución Video": "",
				"Color": "Negro Blanco Dorado",
				"Conectividad Alta velocidad": "4G",
				"GPS": "SI",
				"Sensors": "Medio",
				"Carga Inalámbrica": "NO"
			},
			"description_html": "<img style='max-height: 100px; max-width: 100px;'  src='http://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Samsung_GALAXY_S4_zoom_%28White%29.jpg/800px-Samsung_GALAXY_S4_zoom_%28White%29.jpg'/> <a title='Photo by Samsung Belgium (Flickr: GALAXY S4 zoom (1)) [CC BY 2.0 (http://creativecommons.org/licenses/by/2.0)], via Wikimedia Commons' href='http://commons.wikimedia.org/wiki/File:Samsung_GALAXY_S4_zoom_(White).jpg' target='_blank'> <img style='max-height: 14px; max-width: 14px;'  src='http://mirrors.creativecommons.org/presskit/icons/cc.png'/> </a>",
			"description_file": "samsung-galaxy-j7.jpg"
		}, {
			"key": "8",
			"name": "P9 Lite",
			"values": {
				"Brand": "Huawei",
				"Price": 209,
				"Operating System": "Android",
				"Valoracion usuarios": 4,
				"Valoracion OCU": "",
				"Procesador": "Quad core",
				"#Core": 4,
				"Memory": 16,
				"RAM": 3,
				"Tamaño Pantalla Normalizado": "",
				"Screen Size inches": 5.2,
				"Biometric security": "Fingerprint",
				"Water resistance": "NO",
				"Battery (mAh)": 3000,
				"Duración Batería Espera": 360,
				"Duración Batería Conversación": 31,
				"Peso": 147,
				"Front Camera (MP)": 8,
				"Back Camera (MP)": 13,
				"back cameras": "NO",
				"Resolución Video": "",
				"Color": "Blanco Negro",
				"Conectividad Alta velocidad": "4G",
				"GPS": "SI",
				"Sensors": "Alto",
				"Carga Inalámbrica": "NO"
			},
			"description_html": "<img style='max-height: 100px; max-width: 100px;'  src='http://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Samsung_GALAXY_S4_zoom_%28White%29.jpg/800px-Samsung_GALAXY_S4_zoom_%28White%29.jpg'/> <a title='Photo by Samsung Belgium (Flickr: GALAXY S4 zoom (1)) [CC BY 2.0 (http://creativecommons.org/licenses/by/2.0)], via Wikimedia Commons' href='http://commons.wikimedia.org/wiki/File:Samsung_GALAXY_S4_zoom_(White).jpg' target='_blank'> <img style='max-height: 14px; max-width: 14px;'  src='http://mirrors.creativecommons.org/presskit/icons/cc.png'/> </a>",
			"description_file": "huawei-p9-lite.png"
		}, {
			"key": "9",
			"name": "Galaxy A5",
			"values": {
				"Brand": "Samsung",
				"Price": 266,
				"Operating System": "Android",
				"Valoracion usuarios": 5,
				"Valoracion OCU": "",
				"Procesador": "Octa Core",
				"#Core": 8,
				"Memory": 16,
				"RAM": 2,
				"Tamaño Pantalla Normalizado": "",
				"Screen Size inches": 5.2,
				"Biometric security": "Fingerprint",
				"Water resistance": "NO",
				"Battery (mAh)": 2900,
				"Duración Batería Espera": 0,
				"Duración Batería Conversación": 0,
				"Peso": 145,
				"Front Camera (MP)": 5,
				"Back Camera (MP)": 13,
				"back cameras": "NO",
				"Resolución Video": "",
				"Color": "Negro Dorado",
				"Conectividad Alta velocidad": "4G",
				"GPS": "SI",
				"Sensors": "Medio",
				"Carga Inalámbrica": "NO"
			},
			"description_html": "<img style='max-height: 100px; max-width: 100px;'  src='http://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Samsung_GALAXY_S4_zoom_%28White%29.jpg/800px-Samsung_GALAXY_S4_zoom_%28White%29.jpg'/> <a title='Photo by Samsung Belgium (Flickr: GALAXY S4 zoom (1)) [CC BY 2.0 (http://creativecommons.org/licenses/by/2.0)], via Wikimedia Commons' href='http://commons.wikimedia.org/wiki/File:Samsung_GALAXY_S4_zoom_(White).jpg' target='_blank'> <img style='max-height: 14px; max-width: 14px;'  src='http://mirrors.creativecommons.org/presskit/icons/cc.png'/> </a>",
			"description_file": "samsung-galaxy-a5.jpg"
		}, {
			"key": "10",
			"name": "Nova Plus",
			"values": {
				"Brand": "Huawei",
				"Price": 329,
				"Operating System": "Android",
				"Valoracion usuarios": 5,
				"Valoracion OCU": "",
				"Procesador": "Octa Core",
				"#Core": 8,
				"Memory": 32,
				"RAM": 3,
				"Tamaño Pantalla Normalizado": "",
				"Screen Size inches": 5.5,
				"Biometric security": "Fingerprint",
				"Water resistance": "NO",
				"Battery (mAh)": 3340,
				"Duración Batería Espera": 800,
				"Duración Batería Conversación": 22,
				"Peso": 160,
				"Front Camera (MP)": 8,
				"Back Camera (MP)": 16,
				"back cameras": "NO",
				"Resolución Video": "",
				"Color": "Negro",
				"Conectividad Alta velocidad": "4G",
				"GPS": "SI",
				"Sensors": "Alto",
				"Carga Inalámbrica": "NO"
			},
			"description_html": "<img style='max-height: 100px; max-width: 100px;'  src='http://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Samsung_GALAXY_S4_zoom_%28White%29.jpg/800px-Samsung_GALAXY_S4_zoom_%28White%29.jpg'/> <a title='Photo by Samsung Belgium (Flickr: GALAXY S4 zoom (1)) [CC BY 2.0 (http://creativecommons.org/licenses/by/2.0)], via Wikimedia Commons' href='http://commons.wikimedia.org/wiki/File:Samsung_GALAXY_S4_zoom_(White).jpg' target='_blank'> <img style='max-height: 14px; max-width: 14px;'  src='http://mirrors.creativecommons.org/presskit/icons/cc.png'/> </a>",
			"description_file": "huawei-nova-plus.png"
		}, {
			"key": "11",
			"name": "iPhone SE 16GB",
			"values": {
				"Brand": "Apple",
				"Price": 360,
				"Operating System": "iOS",
				"Valoracion usuarios": 0,
				"Valoracion OCU": "",
				"Procesador": "A9",
				"#Core": 8,
				"Memory": 16,
				"RAM": 0,
				"Tamaño Pantalla Normalizado": "",
				"Screen Size inches": 4,
				"Biometric security": "Fingerprint",
				"Water resistance": "NO",
				"Battery (mAh)": 1560,
				"Duración Batería Espera": 0,
				"Duración Batería Conversación": 113,
				"Peso": 0,
				"Front Camera (MP)": 1.2,
				"Back Camera (MP)": 12,
				"back cameras": "NO",
				"Resolución Video": "",
				"Color": "Plata Oro Rosa Oro Gris Espacial",
				"Conectividad Alta velocidad": "4G",
				"GPS": "SI",
				"Sensors": "Medio",
				"Carga Inalámbrica": "NO"
			},
			"description_html": "<img style='max-height: 100px; max-width: 100px;'  src='http://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Samsung_GALAXY_S4_zoom_%28White%29.jpg/800px-Samsung_GALAXY_S4_zoom_%28White%29.jpg'/> <a title='Photo by Samsung Belgium (Flickr: GALAXY S4 zoom (1)) [CC BY 2.0 (http://creativecommons.org/licenses/by/2.0)], via Wikimedia Commons' href='http://commons.wikimedia.org/wiki/File:Samsung_GALAXY_S4_zoom_(White).jpg' target='_blank'> <img style='max-height: 14px; max-width: 14px;'  src='http://mirrors.creativecommons.org/presskit/icons/cc.png'/> </a>",
			"description_file": "iphone-se.jpg"
		}, {
			"key": "12",
			"name": "P9",
			"values": {
				"Brand": "Huawei",
				"Price": 389,
				"Operating System": "Android",
				"Valoracion usuarios": 5,
				"Valoracion OCU": "",
				"Procesador": "Octa Core",
				"#Core": 8,
				"Memory": 32,
				"RAM": 3,
				"Tamaño Pantalla Normalizado": "",
				"Screen Size inches": 5.2,
				"Biometric security": "Fingerprint",
				"Water resistance": "NO",
				"Battery (mAh)": 3600,
				"Duración Batería Espera": 566,
				"Duración Batería Conversación": 33,
				"Peso": 144,
				"Front Camera (MP)": 8,
				"Back Camera (MP)": 12,
				"back cameras": "NO",
				"Resolución Video": "",
				"Color": "Azul",
				"Conectividad Alta velocidad": "4G",
				"GPS": "SI",
				"Sensors": "Alto",
				"Carga Inalámbrica": "NO"
			},
			"description_html": "<img style='max-height: 100px; max-width: 100px;'  src='http://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Samsung_GALAXY_S4_zoom_%28White%29.jpg/800px-Samsung_GALAXY_S4_zoom_%28White%29.jpg'/> <a title='Photo by Samsung Belgium (Flickr: GALAXY S4 zoom (1)) [CC BY 2.0 (http://creativecommons.org/licenses/by/2.0)], via Wikimedia Commons' href='http://commons.wikimedia.org/wiki/File:Samsung_GALAXY_S4_zoom_(White).jpg' target='_blank'> <img style='max-height: 14px; max-width: 14px;'  src='http://mirrors.creativecommons.org/presskit/icons/cc.png'/> </a>",
			"description_file": "huawei-p9.png"
		}, {
			"key": "13",
			"name": "iPhone SE 64GB",
			"values": {
				"Brand": "Apple",
				"Price": 400,
				"Operating System": "iOS",
				"Valoracion usuarios": 0,
				"Valoracion OCU": "",
				"Procesador": "A9",
				"#Core": 8,
				"Memory": 64,
				"RAM": 0,
				"Tamaño Pantalla Normalizado": "",
				"Screen Size inches": 4,
				"Biometric security": "Fingerprint",
				"Water resistance": "NO",
				"Battery (mAh)": 1560,
				"Duración Batería Espera": 0,
				"Duración Batería Conversación": 113,
				"Peso": 0,
				"Front Camera (MP)": 1.2,
				"Back Camera (MP)": 12,
				"back cameras": "NO",
				"Resolución Video": "",
				"Color": "Plata Oro Rosa Oro Gris Espacial",
				"Conectividad Alta velocidad": "4G",
				"GPS": "SI",
				"Sensors": "Medio",
				"Carga Inalámbrica": "NO"
			},
			"description_html": "<img style='max-height: 100px; max-width: 100px;'  src='http://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Samsung_GALAXY_S4_zoom_%28White%29.jpg/800px-Samsung_GALAXY_S4_zoom_%28White%29.jpg'/> <a title='Photo by Samsung Belgium (Flickr: GALAXY S4 zoom (1)) [CC BY 2.0 (http://creativecommons.org/licenses/by/2.0)], via Wikimedia Commons' href='http://commons.wikimedia.org/wiki/File:Samsung_GALAXY_S4_zoom_(White).jpg' target='_blank'> <img style='max-height: 14px; max-width: 14px;'  src='http://mirrors.creativecommons.org/presskit/icons/cc.png'/> </a>",
			"description_file": "iphone-se.jpg"
		}, {
			"key": "14",
			"name": "Galaxy S7 ",
			"values": {
				"Brand": "Samsung",
				"Price": 532,
				"Operating System": "Android",
				"Valoracion usuarios": 5,
				"Valoracion OCU": "",
				"Procesador": "Octa Core",
				"#Core": 8,
				"Memory": 32,
				"RAM": 4,
				"Tamaño Pantalla Normalizado": "",
				"Screen Size inches": 5.1,
				"Biometric security": "Fingerprint",
				"Water resistance": "IP68",
				"Battery (mAh)": 3000,
				"Duración Batería Espera": 0,
				"Duración Batería Conversación": 22,
				"Peso": 152,
				"Front Camera (MP)": 5,
				"Back Camera (MP)": 12,
				"back cameras": "NO",
				"Resolución Video": "",
				"Color": "Blanco Negro Dorado Plata",
				"Conectividad Alta velocidad": "4G",
				"GPS": "SI",
				"Sensors": "Alto",
				"Carga Inalámbrica": "SI"
			},
			"description_html": "<img style='max-height: 100px; max-width: 100px;'  src='http://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Samsung_GALAXY_S4_zoom_%28White%29.jpg/800px-Samsung_GALAXY_S4_zoom_%28White%29.jpg'/> <a title='Photo by Samsung Belgium (Flickr: GALAXY S4 zoom (1)) [CC BY 2.0 (http://creativecommons.org/licenses/by/2.0)], via Wikimedia Commons' href='http://commons.wikimedia.org/wiki/File:Samsung_GALAXY_S4_zoom_(White).jpg' target='_blank'> <img style='max-height: 14px; max-width: 14px;'  src='http://mirrors.creativecommons.org/presskit/icons/cc.png'/> </a>",
			"description_file": "samsung-galaxy-s7.jpg"
		}, {
			"key": "15",
			"name": "iPhone 7  32GB",
			"values": {
				"Brand": "Apple",
				"Price": 575,
				"Operating System": "iOS",
				"Valoracion usuarios": 5,
				"Valoracion OCU": "",
				"Procesador": "A10 Fusion",
				"#Core": 8,
				"Memory": 32,
				"RAM": 3,
				"Tamaño Pantalla Normalizado": "",
				"Screen Size inches": 4.7,
				"Biometric security": "Fingerprint",
				"Water resistance": "IP67",
				"Battery (mAh)": 1969,
				"Duración Batería Espera": 240,
				"Duración Batería Conversación": 14,
				"Peso": 138,
				"Front Camera (MP)": 7,
				"Back Camera (MP)": 12,
				"back cameras": "NO",
				"Resolución Video": "",
				"Color": "Plata Oro Rosa Oro Negro Mate",
				"Conectividad Alta velocidad": "4G",
				"GPS": "SI",
				"Sensors": "Alto",
				"Carga Inalámbrica": "NO"
			},
			"description_html": "<img style='max-height: 100px; max-width: 100px;'  src='http://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Samsung_GALAXY_S4_zoom_%28White%29.jpg/800px-Samsung_GALAXY_S4_zoom_%28White%29.jpg'/> <a title='Photo by Samsung Belgium (Flickr: GALAXY S4 zoom (1)) [CC BY 2.0 (http://creativecommons.org/licenses/by/2.0)], via Wikimedia Commons' href='http://commons.wikimedia.org/wiki/File:Samsung_GALAXY_S4_zoom_(White).jpg' target='_blank'> <img style='max-height: 14px; max-width: 14px;'  src='http://mirrors.creativecommons.org/presskit/icons/cc.png'/> </a>",
			"description_file": "iphone-7.png"
		}, {
			"key": "16",
			"name": "P9 Plus",
			"values": {
				"Brand": "Huawei",
				"Price": 599,
				"Operating System": "Android",
				"Valoracion usuarios": 5,
				"Valoracion OCU": "",
				"Procesador": "Octa Core",
				"#Core": 8,
				"Memory": 64,
				"RAM": 4,
				"Tamaño Pantalla Normalizado": "",
				"Screen Size inches": 5.5,
				"Biometric security": "Fingerprint",
				"Water resistance": "NO",
				"Battery (mAh)": 3400,
				"Duración Batería Espera": 0,
				"Duración Batería Conversación": 0,
				"Peso": 162,
				"Front Camera (MP)": 8,
				"Back Camera (MP)": 12,
				"back cameras": "SI",
				"Resolución Video": "",
				"Color": "Negro",
				"Conectividad Alta velocidad": "4G",
				"GPS": "SI",
				"Sensors": "Alto",
				"Carga Inalámbrica": "NO"
			},
			"description_html": "<img style='max-height: 100px; max-width: 100px;'  src='http://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Samsung_GALAXY_S4_zoom_%28White%29.jpg/800px-Samsung_GALAXY_S4_zoom_%28White%29.jpg'/> <a title='Photo by Samsung Belgium (Flickr: GALAXY S4 zoom (1)) [CC BY 2.0 (http://creativecommons.org/licenses/by/2.0)], via Wikimedia Commons' href='http://commons.wikimedia.org/wiki/File:Samsung_GALAXY_S4_zoom_(White).jpg' target='_blank'> <img style='max-height: 14px; max-width: 14px;'  src='http://mirrors.creativecommons.org/presskit/icons/cc.png'/> </a>",
			"description_file": "huawei-p9-plus.jpg"
		}, {
			"key": "17",
			"name": "Galaxy S7 Edge",
			"values": {
				"Brand": "Samsung",
				"Price": 607,
				"Operating System": "Android",
				"Valoracion usuarios": 5,
				"Valoracion OCU": "",
				"Procesador": "Octa Core",
				"#Core": 8,
				"Memory": 32,
				"RAM": 4,
				"Tamaño Pantalla Normalizado": "",
				"Screen Size inches": 5.5,
				"Biometric security": "Fingerprint",
				"Water resistance": "IP68",
				"Battery (mAh)": 3000,
				"Duración Batería Espera": 0,
				"Duración Batería Conversación": 27,
				"Peso": 157,
				"Front Camera (MP)": 5,
				"Back Camera (MP)": 12,
				"back cameras": "NO",
				"Resolución Video": "",
				"Color": "Blanco Negro Dorado Plata",
				"Conectividad Alta velocidad": "4G",
				"GPS": "SI",
				"Sensors": "Alto",
				"Carga Inalámbrica": "SI"
			},
			"description_html": "<img style='max-height: 100px; max-width: 100px;'  src='http://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Samsung_GALAXY_S4_zoom_%28White%29.jpg/800px-Samsung_GALAXY_S4_zoom_%28White%29.jpg'/> <a title='Photo by Samsung Belgium (Flickr: GALAXY S4 zoom (1)) [CC BY 2.0 (http://creativecommons.org/licenses/by/2.0)], via Wikimedia Commons' href='http://commons.wikimedia.org/wiki/File:Samsung_GALAXY_S4_zoom_(White).jpg' target='_blank'> <img style='max-height: 14px; max-width: 14px;'  src='http://mirrors.creativecommons.org/presskit/icons/cc.png'/> </a>",
			"description_file": "samsung-galaxy-s7-edge.jpg"
		}, {
			"key": "18",
			"name": "Mate 9",
			"values": {
				"Brand": "Huawei",
				"Price": 630,
				"Operating System": "Android",
				"Valoracion usuarios": 5,
				"Valoracion OCU": "",
				"Procesador": "Octa Core",
				"#Core": 8,
				"Memory": 64,
				"RAM": 4,
				"Tamaño Pantalla Normalizado": "",
				"Screen Size inches": 5.9,
				"Biometric security": "Fingerprint",
				"Water resistance": "NO",
				"Battery (mAh)": 4000,
				"Duración Batería Espera": 600,
				"Duración Batería Conversación": 28,
				"Peso": 190,
				"Front Camera (MP)": 8,
				"Back Camera (MP)": 20,
				"back cameras": "NO",
				"Resolución Video": "",
				"Color": "Space Gray Moonlight silver",
				"Conectividad Alta velocidad": "4G",
				"GPS": "SI",
				"Sensors": "Alto",
				"Carga Inalámbrica": "NO"
			},
			"description_html": "<img style='max-height: 100px; max-width: 100px;'  src='http://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Samsung_GALAXY_S4_zoom_%28White%29.jpg/800px-Samsung_GALAXY_S4_zoom_%28White%29.jpg'/> <a title='Photo by Samsung Belgium (Flickr: GALAXY S4 zoom (1)) [CC BY 2.0 (http://creativecommons.org/licenses/by/2.0)], via Wikimedia Commons' href='http://commons.wikimedia.org/wiki/File:Samsung_GALAXY_S4_zoom_(White).jpg' target='_blank'> <img style='max-height: 14px; max-width: 14px;'  src='http://mirrors.creativecommons.org/presskit/icons/cc.png'/> </a>",
			"description_file": "huawei-mate-9.jpg"
		}, {
			"key": "19",
			"name": "iPhone 7 128GB",
			"values": {
				"Brand": "Apple",
				"Price": 660,
				"Operating System": "iOS",
				"Valoracion usuarios": 5,
				"Valoracion OCU": "",
				"Procesador": "A10 Fusion",
				"#Core": 8,
				"Memory": 128,
				"RAM": 3,
				"Tamaño Pantalla Normalizado": "",
				"Screen Size inches": 4.7,
				"Biometric security": "Fingerprint",
				"Water resistance": "IP67",
				"Battery (mAh)": 1969,
				"Duración Batería Espera": 240,
				"Duración Batería Conversación": 14,
				"Peso": 138,
				"Front Camera (MP)": 7,
				"Back Camera (MP)": 12,
				"back cameras": "NO",
				"Resolución Video": "",
				"Color": "Plata Oro Rosa Oro Negro Mate",
				"Conectividad Alta velocidad": "4G",
				"GPS": "SI",
				"Sensors": "Alto",
				"Carga Inalámbrica": "NO"
			},
			"description_html": "<img style='max-height: 100px; max-width: 100px;'  src='http://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Samsung_GALAXY_S4_zoom_%28White%29.jpg/800px-Samsung_GALAXY_S4_zoom_%28White%29.jpg'/> <a title='Photo by Samsung Belgium (Flickr: GALAXY S4 zoom (1)) [CC BY 2.0 (http://creativecommons.org/licenses/by/2.0)], via Wikimedia Commons' href='http://commons.wikimedia.org/wiki/File:Samsung_GALAXY_S4_zoom_(White).jpg' target='_blank'> <img style='max-height: 14px; max-width: 14px;'  src='http://mirrors.creativecommons.org/presskit/icons/cc.png'/> </a>",
			"description_file": "iphone-7.png"
		}, {
			"key": "20",
			"name": "iPhone 7 plus 32GB",
			"values": {
				"Brand": "Apple",
				"Price": 680,
				"Operating System": "iOS",
				"Valoracion usuarios": 5,
				"Valoracion OCU": "",
				"Procesador": "A10 Fusion",
				"#Core": 8,
				"Memory": 32,
				"RAM": 3,
				"Tamaño Pantalla Normalizado": "",
				"Screen Size inches": 5.5,
				"Biometric security": "Fingerprint",
				"Water resistance": "IP67",
				"Battery (mAh)": 2900,
				"Duración Batería Espera": 384,
				"Duración Batería Conversación": 21,
				"Peso": 188,
				"Front Camera (MP)": 7,
				"Back Camera (MP)": 12,
				"back cameras": "SI",
				"Resolución Video": "",
				"Color": "Plata Oro Rosa Oro Negro Mate",
				"Conectividad Alta velocidad": "4G",
				"GPS": "SI",
				"Sensors": "Alto",
				"Carga Inalámbrica": "NO"
			},
			"description_html": "<img style='max-height: 100px; max-width: 100px;'  src='http://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Samsung_GALAXY_S4_zoom_%28White%29.jpg/800px-Samsung_GALAXY_S4_zoom_%28White%29.jpg'/> <a title='Photo by Samsung Belgium (Flickr: GALAXY S4 zoom (1)) [CC BY 2.0 (http://creativecommons.org/licenses/by/2.0)], via Wikimedia Commons' href='http://commons.wikimedia.org/wiki/File:Samsung_GALAXY_S4_zoom_(White).jpg' target='_blank'> <img style='max-height: 14px; max-width: 14px;'  src='http://mirrors.creativecommons.org/presskit/icons/cc.png'/> </a>",
			"description_file": "iphone-7-plus.png"
		}, {
			"key": "21",
			"name": "iPhone 7 256GB",
			"values": {
				"Brand": "Apple",
				"Price": 745,
				"Operating System": "iOS",
				"Valoracion usuarios": 5,
				"Valoracion OCU": "",
				"Procesador": "A10 Fusion",
				"#Core": 8,
				"Memory": 256,
				"RAM": 3,
				"Tamaño Pantalla Normalizado": "",
				"Screen Size inches": 4.7,
				"Biometric security": "Fingerprint",
				"Water resistance": "IP67",
				"Battery (mAh)": 1969,
				"Duración Batería Espera": 240,
				"Duración Batería Conversación": 14,
				"Peso": 138,
				"Front Camera (MP)": 7,
				"Back Camera (MP)": 12,
				"back cameras": "NO",
				"Resolución Video": "",
				"Color": "Plata Oro Rosa Oro Negro Mate",
				"Conectividad Alta velocidad": "4G",
				"GPS": "SI",
				"Sensors": "Alto",
				"Carga Inalámbrica": "NO"
			},
			"description_html": "<img style='max-height: 100px; max-width: 100px;'  src='http://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Samsung_GALAXY_S4_zoom_%28White%29.jpg/800px-Samsung_GALAXY_S4_zoom_%28White%29.jpg'/> <a title='Photo by Samsung Belgium (Flickr: GALAXY S4 zoom (1)) [CC BY 2.0 (http://creativecommons.org/licenses/by/2.0)], via Wikimedia Commons' href='http://commons.wikimedia.org/wiki/File:Samsung_GALAXY_S4_zoom_(White).jpg' target='_blank'> <img style='max-height: 14px; max-width: 14px;'  src='http://mirrors.creativecommons.org/presskit/icons/cc.png'/> </a>",
			"description_file": "iphone-7.png"
		}, {
			"key": "22",
			"name": "iPhone 7 plus 128GB",
			"values": {
				"Brand": "Apple",
				"Price": 765,
				"Operating System": "iOS",
				"Valoracion usuarios": 5,
				"Valoracion OCU": "",
				"Procesador": "A10 Fusion",
				"#Core": 8,
				"Memory": 128,
				"RAM": 3,
				"Tamaño Pantalla Normalizado": "",
				"Screen Size inches": 5.5,
				"Biometric security": "Fingerprint",
				"Water resistance": "IP67",
				"Battery (mAh)": 2900,
				"Duración Batería Espera": 384,
				"Duración Batería Conversación": 21,
				"Peso": 188,
				"Front Camera (MP)": 7,
				"Back Camera (MP)": 12,
				"back cameras": "SI",
				"Resolución Video": "",
				"Color": "Plata Oro Rosa Oro Negro Mate",
				"Conectividad Alta velocidad": "4G",
				"GPS": "SI",
				"Sensors": "Alto",
				"Carga Inalámbrica": "NO"
			},
			"description_html": "<img style='max-height: 100px; max-width: 100px;'  src='http://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Samsung_GALAXY_S4_zoom_%28White%29.jpg/800px-Samsung_GALAXY_S4_zoom_%28White%29.jpg'/> <a title='Photo by Samsung Belgium (Flickr: GALAXY S4 zoom (1)) [CC BY 2.0 (http://creativecommons.org/licenses/by/2.0)], via Wikimedia Commons' href='http://commons.wikimedia.org/wiki/File:Samsung_GALAXY_S4_zoom_(White).jpg' target='_blank'> <img style='max-height: 14px; max-width: 14px;'  src='http://mirrors.creativecommons.org/presskit/icons/cc.png'/> </a>",
			"description_file": "iphone-7-plus.png"
		}, {
			"key": "23",
			"name": "iPhone 7 plus 256GB",
			"values": {
				"Brand": "Apple",
				"Price": 850,
				"Operating System": "iOS",
				"Valoracion usuarios": 5,
				"Valoracion OCU": "",
				"Procesador": "A10 Fusion",
				"#Core": 8,
				"Memory": 256,
				"RAM": 3,
				"Tamaño Pantalla Normalizado": "",
				"Screen Size inches": 5.5,
				"Biometric security": "Fingerprint",
				"Water resistance": "IP67",
				"Battery (mAh)": 2900,
				"Duración Batería Espera": 384,
				"Duración Batería Conversación": 21,
				"Peso": 188,
				"Front Camera (MP)": 7,
				"Back Camera (MP)": 12,
				"back cameras": "SI",
				"Resolución Video": "",
				"Color": "Plata Oro Rosa Oro Negro Mate",
				"Conectividad Alta velocidad": "4G",
				"GPS": "SI",
				"Sensors": "Alto",
				"Carga Inalámbrica": "NO"
			},
			"description_html": "<img style='max-height: 100px; max-width: 100px;'  src='http://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Samsung_GALAXY_S4_zoom_%28White%29.jpg/800px-Samsung_GALAXY_S4_zoom_%28White%29.jpg'/> <a title='Photo by Samsung Belgium (Flickr: GALAXY S4 zoom (1)) [CC BY 2.0 (http://creativecommons.org/licenses/by/2.0)], via Wikimedia Commons' href='http://commons.wikimedia.org/wiki/File:Samsung_GALAXY_S4_zoom_(White).jpg' target='_blank'> <img style='max-height: 14px; max-width: 14px;'  src='http://mirrors.creativecommons.org/presskit/icons/cc.png'/> </a>",
			"description_file": "iphone-7-plus.png"
		}]
	};


	// Create the service wrapper
	var tradeof = getTradeofService(body.credentials);
	// Create conversation payload
	problem = enterConditions(body.conversation.context, problem);
	// Call to conversation service
	tradeof.dilemmas(problem, function(err, data) {
		if (err)
			return callback(err, undefined);
		else {
			data.selection = prepareResult(data, problem);
		}
		return callback(undefined, data);
	});
}

function prepareResult(data, problem) {
	var i = 0;
	var j = 0;
	var k = 0;

	var selection = {
		"solutions": [],
		"devices": [],
		"numDevices": 0
	};
	while (data.resolution.solutions[i] != null) {
		if (data.resolution.solutions[i].status == "FRONT" || data.resolution.solutions[i].status == "EXCLUDED")
			k++;
		if (data.resolution.solutions[i].status == "FRONT") {
			selection.devices[j] = problem.options[data.resolution.solutions[i].solution_ref - 1];
			j++;
		}
		i++;
	}
/*	if (j == 1 && k > 1) //Si solo hay un terminal añadimos otro. El primero de los excluidos.
	{
		selection.devices[1] = problem.options[1];
		j = 2;
	}
*/	selection.numDevices = j;
	selection.numDevicesWithExc = k;
//	selection.solutions = data.resolution.solutions;
//	selection.problem = problem;
	problem = null;
	return selection;
}

function getTradeofService(credentials) {
	return new watson({
		url: 'https://gateway.watsonplatform.net/tradeoff-analytics/api',
		username: credentials.username || '<username>',
		password: credentials.password || '<password>',
		version_date: '2016-09-20',
		version: 'v1'
	});
}

function enterConditions(context, problem) {
	/*
	    "Brand": vacío o 1
	    "MaxPrice": siempre viene con un precio máximo
	    "MinCores": 4,
	    "MinPrice": 0,
	    "MinSensors": 1=bajo, 2=medio, 3=alto
	    "BioSecurity": solo si viene a true y entonces se tiene en cuenta
	    "MaxScreenSize": 6’
	    "MinScreenSize": 4’
	    "OperatingSystem": "", o con un valor
	    "BackCameraMinRes": 8mp
	    "DoubleBackCamera": solo si viene a true y entonces se tiene en cuenta
	    "MinStorageSizeGB": 32,
	    "MinWaterResistant": No (los tres), IP67 (los dos), IP68(solo)
	    "BatteryMinConversation": 6
	*/
	if (context.Brand !== "") {
		problem.columns[0].range = [context.Brand];
		problem.columns[0].is_objective = true;
	} else {
		problem.columns[0].is_objective = false;
	}

	if (context.MaxPrice != 1000) {
		if (context.MaxPrice == 2000) {
			problem.columns[1].goal = "max";
			problem.columns[1].is_objective = true;
		} else {
			problem.columns[1].range.high = context.MaxPrice;
			problem.columns[1].is_objective = true;
		}
	}

	if (context.MinPrice != 0) {
		problem.columns[1].range.low = context.MinPrice;
		problem.columns[1].is_objective = true;
	}

	if (context.MinSensors == 2) {
		problem.columns[22].range = ["Alto", "Medio"];
		problem.columns[22].is_objective = true;
	} else if (context.MinSensors === 3) {
		problem.columns[22].range = ["Alto"];
		problem.columns[22].is_objective = true;
	} else {
		problem.columns[22].is_objective = false;
	}

	if (context.BioSecurity == true) {
		problem.columns[10].range = ["Fingerprint"];
		problem.columns[10].is_objective = true;
	} else {
		problem.columns[10].is_objective = false;
	}

	if (context.MaxScreenSize != 6) {
		problem.columns[9].range.high = context.MaxScreenSize;
		problem.columns[9].is_objective = true;
	}

	if (context.MinScreenSize != 4) {
		problem.columns[9].range.low = context.MinScreenSize;
		problem.columns[9].is_objective = true;
	} else {
		problem.columns[9].is_objective = false;
	}

	if (context.OperatingSystem != "") {
		problem.columns[2].range = [context.OperatingSystem];
		problem.columns[2].is_objective = true;
	} else {
		problem.columns[2].is_objective = false;
	}

	if (context.BackCameraMinRes != 0) {
		problem.columns[17].range = {
			"low": context.BackCameraMinRes,
			"high": 20
		};
		problem.columns[17].is_objective = true;
	} else {
		problem.columns[17].is_objective = false;
	}

	if (context.FrontCameraMinRes != 0) {
		problem.columns[16].range = {
			"low": context.FrontCameraMinRes,
			"high": 8
		};
		problem.columns[16].is_objective = true;
	} else {
		problem.columns[16].is_objective = false;
	}


	if (context.DoubleBackCamera == true) {
		problem.columns[18].range = ["SI"];
		problem.columns[18].is_objective = true;
	} else {
		problem.columns[18].is_objective = false;
	}

	if (context.MinStorageSizeGB != 0) {
		problem.columns[7].range = {
			"low": context.MinStorageSizeGB,
			"high": 256
		};
		problem.columns[7].is_objective = true;
	} else {
		problem.columns[7].is_objective = false;
	}

	if (context.MinWaterResistant == "IP67") {
		problem.columns[11].range = ["IP68", "IP67"];
		problem.columns[11].is_objective = true;
	} else if (context.MinWaterResistant == "IP68") {
		problem.columns[11].range = ["IP68"];
		problem.columns[11].is_objective = true;
	} else {
		problem.columns[11].is_objective = false;
	}

	if (context.BatteryMinConversation != 6) {
		problem.columns[7].range = {
			"low": context.BatteryMinConversation,
			"high": 1500
		};
		problem.columns[7].is_objective = true;
	} else {
		problem.columns[7].is_objective = false;
	}
	return problem;
}