'use client'
import {Suspense, lazy} from 'react'
import Loader from '../Loader'
const Posts = lazy(() => import('../Posts'))

const contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <Suspense fallback={<Loader />}>
        <Posts />
      </Suspense>
    </div>
  )
}

export default contact
