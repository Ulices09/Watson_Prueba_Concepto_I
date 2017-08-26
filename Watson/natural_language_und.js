var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var auth = require('../auth.js');

var natural_language_understanding = new NaturalLanguageUnderstandingV1(auth.watson_natural_language_understanding);

var params = {
    'text': 'El Perú, oficialmente la República del Perú, es un país soberano del oeste de América del Sur. El océano Pacífico bordea su costa y limita con Ecuador y Colombia al norte, Brasil al este, y Bolivia y Chile al sureste. Su territorio se compone de diversos paisajes: los valles, las mesetas y las altas cumbres de los Andes se despliegan al oeste hacia la costa desértica y al este hacia la Amazonia. Es uno de los países con mayor diversidad biológica y mayores recursos minerales del mundo.',
    'features': {
      'entities': {
        'emotion': true,
        'sentiment': true,
        'limit': 2
      },
      'keywords': {
        'emotion': true,
        'sentiment': true,
        'limit': 2
      }
    }
  }
  
  natural_language_understanding.analyze(params, function(err, res) {
    if (err)
      console.log('error:', err);
    else
      console.log(JSON.stringify(res, null, 2));
  });