import {Suspense} from 'react'
import Loader from '../Loader'
import Image from 'next/image'

const Shop = () => {
  return (
    <>
      <div>shop</div>
      <Suspense fallback={<Loader />}>
        <Image
          src='/download.jpeg'
          width={500}
          height={500}
          alt='Picture of the author'
        />
        <Image
          src='/images.jpeg'
          width={500}
          height={500}
          alt='Picture of the author'
        />
        <Image
          src='/images2.jpeg'
          width={500}
          height={500}
          alt='Picture of the author'
        />
      </Suspense>
    </>
  )
}

export default Shop
