const express = require("express");
const path = require("path");
const app = express();


const PORT = process.env.PORT || 3000


//console.log(app)

// const middleware = (req, res, next) => {
//     console.log("Hello i am middleware")

//     next()
// }

// app.use(middleware)

//app.use(express.static(path.join(__dirname, "public")))



// Define a GET route for the root URL
app.get("/",middleware, (req, res) => {
    res.send("This is a GET request from server");
});
app.get("/test",middleware, (req, res) => {
    res.send("This is a GET request two");
});



app.post("/", (req, res) => {
    res.send("This is a POST request");
});


app.put("/", (req, res) => {
    res.send("This is a PUT request");
});

app.delete("/", (req, res) => {
    res.send("This is a DELETE request");
});

//Start the server on port 3000
app.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000");
});
