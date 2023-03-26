// const express = require("express");
// const cors = require("cors");
// const app = express();
// const models = require('./models');
// const multer = require("multer");
// const upload = multer({dest: 'uploads/'});
// const port = 8080;
//
// app.use(express.json());        //json 형식의 데이터를 처리할 수 있게 설정하는 코드
// app.use(cors());                //브라우저의 CORS 이슈를 막기 위해 사용하는 코드
//
// app.get("/products", (req, res) => {
//     models.Product.findAll({    // DB에 저장된 데이터 전체를 불러온다.
//         // limit : 1, // 포스트로 불러오는 정보를 1개만 불러오게한다.
//         order: [["createdAt", "DESC"]],     // 생성일자 기준으로 내림차순
//         attributes: ["id", "name", "price", "createdAt", "seller", "imageUrl"],     //어떤 컬럼의 정보를 불러올건지 지정할수있다
//     }).then((result) => {
//         console.log("Products :", result);
//         res.send({
//             products: result
//         });
//     }).catch((error) => {
//         console.error(error);
//         res.send("에러 발생!!");
//     });
//     // const query = req.query;
//     // console.log('QUERY : ', query);
//     // res.send({
//     //     products: [
//     //         {
//     //             id: 1,
//     //             name: "농구공",
//     //             price: 100000,
//     //             seller: "조던",
//     //             imageUrl: "images/products/basketball1.jpeg",
//     //         },
//     //         {
//     //             id: 2,
//     //             name: "축구공",
//     //             price: 50000,
//     //             seller: "메시",
//     //             imageUrl: "images/products/soccerball1.jpg",
//     //         },
//     //         {
//     //             id: 3,
//     //             name: "키보드",
//     //             price: 10000,
//     //             seller: "그랩",
//     //             imageUrl: "images/products/keyboard1.jpg",
//     //         },
//     //     ],
//     // });
// });
//
// app.post('/products', (req, res) => {
//     const body = req.body;
//     const {name, description, price, seller} = body;    //DB 데이터 불러올때 작성해야하는 최소 목록(이 중 하나라도 작성되지않을시 error 코드 결과값 전송)
//     if (!name || !description || !price || !seller) {     //DB 방어코드 (코드 실행시 문제가 발생하지않게 하는 방법)
//         res.send("모든 필드를 입력해주세요!!");
//     }
//     models.Product.create({     //Product Table 안에 객체를 생성
//         name: name,
//         description: description,
//         price: price,
//         seller: seller
//     }).then((result) => {
//         console.log("상품 생성 결과 :", result);
//         res.send({
//             result: result
//         });
//     }).catch((error) => {
//         console.error(error);
//         res.send("상품 업로드에 문제가 발생했습니다!");
//     });
//     // res.send({
//     //     body : body
//     // });
// });
//
// app.get('/products/:id', (req, res) => {
//     const params = req.params;
//     const {id} = params;
//     models.Product.findOne({        //DB 정보 한개를 찾는 코드 (findOne)
//         where: {                   //조건문
//             id: id,
//         },
//     }).then((result) => {
//         console.log("PRODUCT :", result);
//         res.send({
//             product: result,
//         });
//     }).catch((error) => {
//         console.error(error);
//         res.send("상품 조회에 에러가 발생했습니다!!");
//     });
// });
//
// app.post('/image', upload.single('image'), (req, res) => {
//     const file = req.file;
//     res.send({
//         imageUrl: file.path
//     });
// });
//
// //세팅한 app을 실행시킨다.
// app.listen(port, () => {
//     console.log('그랩의 쇼핑몰 서버가 돌아가고 있습니다.');
//     models.sequelize.sync().then(() => {
//         console.log('✓ DB 연결 성공');
//     }).catch((error) => {
//         console.error(error);
//         console.log('✗ DB 연결 에러');
//         process.exit();     // 프로그램이 작동하지않으면 중지시키는 코드
//     });
// });

// const express = require("express");
// const cors = require("cors");
// const app = express();
// const models = require("./models");
// const multer = require("multer");
// // 업로드 사진을 폴더에 담는 코드
// const upload = multer({
//     storage: multer.diskStorage({
//         // 업로드한 파일을 저장할 경로
//         destination: function (req, file, cb) {
//             cb(null, "uploads/");
//         },
//         // 업로한 파일의 이름을 결정
//         filename: function (req, file, cb) {
//             cb(null, file.originalname);
//         },
//     }),
// });
// const port = 8080;
//
// app.use(express.json());
// app.use(cors());
// // 업로드된 코드를 웹으로 보내는 코드
// app.use("/uploads", express.static("uploads"));
//
// app.get("/products", (req, res) => {
//     models.Product.findAll({
//         order: [["createdAt", "DESC"]],
//         attributes: ["id", "name", "price", "createdAt", "seller", "imageUrl"],
//     })
//         .then((result) => {
//             console.log("PRODUCTS : ", result);
//             res.send({
//                 products: result,
//             });
//         })
//         .catch((error) => {
//             console.error(error);
//             res.status(400).send("에러 발생");
//         });
// });
//
// app.post("/products", (req, res) => {
//     const body = req.body;
//     const {name, description, price, seller, imageUrl} = body;
//     if (!name || !description || !price || !seller || !imageUrl) {
//         res.status(400).send("모든 필드를 입력해주세요");
//     }
//     models.Product.create({
//         name,
//         description,
//         price,
//         seller,
//         imageUrl,
//     })
//         .then((result) => {
//             console.log("상품 생성 결과 : ", result);
//             res.send({
//                 result,
//             });
//         })
//         .catch((error) => {
//             console.error(error);
//             res.status(400).send("상품 업로드에 문제가 발생했습니다");
//         });
// })
// ;
//
// app.get("/products/:id", (req, res) => {
//     const params = req.params;
//     const {id} = params;
//     models.Product.findOne({
//         where: {
//             id: id,
//         },
//     })
//         .then((result) => {
//             console.log("PRODUCT : ", result);
//             res.send({
//                 product: result,
//             });
//         })
//         .catch((error) => {
//             console.error(error);
//             res.status(400).send("상품 조회에 에러가 발생했습니다");
//         });
// });
//
// // 업로드 사진을 데이터로 담는 코드
//
// app.post("/image", upload.single("image"), (req, res) => {
//     const file = req.file;
//     console.log(file);
//     res.send({
//         imageUrl: file.path,
//     });
// });
//
// app.listen(port, () => {
//     console.log("그랩의 쇼핑몰 서버가 돌아가고 있습니다");
//     models.sequelize
//         .sync()
//         .then(() => {
//             console.log("DB 연결 성공!");
//         })
//         .catch((err) => {
//             console.error(err);
//             console.log("DB 연결 에러ㅠ");
//             process.exit();
//         });
// });

const express = require("express");
const cors = require("cors");
const app = express();
const models = require("./models");
const multer = require("multer");
const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "uploads/");
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname);
        },
    }),
});
const port = 8080;

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));
app.get("/products", (req, res) => {
    models.Product.findAll({
        order: [["createdAt", "DESC"]],
        attributes: ["id", "name", "price", "createdAt", "seller", "imageUrl"],
    })
        .then((result) => {
            console.log("PRODUCTS : ", result);
            res.send({
                products: result,
            });
        })
        .catch((error) => {
            console.error(error);
            res.status(400).send("에러 발생");
        });
});

app.post("/products", (req, res) => {
    const body = req.body;
    const {name, description, price, seller, imageUrl} = body;
    if (!name || !description || !price || !seller || !imageUrl) {
        res.status(400).send("모든 필드를 입력해주세요");
    }
    models.Product.create({
        name,
        description,
        price,
        seller,
        imageUrl,
    })
        .then((result) => {
            console.log("상품 생성 결과 : ", result);
            res.send({
                result,
            });
        })
        .catch((error) => {
            console.error(error);
            res.status(400).send("상품 업로드에 문제가 발생했습니다");
        });
});

app.get("/products/:id", (req, res) => {
    const params = req.params;
    const {id} = params;
    models.Product.findOne({
        where: {
            id: id,
        },
    })
        .then((result) => {
            console.log("PRODUCT : ", result);
            res.send({
                product: result,
            });
        })
        .catch((error) => {
            console.error(error);
            res.status(400).send("상품 조회에 에러가 발생했습니다");
        });
});

app.post("/image", upload.single("image"), (req, res) => {
    const file = req.file;
    console.log(file);
    res.send({
        imageUrl: file.path,
    });
});
app.listen(port, () => {
    console.log("그랩의 쇼핑몰 서버가 돌아가고 있습니다");
    models.sequelize
        .sync()
        .then(() => {
            console.log("DB 연결 성공!");
        })
        .catch((err) => {
            console.error(err);
            console.log("DB 연결 에러ㅠ");
            process.exit();
        });
});