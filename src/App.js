import React from 'react'
import { quotes } from './data'
import {useState} from "react"
import './App.css'

const App = () => {
    const [quote, setQuote] = useState('')
    function generateRandomQuote() {
        const randomIndex = Math.floor(Math.random()*quotes.length)
        setQuote(quotes[randomIndex])
    }
  return (
    <>
    <nav>
        <span>Limba</span><span>Romana</span>
    </nav>

    <div className="box">
        <h1>Citate despre limba romana</h1>
        <p className="quote">{quote}</p>
        <button onClick={generateRandomQuote}>Genereaza un citat!</button>
    </div>
    </>
  )
}

export default App