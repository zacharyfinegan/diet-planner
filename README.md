To properly run this program with JSON server integrating the database, use the following bash command:
json-server --w db.json & ng s --o



# Description
This program will create a randomized meal plan based off an assortment of foods stored in an included JSON file. Instead of using an external database, this program utilizes JSON-server to allow the user to change the contents of the JSON file. To enable this data changing functionality, run this Angular project with one of the following commands:
`json-server --watch db.json & ng serve --open`
or
`json-server --w db.json & ng s --o`
