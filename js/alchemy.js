var watsonAlchemy = require('watson-developer-cloud/alchemy-language/v1');  // alchemy v1 sdk

exports.getConcepts = function(body, callback) {
  var alchemy_language = getAlchemyService(body.apikey)
 if (body.input)
	body.input.language = 'english'
// 	body.input.language = 'spanish'
 alchemy_language.entities(body.input, function(err, entities) {
	if (err)
	  return callback(err, undefined)
    else
	  alchemy_language.taxonomy(body.input, function (err, taxonomies) {
        if (err)
          return callback(err, undefined)
        else
          return callback(undefined, getKeywords(entities.entities, taxonomies.taxonomy))
      });
  })
}

function getKeywords(entities, taxonomies) {
  var usefulEntities = entities.map(isUsefulEntity)
  var usefulTaxonomies = taxonomies.map(isUsefulTaxonomy)
  usefulEntities=usefulEntities.filter(function(item, pos, self) {
    return self.indexOf(item) == pos;
  })
  usefulTaxonomies=usefulTaxonomies.filter(function(item, pos, self) {
    return self.indexOf(item) == pos;
  })

  return  usefulEntities.concat(usefulTaxonomies).join(' ')
}

function isUsefulEntity(elem) {
  if (elem.type == "JobTitle")
	return "JOB"
}

function isUsefulTaxonomy(elem) {
//	console.log(elem.label);
  if (elem.confident != "no")
  {
  	if (elem.label.startsWith('/sports'))
  	  return "SPORT"
//  	  return "DEPORTE"
  	if (elem.label.endsWith('/social network'))
	  return "SOCIAL NETWORK"
//    	  return "RED SOCIAL"
  if (elem.label.endsWith('video and computer games'))
      return "GAMES"
//  	  return "JUEGOS"
    if (elem.label.startsWith('/art and entertainment'))
	  return "LEISURE"
//  	  return "OCIO"
  }
}

function getAlchemyService(apikey) {
  console.log(apikey)
  return new watsonAlchemy({
    api_key: apikey || 'API_KEY'
  });
}