var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var input , output = '';
    return res.render('index',{input:input, output: output})
});

router.post('/trigger', function(req, res, next) {
if (req.method === 'POST') {
    var AssistantV1 = require('watson-developer-cloud/assistant/v1');
    var input = req.body.chat;
    
    console.log(req.body.chat)

    var watsonAssistant = new AssistantV1({
      version: '2018-02-16',
      url: "https://gateway.watsonplatform.net/assistant/api",
      username: "YOUR-USER",
      password: "YOUR-PASS"
    });

    watsonAssistant.message({
      workspace_id: 'YOUR-WORKSPACE-ID',
      input: {'text': input}
    },  function(err, response) {
      if (err)
        console.log('error:', err);
      else
        var output;
        /*console.log(JSON.stringify(response, null, 2));*/
        output = response.output.text;
        return res.render('index',{input:input, output: output})
    });
  }
});



module.exports = router;
