import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'

const apiKey = "xt34CgQDiLbSiKZ0DiLBCZ9fh6NuGTEUaNwwp3IX"
const URL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`

function App() {
  const [apod, setApod] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    function fetchPhoto() {
      axios.get(URL)
      .then(res => {
        console.log(res.data)
        setApod(res.data)
      })
      .catch(err => {
        console.error(err.message)
        setError(err.message)
      })
    }
    fetchPhoto()
  }, [])

  if (error) return <div>Error: {error}</div>
  if (!apod) return 'Fetching Photo of the Day...'

  return (
    <section>
      {apod.media_type === "image" ? (
        <Card
          title={apod.title}
          text={apod.explanation}
          imageURL={apod.url}
          date={apod.date}
        />
      ) : (
        <div className="video-container">
        <h2>{apod.title}</h2>
        <p>{apod.explanation}</p>
        <iframe
          className="apod-video"
          title={apod.title}
          src={apod.url}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
         <p>Awesome photo taken on {apod.date}</p>
      </div>
      )}
    </section>
  )
}

export default App

