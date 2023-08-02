const {readFile,writeFile}= require('fs')

readFile ('./content/first.txt','utf-8' ,(err,result)=>{
    if(err){
        console.log(err)
        return;
    }
    const first = result;

    readFile ('./content/second.txt' ,'utf-8' , (err, result)=>{
    if(err){
        console.log(err);
        return;
    }
    const second = result;
    
    writeFile ('./content/result-async.txt',
    `here is the result ${first}, ${second}`,
    (err, result)=>{
    if (err)
    {
        console.log(err);
        return;
    }
    console.log(result);
 })
    })
}) 





// const fs = require('fs')  
//   const {readFileSync , writeFfileSync} = require ('fs')
//   const first = readFileSync ('./content/sub/test.txt','utf8')
//  fs.readFileSync ('./content/sub/test.txt','utf8')

// import { readFileSync, writeFilesync } from 'fs';