var linebot = require("linebot");
var express = require("express");

var bot = linebot({
  channelId: "1611707234",
  channelSecret: "ed22fd81fb73114c0e6484ab372b5466",
  channelAccessToken:
    "6We1ZNjErd3nG++Rj3UbXHC6Lr30PqTo8a7i1OR+hWf7xqfu/OLpm2ghz5TpSxMjzVQ1qfM33FsxMP/6oP7lST6KhtgCQFSbZWnwnL/zTFoeuprpCgFPDRHo6fehA463oXWmyb8EwhK9MG8x2UTA7wdB04t89/1O/w1cDnyilFU="
});

//這一段的程式是專門處理當有人傳送文字訊息給LineBot時，我們的處理回應
bot.on("message", function(event) {
  var UserName = "";
  var userId = event.source.userId;
  var msg = event.message.text;
  /*
  event.source.profile().then(function(profile) {
    UserName = profile.displayName;
    console.log("1");
    console.log(profile.displayName);
    console.log(UserName);
  });
  */
  if ((event.message.type = "text")) {
    switch (event.message.text) {
      case "嘟嘟":
      case "阿嘟":
      case "寧嘟":
      case "林嘟":
      case "林都":
        //收到文字訊息時，直接把收到的訊息傳回去
        event
          .reply(event.message.text + "是條豬喔")
          .then(function(data) {
            // 傳送訊息成功時，可在此寫程式碼
            //console.log(msg);
            console.log("UserId = " + event.message.text);
          })
          .catch(function(error) {
            // 傳送訊息失敗時，可在此寫程式碼
            console.log("錯誤產生，錯誤碼：" + error);
          });
        break;
      case "姪子":
        event.reply(event.message.text + "是猴子");
        break;
      case "你好":
      case "Hello":
      case "hello":
      case "HELLO":
      case "Hi":
      case "hi":
      case "HI":
      console.log(12);
        event.source.profile().then(function(profile) {
          return event.reply(
            event.message.text + " " + profile.displayName //+ " " + profile.userId
          );
        });
        break;
      case "B":
        break;
      default:
      console.log(2);
        event.source.profile().then(function(profile) {
          return event.reply(
            
            "你說啥 " //+ " " + profile.userId
          );
        });
    }
    console.log("UserName = " + UserName);
  }
});

/*
setTimeout(function() {
  var userId = "U9ffbb6488e43aa1da8084065f3d62cf1";
  var sendMsg = "要發送的文字";
  bot.push(userId, sendMsg);
  console.log("send: " + sendMsg);
}, 5000);
*/
const app = express();
const linebotParser = bot.parser();
app.post("/", linebotParser);

var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("目前的port是__", port);
});
