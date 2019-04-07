# BAMAZON






## About:

This program is a simple inventory purchase application in that an Amazon like storefront has been built. The app takes in orders from customers and depletes stock from the store's inventory. The inventory is stored/saved into a MySQL database. The application also uses Inquirer to prompt the users for input data.The primary MySQL table used is called products which contains a primary key (item_id),products name(product_name), department_name(department_name), product price (price), stock quantity/inventory (quantity). The database has been populated with about 24 items.

## Application Internals:

The main entry point into the application the function "start()". 

start() - initally displays all products/items in a table format, and then prompts the user to enter which items and quantity they would like to purchase. Once this input has been obtained from the user, the program calls the function purchaseProducts(itemID,quantity).

purchaseProducts is passed in the item to be purchased as well as quantity of items to be purchased. purchaseProducts() then make the appropriate calls into the MySQL database, first checking to make sure there are enough inventory of the specific item  to satisfy the purchase. If sufficient inventory is on hand, then the database is updated with the appropriate remaining inventory, as well as informing the user that the purchase was successful and total cost of the purchase. Once the customer has completed the purchase, they are asked if they would like to purchase additional items or if they would like to quit. If there is not sufficent inventory to purchase, the user is informed that there is insufficient inventory as well as the inventory quantity remaining/available to purchase.



## Application Scenario - Successful Purchase


![Success Inventory Purchase](/SuccessfulInitialProductTable.PNG)



In this example Elco Windshield Wipers (item_id of 5) is purchased with a quantity 2. As you can see the current inventory is 10, for $26.93 each. When the purchase occurs, the inventory quantity is updated and the user is told of the successful purchase as wells as the total purchase price,  as shown below.



![Success Elco Windshield Purchase](/SuccessfulPurchase.PNG)





## Application Scenario - Insufficient Inventory: 



In this example we are attempting to purchase too many items. When this happens the user is notified of the failed purchase as well as being informed of how many items remain for that particular product. In the next example you can see that the Elco inventory has dropped from 10 in inventory,  to 8 after the successful purchase. In this example we will try to purchase 11 Elco windshield wipers, with only 8 items remaining in inventory. The puchase fails with the message "Insufficient quantity. Only 8 items remaining". After each purchase, the user is asked if there are interested in purchasing other items. Entering anything other character than Y or Yes will exit the program. 


![Success Elco Windshield Purchase](/InsufficientInventoryPurchaseScenario.PNG)

## Installation:
----------------


This application is intended to be run in a Google Chrome browser and requires: MySQL database, as well as node.js (npm).

Copy all GitHub files into your target/working directory. Make sure node.js (NPM) is installed, otherwise it can be found here [https://nodejs.org/en/]. MySQL can be installed from here [https://www.mysql.com/]. Select either 64 bit or 3 2bit version to install depending on your operating system. 

After both MySQL and NPM are installed,  run the command "npm -i package.jason" in a command window to install all required node package dependencies.   Once both applicaitions have been installed, you will need to run the SQL file in MySQL in order to create the BAmazon database and tables , as well as the required data. At this point you can run the BAMAZON application by typing  "node bamazonCustomer.js" on the command line.





