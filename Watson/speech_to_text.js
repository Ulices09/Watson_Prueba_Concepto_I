var SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
var fs = require('fs');
var auth = require('../auth.js');

var speech_to_text = new SpeechToTextV1(auth.watson_speech_to_text);

  var params = {
    model_id: 'es-ES_BroadbandModel',
    audio: fs.createReadStream("../resources/audio.flac"),
    content_type: 'audio/flac'
  };

  speech_to_text.recognize(params, function(error, res) {
    if (error)
      console.log('Error:', error);
    else{
        console.log(JSON.stringify(res, null, 2));
    }
  });