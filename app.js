/**
 * mock external api
 */

const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  console.log(`${req.method} ${req.url}`);
  const query = req.query;
  res.json({message: 'hello world ' + query.query})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})