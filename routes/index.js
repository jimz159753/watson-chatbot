var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
var AssistantV1 = require('watson-developer-cloud/assistant/v1');

var watsonAssistant = new AssistantV1({
  version: '2018-02-16',
  url: "https://gateway.watsonplatform.net/assistant/api",
  username: "204c0080-cb7a-4b8b-9ae7-4d51adbfe598",
  password: "8SsHScm3Fnqw"
});
  console.log('assistant',watsonAssistant._options.headers.Authorization)

watsonAssistant.message({
  workspace_id: '7b74f415-5a56-4879-b12d-a27a7665516e',
  input: {'text': 'music'}
},  function(err, response) {
  if (err)
    console.log('error:', err);
  else
    console.log(JSON.stringify(response, null, 2));
});
});



module.exports = router;
