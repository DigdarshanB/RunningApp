require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts');
const cors = require('cors')

// express app
const app = express();

// middleware registration
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
app.use('/api/workouts', workoutRoutes); // grabs all routes and uses them on the app

//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    // listen for requests after connecting to db
    app.listen(process.env.PORT, () => {
        console.log('connected to db and listening on port', process.env.PORT)
    });
})
.catch((error)=>{
    console.log(error)
}) 

//using server
app.use(cors({ origin: "http://localhost:3000" }));


