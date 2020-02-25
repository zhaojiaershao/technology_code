let express = require("express");
let app = express();
let path = require("path");
// post 需要借助一个第三方模块儿 body-parser
let bodyParser = require("body-parser");

// 静态资源文件
app.use(express.static(path.join("public")));

app.use(bodyParser.urlencoded());
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
    data: [
      {
        name: "nihao",
        age: 12
      }
    ]
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

// 监听3000端口
app.listen(3000);
console.log("http://localhost:3000");
