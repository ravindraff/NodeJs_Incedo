const axios = require('axios');
axios.get("https://api.nasa.gov.in/planetary/apod?api_key=DEMO_KEY")
        .then(response=>{
            console.log(response.data.url);
            console.log(response.data.explanation);
        })
        .catch(err =>{
            console.log(err)
        });