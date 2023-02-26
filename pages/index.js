import styles from "../styles/Home.module.css";
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <ul>
        <li>
          <Link href="/sets/one">ONE</Link>
        </li>
      </ul>
    </>
  );
}
