const express=require('express');
const app=express();
const path=require('path');
app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);
//pathlocation
app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname + '/src/index.html'));
})
console.log('hii');