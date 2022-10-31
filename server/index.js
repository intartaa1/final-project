const express = require('express')
const app = express()

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).send('Happy Sweet New Year');
})


app.listen(port, hostname, () => {
  console.log('Server still running at http://' + hostname + '=' + port +'/');
});

// const nnn = function(paramName)
// function nnn(paramName){

//  }
// const obj = {
//     vvv(){

//     }
// }

//fat-arrow function
//const fatArrow = x => x * 2;


//module.exports