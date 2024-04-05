# hair-haven-node-api
this is the backend api to be used for the  ecommerce  front-end built using next-js
# node-mysql-api

HAIR HAVEN api created using node-js , mysql , sequelize ORM and authentication using tokens

How to create a table with sequelize

npx sequelize-cli model:generate --name Post --attributes title:string,content:text,imageUrl:string,categoryId:integer,userId:integer
npx sequelize-cli model:generate --name User --attributes name:string,name:string,email:string,password:string
npx sequelize-cli model:generate --name Category --attributes name:string,
npx sequelize-cli model:generate --name Comment --attributes content:string,postId:integer,userId:integer

how to migrate the database using sequelize-cli
npx sequelize-cli db:migrate

installed body-parser;
used to parse json bodies and get data from them




controller functionality
-to use a model in a controller you have to first import the model



npx sequelize-cli model:generate --name Product --attributes title:string description:text slug:string unit_price:decimal inventory:integer lastUpdate:date CollectionId:integer image:string product_type:string price_with_tax:decimal
