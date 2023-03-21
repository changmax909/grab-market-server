const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(express.json());        //json 형식의 데이터를 처리할 수 있게 설정하는 코드
app.use(cors());                //브라우저의 CORS 이슈를 막기 위해 사용하는 코드

app.get("/products", (req,res) => {
    const query = req.query;
    console.log('QUERY : ', query);
    res.send({
        products: [
            {
                id: 1,
                name: "농구공",
                price: 100000,
                seller: "조던",
                imageUrl: "images/products/basketball1.jpeg",
            },
            {
                id: 2,
                name: "축구공",
                price: 50000,
                seller: "메시",
                imageUrl: "images/products/soccerball1.jpg",
            },
            {
                id: 3,
                name: "키보드",
                price: 10000,
                seller: "그랩",
                imageUrl: "images/products/keyboard1.jpg",
            },
        ],
    });
});

app.post('/products', (req,res) => {
    const body = req.body;
    res.send({
        body : body
    });
});

app.get('/products/:id', (req,res) => {
    const params = req.params;
    const {id} = params;
    res.send(`id는 ${params.id}입니다.`);
});

//세팅한 app을 실행시킨다.
app.listen(port, () => {
    console.log('그랩의 쇼핑몰 서버가 돌아가고 있습니다.');
});