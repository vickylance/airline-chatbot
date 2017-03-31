var striptags = require('striptags')
var fs = require('fs')

fs.readFile('cities.html', 'utf8', function (err, data) {
  if (err) {
    return console.log(err)
  }
  console.log(striptags(data))
})
