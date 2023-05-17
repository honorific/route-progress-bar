import {useState, useEffect} from 'react'

const Posts = () => {
  const [content, setContent] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then((raw) =>
      raw.json().then((res) => {
        setContent(res)
        console.log(res)
      }),
    )
  }, [])

  return (
    <ul>
      {content.map((c, index) => {
        return <li key={index}>{c.title}</li>
      })}
    </ul>
  )
}

export default Posts
