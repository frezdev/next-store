import Link from "next/link";
import styles from './Header.module.sass';

export function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <nav className={styles['header--nav']}>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/store">Store</Link></li>
        </ul>
      </nav>
    </header>
  )
}