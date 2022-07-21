
 import express from "express";
 const app=express();
 const PORT=4000;

app.get("/files", async function(request,response){
  const fs= require("fs");
 let date = new Date();
 let hours = date.getHours();
 let minutes = date.getMinutes();
 let seconds = date.getSeconds();
 let period = "AM";
    
 if (hours == 0) {
 hours = 12;
   } else if (hours >= 12) {
   hours = hours - 12;
   period = "PM";
   }
   var clock ="date: "+date+"Time: "+ hours + ":" + minutes + ":" + seconds + period;
  
   fs.writeFile("./clock.txt",clock,(err)=> {
   console.log("completed writing");
   })
   response.send(fs);
  });

app.listen(PORT,()=>console.log(`App started in ${PORT}`));

