import React, { useState, useEffect } from "react"
import "./App.css"

function App() {
  const [data, setData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://agile-sea-12338.herokuapp.com/`
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
