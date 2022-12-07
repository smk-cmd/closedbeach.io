import styles from '../styles/CreateAccount.module.css'
import useUser from '../lib/useUser'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

export default function CreateAccount() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();
  const { user, isLoading } = useUser();

  // regular expression to verify CSULB emails
  const csulbRegex = /^[a-zA-Z][\w.-]*[a-zA-Z0-9]@csulb\.edu$/g;
  const studentRegex = /^[a-zA-Z][\w.-]*[a-zA-Z0-9]@student.csulb\.edu$/g;

  const createAccount = async () => {
    // Check if passwords are the same
    if (password !== confirmPassword) {
      setError("Password and confirm password do not match");
      return;
    }

    // Validate the email provided by the user
    let validCsulbEmail = csulbRegex.test(email);
    let validStudentEmail = studentRegex.test(email);

    // Invalid csulb emails set an error
    if (!(validCsulbEmail || validStudentEmail)) {
      setError("Not a valid CSULB email address");
      return;
    }

    await createUserWithEmailAndPassword(getAuth(), email, password)
      .then((userCredential) => {
        console.log("Signed in");
        console.log(userCredential.user.email);
        router.push('/')
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        setError("Failed to create a new account");
      });
  }

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Create Account</h1>

      {error && <p className="error">{error}</p>}

      {isLoading && <p>Creating account info...</p>}

      {!isLoading &&
        (user ? (
          <p className={styles.description}>
            You already have an account!
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
            <input
              value={confirmPassword}
              type="password"
              placeholder="Re-enter your password"
              onChange={e => setConfirmPassword(e.target.value)}
            />
            <button onClick={createAccount}>Create Account</button>
          </div>
        ))}

      {!isLoading && !user && (
        <p className={styles.description}>
          Already have an account?{' '}
          <a href="/login">Log in here</a>
        </p>
      )}
    </div>
  )
}
