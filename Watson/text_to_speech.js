var TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');
var fs = require('fs');
var auth = require('../auth.js');

var text_to_speech = new TextToSpeechV1 (auth.watson_text_to_speech);

var params = {
    text: 'Hola ¿Cómo estás?. ¿Qué se te ofrece?',
    voice: 'es-LA_SofiaVoice',
    accept: 'audio/flac'
};

text_to_speech.synthesize(params).on('error', function(error) {
    console.log('Error:', error);
  }).pipe(fs.createWriteStream('../output/text_to_speech.flac'));
