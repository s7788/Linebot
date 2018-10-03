var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: '1611707234',
  channelSecret: 'ed22fd81fb73114c0e6484ab372b5466',
  channelAccessToken: '6We1ZNjErd3nG++Rj3UbXHC6Lr30PqTo8a7i1OR+hWf7xqfu/OLpm2ghz5TpSxMjzVQ1qfM33FsxMP/6oP7lST6KhtgCQFSbZWnwnL/zTFoeuprpCgFPDRHo6fehA463oXWmyb8EwhK9MG8x2UTA7wdB04t89/1O/w1cDnyilFU='
});

//這一段的程式是專門處理當有人傳送文字訊息給LineBot時，我們的處理回應
bot.on('message', function(event) {
  if (event.message.type = 'text') {
    var msg = event.message.text;
  //收到文字訊息時，直接把收到的訊息傳回去
    event.reply(msg).then(function(data) {
      // 傳送訊息成功時，可在此寫程式碼 
      //console.log(msg);
      console.log("林都市條豬");
    }).catch(function(error) {
      // 傳送訊息失敗時，可在此寫程式碼 
      console.log('錯誤產生，錯誤碼：'+error);
    });
  }
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log('目前的port是__', port);
});
