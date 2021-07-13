const express = require('express');
const app = express();
const port = 8000;

app.listen(port, function(err){
  if(err){
   // console.log('error:', err);
    console.log(`Error in running the server: ${err}`); // using backtick
  }

  console.log(`Server is running on port : ${port}`);
});


// Note :-
// We added 'start' field in package.json to automatically start nodemon .
// we will use 'npm start' to fire up our server