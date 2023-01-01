const express = require('express');

const app = express();
const port= 2002;
app.use(express.json());

app.get('/querystring', (req, res) => {    // http 메서드가 get 이고 url 이 /querystring 인 api
   console.log(req.query)                  // querystring 형태로 요청받은 데이터 출력
//    const page = req.query.page || 1      <- 문법 기억하기 
    res.send("querystring page")          // "querystring page" 문자열을 반환
});    

app.post('/body-formdata', (req, res) => {  // http 메서드가 post 이고 url 이 /body-formdata 인 api
    res.send("폼데이터 페이지")              // "폼데이터 페이지" 문자열을 반환
});

app.post('/body-multipart', (req, res) => {  //http 메서드가 post 이고 url 이 /body-multipart 인 api
    res.send("멀티파트 페이지")               // "멀티파트 페이지" 문자열을 반환
});

app.post('/body-json', (req, res) => {    // http 메서드가 post 이고 url 이 /body-json 인 api
    console.log(req.body)                 //  body 로 요청받은 데이터 출력
    res.send("제이슨 페이지")              // "제이슨 페이지" 문자열을 반환
});

app.listen(port, () => {
    console.log(port, "서버 열림")
});