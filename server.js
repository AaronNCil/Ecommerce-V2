const path = require('path');
const express = require('express');
const mysql = require('mysql');
const app = express();


const port = process.env.PORT || 3000; 

const conn = mysql.createConnection({
    host: "127.0.0.1",
    user: "ecom",
    password: "Qweriopa1",
    database: "ecom"
})

conn.connect((err) => {

    if (err) {
        console.log(`Can't connect to database`, err)
        return;
    }

    console.log(`Connected to database`)
})


app.get('/api/products', (req, res) => {
    if(!conn) res.send([]);

  conn.query('SELECT * FROM Products_Test3', (err, result) => {
      if (err) {
          console.log(err)
      } else {
          res.send(result)
      }
  });
})

app.get('/api/products/lowToHigh', (req, res) => {
    if(!conn) res.send([]);

  conn.query('SELECT * FROM Products_Test3 ORDER BY Price ASC', (err, result) => {
      if (err) {
          console.log(err)
      } else {
          res.send(result)
      }
  });
})

app.get('/api/products/highToLow', (req, res) => {
    if(!conn) res.send([]);

  conn.query('SELECT * FROM Products_Test3 ORDER BY Price DESC', (err, result) => {
      if (err) {
          console.log(err)
      } else {
          res.send(result)
      }
  });
})

app.use(express.static(path.join(__dirname, './build')));

app.use((req, res) => {
    res.sendFile(path.join(__dirname,'./build', 'index.html'))
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });