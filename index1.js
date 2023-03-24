// var http = require("http");
// var hostname = "127.0.0.1";
// var port = 8081;
//
// const server = http.createServer(function(req, res) {
//     const path = req.url;
//     const method = req.method;
//     if(path === '/products'){
//         if(method === 'GET'){
//             res.writeHead(200, {"Content-Type": "application/json"});
//             const products = JSON.stringify([{
//                 name : "농구공",
//                 price : 5000,
//             }]);
//             res.end(products);
//         }else if (method === 'POST'){
//             res.end("생성되었습니다!");
//         }else {
//             res.end("Good Bye!");
//         }
//     }
// });
//
// server.listen(port, hostname);
//
// console.log("grab market server on!");



var http = require("http");
var hostname = "127.0.0.1";
var port = 8081;

const server = http.createServer((req, res) => {
    //서버에 어떤 요청이 들어오든 콜백함수에서 처리된다.
    const path = req.url;
    const method = req.method;
    if(path === "/products"){
        if(method === "GET"){
            res.writeHead(200, {"Content-Type" : "application/json"});
            const products = JSON.stringify([{
                name : "농구공",
                price : 5000,
            }]);
            res.end(products);
        }else if(method === "POST"){
            res.end("생성되었습니다.")
        }else{
            res.end("Good Bye");
        }
    }
});

server.listen(port, hostname);

console.log("grab market server on!");