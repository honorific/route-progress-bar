'use client'
import {Suspense, lazy, useState, useEffect} from 'react'
import Loader from '../Loader'
//const Posts = lazy(() => import('../Posts'))
const contact = () => {
  const [content, setContent] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos').then((raw) =>
      raw.json().then((res) => {
        setContent(res)
        console.log(res)
      }),
    )
  }, [])
  //console.log('Posts are: ', Posts)
  return (
    <div>
      <h1>Contact</h1>
      <Suspense fallback={<Loader />}>
        <ul>
          {content.length > 0 ? (
            content.map((c, index) => {
              return <li key={index}>{c.title}</li>
            })
          ) : (
            <Loader />
          )}
        </ul>
      </Suspense>
    </div>
  )
}

export default contact
