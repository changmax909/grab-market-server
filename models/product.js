module.exports = function(sequelize, DataTypes){
    const product = sequelize.define('Product', {
        name : {
            type : DataTypes.STRING(20),
            allowNull : false,          //name 값이 들어가지않으면 오류발생
        },
        price : {
            type : DataTypes.INTEGER(10),
            allowNull: false,           //price 값이 들어가지않으면 오류발생
        },
        seller : {
            type : DataTypes.STRING(30),
            allowNull : false,          //seller 값이 들어가지않으면 오류발생
        },
        description : {
            type : DataTypes.STRING(200),
            allowNull : false,          //description 값이 들어가지않으면 오류발생
        },
        imageUrl : {
            type : DataTypes.STRING(300),
            allowNull : true,           //imageUrl 값이 들어가지않아도 실행
        },
    });
    return (
      product
    );
};