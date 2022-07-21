
 import express from "express";
 const app=express();
 const PORT=4000;

app.get("/", async function(request,response){
   response.send("Welcome to our app");
  });

app.listen(PORT,()=>console.log(`App started in ${PORT}`));

