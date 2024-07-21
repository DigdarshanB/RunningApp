const mongoose = require('mongoose')

//creating a new schema
const Schema =  mongoose.Schema

// const timeSchema = new Schema({
//     hours: {
//         type: Number,
//         required: true,
//         min: 0,
//         max: 23
//     },
//     minutes: {
//         type: Number,
//         required: true,
//         min: 0,
//         max: 59
//     },
//     seconds: {
//         type: Number,
//         required: true,
//         min: 0,
//         max: 59
//     }
// });


const workoutSchema = new Schema({
    title : {
        type: String,
        required: true
    },
    distance: {
        type: Number,
        required: true
    },
    // time: {
    //     type: timeSchema,
    //     required: true
    // }
}, {timestamps:true});


module.exports = mongoose.model('Workout', workoutSchema)
