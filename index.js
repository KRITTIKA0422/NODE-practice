 import fs from "fs";
 import express from "express";
 const app=express();
 const PORT=4000;

 app.get("/files", async function(request,response){
  let {time,file}=TimeStamp();
   fs.writeFile(`./Clock/${file}.txt`,time,(err)=> {
    if(err){
      response.send(err);
    }
    else{
    response.send(`File created with file name ${file}`);
    }
   })
  });
  function TimeStamp(){
  var d = Date.now();
  var date = new Date(d);
  var day = date.getDate();
  var month = date.getMonth() +1;
  var year = date.getFullYear();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var time= hours+":"+minutes+":"+seconds;
  var file = day+"."+month+"."+year+"-"+hours+":"+minutes+":"+seconds;   
  return {time,file};
   }
   
app.listen(PORT,()=>console.log(`App started in ${PORT}`));


