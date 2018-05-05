var mysql = require('mysql');
var inquirer = require('inquirer');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'Atschueller',
  password: '',
  database: 'Bamazon'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.end();
//create a function to display products when loaded//
function createProduct() {

};

inquirer.prompt([{
  type: "input",
  message: "What is the ID of the product you would like to purchase?",
  id: "id",
},
{
  type: "input",
  message: "How many would you like to buy?",
  quantity: "quantity",
},
]).then(answers => {
  console.log(id);
  console.log(quantity);
  if (quantity >= stock_quantity) {
    console.log('Your purchase of' + product_name + 'is complete!')

  } else {
    console.log('Insufficient Quantity!');
  };
  
  
});