import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <Link href='/about' className={styles.menu}>
        About
      </Link>
      <Link href='/contact' className={styles.menu}>
        Contact
      </Link>
      <Link href='/shop' className={styles.menu}>
        shop
      </Link>
      <div>Home page</div>
    </>
  )
}
