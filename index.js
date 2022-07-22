 import fs from "fs";
 import express from "express";
 const app=express();
 const PORT=process.env.PORT;
 var fileList=[];
 app.get("/files", function(request,response){          //GET request for API endpoint for creating a file 
  let {time,file}=TimeStamp();
   fs.writeFile(`./Clock/${file}.txt`,time,(err)=> {          //creating file under folder Clock
    if(err){
      response.send(err);
    }
    else{
    response.send(`File created with file name ${file}`);
    }
   })
   fileList.push(`Filename ${file}`);                         //storing the created file names in an array
  });
  app.get("/filelist", function(request,response){             //GET request for API endpoint to retrieve the created filenames 
    response.send(fileList);
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
    var time= hours+":"+minutes+":"+seconds;           //to print the current time stamp inside the file
    var file = day+"-"+month+"-"+year+"_"+hours+"_"+minutes+"_"+seconds;   //to give file name
    return {time,file};
     }
     const urlDetails="Heroku URL for creating a file- "+"\n"+"Heroku URL for retrieving text files created in a folder- "+"\n"+"Github repository link-https://github.com/KRITTIKA0422/nodejs-filesystem"+"\n"+"Last committed hash ID- ";
    fs.writeFile("./details.txt",urlDetails,(err)=> {          //creating file having heroku url, github repository, last committed hash id
    console.log("Details of url are written");
     });
app.listen(PORT,()=>console.log(`App started in ${PORT}`));


