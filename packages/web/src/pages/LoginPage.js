import { useState }                            from 'react';
import { Link, useNavigate }                   from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import useUser                                 from '../hooks/useUser';

const LoginPage = () => {
  // use authenticated user
  const { user } = useUser();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const auth = getAuth();
  const login = async () => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Signed in");
        console.log(userCredential.user.email);
        console.log("Email verified: " + userCredential.user.emailVerified);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        setError("Failed to sign in with email and password");
      });
  };

  return (
    <>
      { user
        ? navigate("/")
        : <>
            <h1>Log In</h1>
            { error && <p className="error">{ error }</p> }

            <input
              value={ email }
              placeholder="Your email address"
              onChange={ e => setEmail(e.target.value) }
            />
            <input
              value={ password }
              type="password"
              placeholder="Your password"
              onChange={ e => setPassword(e.target.value) }
            />
            <button
              onClick={ login }
            >
              Log In
            </button>

            <Link to="/create-account">
              <br />Don't have an account? Create one here
            </Link>
          </>
      }
    </>
  );
};

export default LoginPage;
