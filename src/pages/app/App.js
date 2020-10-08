import React, { useState, useEffect } from "react"
import "./App.css"

function App() {
  const [data, setData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const url = `http://localhost:3001/`
      const res = await fetch(url)

      const data = await res.json()
      setData(data)
    }

    fetchData()
  }, [])

  return (
    <div className="App">
      Testing:
      <div>{data && <div>{data}</div>}</div>
    </div>
  )
}

export default App
