// required npm packages
var mysql = require("mysql");
var inquirer = require("inquirer");

/////////////////////////////////////////////////////////////////////////////////
// initialize  database connection for the sql database                        //
/////////////////////////////////////////////////////////////////////////////////
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "10Blackbird$",
    database: "bamazon_DB"
});

/////////////////////////////////////////////////////////////////////////////////
// connect to the mysql server and sql database                                //
/////////////////////////////////////////////////////////////////////////////////
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
});


/////////////////////////////////////////////////////////////////////////////////
// purchaseProduct(productID, quantity) - this function is responsible for     //
//  purchasing a product. productID is the item that needs to be passed in and //
//  quantity represents the amount/quantity to be purchased.                   //
/////////////////////////////////////////////////////////////////////////////////
function purchaseProduct(productID, quantity) {

    let queryStr;
    let inventoryQuantity = 0;
    let productCost = 0.0;
    let requestedQuantity = quantity;

    console.log("Purchasing productID: " + productID + "  Quantity: " + quantity);


    if (productID === 0) {
        return 0;
    }

    //determine if we have enough products in inventory
    queryStr = "SELECT * from products WHERE item_id = " + productID + ";";
    console.log("queryProducts() query string is: " + queryStr);

    // query the products table to check if sufficient inventory
    connection.query(queryStr, function (err, res) {
        if (err) {
            console.log("Throwing an error in purchaseProducts");
            throw (err);
        }

        if (res[0].quantity < requestedQuantity) {
            console.log("Insufficient quantity. Only " + res[0].quantity + " items remaining.");
            return false;
        }


        // enough product in inventory so update selling cost
        // and save inventory on hand 
        productCost = res[0].price * requestedQuantity;
        inventoryQuantity = res[0].quantity;
        console.log("Sufficient inventory on hand of ProductID = " + productID);
        console.log("Inventory remaining is : " + inventoryQuantity);
        console.log("Items request: " + requestedQuantity);

        // now update remaining inventory
        inventoryQuantity = inventoryQuantity - requestedQuantity;

        queryStr = "UPDATE products SET products.quantity = ";
        queryStr = queryStr + inventoryQuantity + " WHERE item_id = " + productID + ";";

        console.log("queryProductsQuantity() query string is: " + queryStr);

        // query the products table for item/product
        connection.query(queryStr, function (err, res) {
            if (err) throw (err);
            return (res.length);
        });
        // display in a table format the item purchased
        console.table(res[0]);
        console.log(" Your purchase was successful. Total cost of purchase is $" + productCost + ".");

    });

    // separators
    console.log("\n\n\n");
}

/////////////////////////////////////////////////////////////////////////////////
// displayAllProducts() - querys the database for all items and displays it in //
//  a table format.                                                            //
/////////////////////////////////////////////////////////////////////////////////
function displayAllProducts() {
    let queryStr = "";

    // select everything in the database
    queryStr = "SELECT * from products;";
    console.log("queryProducts() query string is:" + queryStr);

    // query the products table for item/product
    connection.query(queryStr, function (err, res) {
        console.table(res);
        return (res.length);

        if (err) throw (err);
    });

    //separator
    console.log("\n\n\n");
};

/////////////////////////////////////////////////////////////////////////////////
// isUserDone - A relatively simple function which asks the user if they are   //
//  have completed purchasing products or would like to purchase additional    //
//  items.                                                                     //
/////////////////////////////////////////////////////////////////////////////////
function isUserDone() {

    // determine which productID the user wants to purchase.
    inquirer.prompt([

        {
            type: "confirm",
            name: "queryUser",
            message: "Please enter Y or Yes to update additional items",
        },
    ]).then(function (answer) {
        // User would like to continue if "true" so call start() 
        if (answer.queryUser === true) {
            start();
        }
        else{
            // user is done so terminate connection and then quit out of app
            connection.end();
        }
    });
}


/////////////////////////////////////////////////////////////////////////////////
// start()  - main entry point into the program. Responsible for displaying    //
//  the initial products table, then prompting the user to enter the specific  //
//  item and quantity to purchase.                                             //
/////////////////////////////////////////////////////////////////////////////////
function start() {

    // display all products to the terminal in table format
    let numReturnedRows = displayAllProducts();

    // separator
    console.log("\n\n\n\n\n");


    // Product database is empty and needs to be populated with data else return 
    // false
    if (numReturnedRows === 0) {
        return false;
    }


    // determine which productID the user wants to purchase.
    // as well as how many items to be purchased
    inquirer.prompt([

        {
            type: "input",
            name: "productID",
            message: "Please enter the product ID of the item you wish to purchase",
        },

        {
            type: "input",
            name: "quantity",
            message: "Please enter how many items you wish to purchase.",
        },
    ]).then(function (answer) {
        // when finished prompting, update database inventory , inform the user
        // of total purchase cost, then display updated  products table/inventory 
        purchaseProduct(answer.productID, answer.quantity);

        // prompt the user if they would like to purchase additional inventory
        isUserDone();
    });
}
