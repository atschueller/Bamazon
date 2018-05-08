const inquirer = require('inquirer');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('products_DB', 'Atschueller', 'Chilipepperwilson1984', {
  host: 'localhost',
  dialect: 'mysql',
});
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
const Products = sequelize.define('products', {
  product_id: Sequelize.STRING,
  product_name: Sequelize.STRING,
  department_name: Sequelize.STRING,
  price: Sequelize.DECIMAL,
  stock_quantity: Sequelize.INTEGER,
  PRIMARYKEY: product_id,
});
Products.sync().then(() => Products.findAll().then(products => {
  console.log(products);
})
);
//Ask the customer which product they would like to purchase and the quantity
function answers() {
  console.log("Your order is:", answers);
};
const questions = [{
  list: "products",
  message: "What is the ID of the product you would like to purchase?",
},
{
  type: "input",
  message: "How many would you like to buy?",
},
];
inquirer.prompt(questions, answers).then(() => {
  var customerProd = Products.findById(product_id);

});
  