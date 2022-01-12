const express = require('express');
const mongoose = require('mongoose')

const app = express();

mongoose.connect('mongodb://localhost:27017/codingInterviewDb')
    .then(()=>{
        console.log('database connected')

    })
    .catch((err)=>{
        console.log(err)

    })

app.listen('3000', ()=> console.log('listening on port 3000'))
