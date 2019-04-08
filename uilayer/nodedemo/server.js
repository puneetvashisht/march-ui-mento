const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const port = 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(cors("*"))

var courses = [
    {"title": "Angular!!", "summary": "Framework from Google!!"},
    {"title": "React", "summary": "Library from facebook!!"},
    {"title": "EmberJS", "summary": "Another open source UI frameowrk"},
    {"title": "NodeJS", "summary": "Server side JS"}
]
app.get('/', (req, res) => res.send('Hello World!'))

app.get('/courses', (req, res)=>{
    res.json(courses);
})

app.post('/courses', (req, res)=>{
    var course = req.body;
    console.log(course);
    courses.push(course);
    res.json(courses);

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))