let express = require("express");
let app = express();
let path = require("path");
// post 需要借助一个第三方模块儿 body-parser
let bodyParser = require("body-parser");

// 静态资源文件
app.use(express.static(path.join("public")));

app.use(bodyParser.urlencoded()); //请求头是 xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
app.use(bodyParser.json()); // xhr.setRequestHeader('Content-type', 'application/json');
// get请求
app.get("/getdata", (req, res) => {
  // get请求的参数在req.query中
  console.log(req.query);
  // 简单测试，在真正开发的时，不可能返回的是一个字符串
  // res.send("456");
  // 在真正的开发的时候，返回的是json对象 【假数据】
  let obj = {
    code: 1,
    msg: "ok",
    data: [{
      name: "nihao",
      age: 12
    }]
  };
  res.status(200).send(obj);
});

// post请求 需要借助第三方模块 body-parser
app.post("/postdata", (req, res) => {
  // 设置跨域白名单 可以使用cors模块，这里用手写控制的跨域控制
  res.header("Access-Control-Allow-Origin", "*");
  // 向客户端返回请求的数据
  res.send(req.body);
});

// ajax错误处理
app.get('/err', (req, res) => {
  //console.log(xhr) ==>实验后端出错返回状态码500
  res.status(400).send('err')
})



// 封装ajax使用 get
app.get("/getAjax", (req, res) => {
  // res.status(400).send('hello');
  res.send({
    name: 'huhu',
    age: 12
  });
});

// 封装ajax使用 post
app.post("/postAjax", (req, res) => {
  res.status(400).send('hello');
});



// 监听3000端口
app.listen(3000);
console.log("http://localhost:3000");