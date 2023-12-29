import Link from "next/link";

export function Header (): JSX.Element {
  return (
    <header>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/store">Store</Link></li>
        </ul>
      </nav>
    </header>
  )
}