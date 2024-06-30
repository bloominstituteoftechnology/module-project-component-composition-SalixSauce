import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'

const apiKey = "DEMO KEY"
const URL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`





function App() {
  const [apod, setApod] = useState()
  useEffect(() => {
    function fetchPhoto() {
      axios.get(URL)
      .then(res => {
        console.log(res.data)
        setApod(res.data)
      })
      .catch(err => {
        console.error(err.message)
      })
    }
    // fetchPhoto()
    setApod({
      "date": "2024-06-21",
      "explanation": "Returning to science operations on June 14, the Hubble Space Telescope used its new pointing mode to capture this sharp image of spiral galaxy NGC 1546. A member of the Dorado galaxy group, the island universe lies a mere 50 million light-years away. The galactic disk of NGC 1546 is tilted to our line-of-sight, with the yellowish light of the old stars and bluish regions of newly formed stars shining through the galaxy's dust lanes. More distant background galaxies are scattered throughout this ...",
      "hdurl": "https://apod.nasa.gov/apod/image/2406/NGC1546compassHST.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Hubble's NGC 1546",
      "url": "https://apod.nasa.gov/apod/image/2406/NGC1546compassHST1024.jpg"
    })
    fetchPhoto()
  }, [])

  if (!apod) return 'Fetching Photo of the Day...'
  return (
   <section>
    <Card 
    title={apod.title}
    text={apod.explanation }
    imageURL={apod.url}
    date={apod.date}

    
    />
   </section>
  )
}

export default App
