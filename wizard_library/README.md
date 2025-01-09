## cd into the wizard_library folder and run the command npm install

## Create a mongodb data base in your local machine connection with the name wizardLibrary or any name you choose.if you change the name,do not forget to update it in the app.ts file.For best pctise you can put the mongodb uri in an env file and access it in your app.ts file.For now i am using the connection hard coded in my local machine to access the database.Also note that you have to have mongodb installed in your system and have it running and then mongo db compass which is the interface to be able to create your mongodb database created by you

## Run the command npm run compile to compile the dist folder

## Run the command npm run start to start the server.you can split your terminal so you have the compiling of your code as well as the server running on the second terminal.

## the endpoints created are:

1.http://localhost:3002/api/categories which is a post request to create the category of wizard portion.the request body is 
{
    "name":"spells"
}
you can change the name of categories as you deem fit while testing effectively.

2.http://localhost:3002/api/categories/parentId/subcategories which is a post request to be able to add subcategory to the existing parent category.the parent id is the id of the category created above.The request body is 
{
    "name":"Fire Spells"
}
which is a subcategory of the initial parent category.

3.http://localhost:3002/api/categories/categoryId/subcategories which is a get request to list all the subcategories belonging to thesame parent category. categoryId here is the category id of the parent category.An example of the response is given below for category called portion with subcategory of hatred portion,love portion,passion portion.All subcategories belong to the portion category.

{
    "subcategories": [
        {
            "_id": "67803374e85244af45153102",
            "name": "love portion",
            "parent": "67803341e85244af451530ff",
            "path": "portion > love portion",
            "createdAt": "2025-01-09T20:37:08.060Z",
            "updatedAt": "2025-01-09T20:37:08.060Z",
            "__v": 0
        },
        {
            "_id": "67803389e85244af45153105",
            "name": "hatered portion",
            "parent": "67803341e85244af451530ff",
            "path": "portion > hatered portion",
            "createdAt": "2025-01-09T20:37:29.262Z",
            "updatedAt": "2025-01-09T20:37:29.262Z",
            "__v": 0
        },
        {
            "_id": "67803398e85244af45153108",
            "name": "passion portion",
            "parent": "67803341e85244af451530ff",
            "path": "portion > passion portion",
            "createdAt": "2025-01-09T20:37:44.591Z",
            "updatedAt": "2025-01-09T20:37:44.591Z",
            "__v": 0
        }
    ]
}