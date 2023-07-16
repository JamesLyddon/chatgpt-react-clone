const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
require('dotenv').config()
const {Configuration, OpenAIApi} = require("openai")

const config = new Configuration({
  apiKey: process.env.REACT_APP_API_KEY
})

const openai = new OpenAIApi(config)

const app = express()

app.use(bodyParser.json())
app.use(cors())

// end point
app.post("/chat", async (req, res) => {
  const {prompt} = req.body

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    max_tokens: 512,
    temperature:0,
    prompt: prompt
  })

  res.send(completion.data.choices[0].text)
})

const PORT = 8020

app.listen(PORT, () => {console.log(`Server running on port: ${PORT}`)})


