import styles from '../styles/Login.module.css'
import useUser from '../lib/useUser'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();
  const { user, isLoading } = useUser();

  const login = async () => {
    await signInWithEmailAndPassword(getAuth(), email, password)
      .then((userCredential) => {
        console.log("Signed in");
        console.log("Email verified: " + userCredential.user.emailVerified);
        router.push('/');
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        setError("Failed to sign in with email and password");
      });
  }

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Log In</h1>

      {error && <p className="error">{error}</p>}

      {isLoading && <p>Loading login info...</p>}

      {!isLoading &&
        (user ? (
          <p className={styles.description}>
            You are already signed in!
          </p>
        ) : (
          <div className={styles.grid}>
            <input
              value={email}
              type="email"
              placeholder="Your email address"
              onChange={e => setEmail(e.target.value)}
            />
            <input
              value={password}
              type="password"
              placeholder="Your password"
              onChange={e => setPassword(e.target.value)}
            />
            <button onClick={login}>Log In</button>
          </div>
        ))}

      {!isLoading && !user && (
        <p className={styles.description}>
          Don't have an account?{' '}
          <a href="/create-account">Create one here</a>
        </p>
      )}
    </div>
  );
}
