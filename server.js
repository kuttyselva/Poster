const express=require('express');
const app=express();
const path=require('path');
app.use(express.static(__dirname + '/src'));
app.listen(process.env.PORT || 4200);
//pathlocation
app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname + '/src/index.html'));
})
console.log('hii');