import styles from './Navbar.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getAuth, signOut } from 'firebase/auth'

export default function Navbar({ user, loading }) {
  const router = useRouter();

  const logout = () => {
    signOut(getAuth()).then(() => {
      console.log("Sign-out successful");
    }).catch((error) => {
      console.log(error.message);
    });
  }

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/explore">Explore</Link>
        </li>
        {!loading &&
          (user ? (
            <>
              <li>
                <Link href="/profile">Profile</Link>
              </li>
              <button onClick={() => logout()} className={styles.tr}>
                Log Out
              </button>
            </>
          ) : (
            <button
              onClick={() => router.push('/login')}
              className={styles.tr}
            >
              Log In
            </button>
          ))}
      </ul>
    </nav>
  );
}
