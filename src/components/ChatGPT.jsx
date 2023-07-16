import React, {useState} from 'react'
import axios from "axios"

export default function ChatGPT() {
  // user input
  const [prompt, setPrompt] = useState("")
  // API response
  const [response, setResponse] = useState("")
  // end point
  const HTTP = "http://localhost:8020/chat"


  // handlers
  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post(`${HTTP}`, {prompt})
      .then((res) => setResponse(res.data))
      .catch((error) => {
        console.log(error)
      })
  }

  const handlePrompt = (e) => setPrompt(e.target.value)



  return (
    <div>
      <h1>Chat GPT Clone</h1>
      {/* user input */}
      <form
        onSubmit={handleSubmit}
      >🗣️
        <input type="text" placeholder='ask a question' value={prompt} onChange={handlePrompt}/>
      </form>
      {/* display response */}
      <div>
        <p>
          🤖 {response ? response : "Ask me anything..."}
        </p>
      </div>

    </div>
  )
}
