var express = require('express');
var app = express();
var fs = require("fs");

app.get('/get', function (req, res) {
   // 首先我们读取已存在的用户
   fs.readFile( __dirname + "/" + "wishes.json", 'utf8', function (err, data) {
       console.log(data);
       res.end( data);
   });
})

app.get('/add/:id', function (req, res) {
    // 增加
    fs.readFile( __dirname + "/" + "wishes.json", 'utf8', function (err, data) {
        var data = JSON.parse( data );
        data["wishes"].push(req.params.id)
        var str = JSON.stringify(data);
        fs.writeFile(__dirname + "/" + "wishes.json", str, function(err){
            if(err){
                console.error(err);
            }
            console.log("---添加弹幕---");
        })
        res.end(str);
    });
 })

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})