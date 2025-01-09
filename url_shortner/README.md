## cd into the url_shortner folder and run the command npm install

## Run the command npm run compile to compile the dist folder

## Run the command npm run start to start the server.

## the endpoints created are:

1.http://localhost:5000/shorten which is a post request to create the shorten link.the request body is 
{
    "url":"https://www.example.com"
}
you can change the urls as you deem fit while testing effectively

2.http://localhost:5000/shortId which is a get request to be able to get the long url that was shorten initially.the shord id is the id of the short url.

3.http://localhost:5000/get/urls which is a get request to list all the shortids and their corresponding long url.This is a bonus endpoint to list the short ids just incase you want to test for other short id conversion to the original long url.