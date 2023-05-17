'use client'
import {useEffect, useState} from 'react'

const contact = () => {
  const [content, setContent] = useState('')
  useEffect(() => {
    setTimeout(() => {
      setContent('Contact')
    }, 1000)
  }, [])
  return <h1>{content}</h1>
}

export default contact
