# bamazon
About
-----

This program is a simple inventory purchase application in that an Amazon like storefront has been built. The app takes in orders from customers and depletes stock from the store's inventory. The inventory is stored/saved into a MySQL database. The application also uses Inquirer to prompt the users for input data.The primary MySQL table used is called products which contains a primary key (item_id),products name(product_name), department_name(department_name), product price (price), stock quantity/inventory (quantity). The database has been populated with about 24 items.

Application Info
----------------
The main entry point into the application the function "start()". start() - initally displays all products/items in a table format, and then prompts the user to enter which items and quantity they would like to purchase. Once this input has been obtained from the user, the program calls the function purchaseProducts(itemID,quantity). purchaseProducts is passed in the item to be purchased as well as quantity of items to be purchased. purchaseProducts() then make the appropriate calls into the MySQL database, first checking to make sure there are enough inventory of the specific item  to satisfy the purchase. If sufficient inventory is on hand, then the database is updated with the appropriate remaining inventory, as well as informing the user that the purchase was successful and total cost of the purchase. Once the customer has completed the purchase, they are asked if they would like to purchase additional items or if they would like to quit. If there is not sufficent inventory to purchase, the user is informed that there is insufficient inventory as well as the inventory quantity remaining/available to purchase.


APPLICATION SNAPSHOTS
---------------------

Look at the included JPEG files:
1) Success Inventory Purchase. jpg
2) Insufficient Inventory Purchase.jpg




