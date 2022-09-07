const fetch = require('node-fetch');
const express = require("express");
const { response } = require('express');
const app = express();

app.use(express.static("public"));

  app.get("/users/:token", async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
	res.header(
	  "Access-Control-Allow-Headers",
	  "Origin, X-Requested, Content-Type, Accept Authorization"
	)
    const accessToken = req.params.token;
    const fetchDailyCodingChallenge = async () => {
      
        const init = {
          method: "GET",
          headers: { "Content-Type": "application/json" , "Authorization": accessToken}
        };
      
        const response = await fetch("https://api.clickup.com/api/v2/user", init);
        
        return response.json();
      };
    const ok = await fetchDailyCodingChallenge();
    res.json(ok);
  });





  let port = process.env.PORT;
  if (port == null || port == ""){
	port = 3000;
  }
  
  app.listen(port, () => {
	console.log("listening on port " + port);
  });
  


