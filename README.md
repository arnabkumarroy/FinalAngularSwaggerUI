# FinalAngularSwaggerUI
Display the list of available services from the UI. On click on it will display the swagger details of each json.


This project is to display the list of the available service as Swagger UI format

Left of the menu it will display the list of the contract is available. On click on any of this UI it will load the page accordingly.


User have to add the name of the Swagger file in the masterFile.json as per the below mention format.

"category": "Name of the Menu header",
    "entities": [{
      "name": "version of the contract. name of contarct",
      "id": "file name to be put in the same path"
    }]
    
Below is the example of one such case.
"category": "oauth",
    "entities": [{
      "name": "V1. oauth",
      "id": "swagger-oauth.v1"
    }]
    
So the JSON file to be place is swagger-oauth.v1.json

