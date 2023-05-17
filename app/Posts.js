import {useState, useEffect} from 'react'

const Posts = () => {
  

  return (
    <ul>
      {content.map((c, index) => {
        return <li key={index}>{c.title}</li>
      })}
    </ul>
  )
}

export default Posts
