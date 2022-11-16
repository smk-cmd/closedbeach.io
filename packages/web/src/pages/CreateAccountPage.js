import { useState }                                from 'react';
import { Link, useNavigate }                       from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import useUser                                     from '../hooks/useUser';

const CreateAccountPage = () => {
  // use authenticated user
  const { user } = useUser();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  // regular expression to verify CSULB emails
  const csulbRegex = /^[a-zA-Z][\w.-]*[a-zA-Z0-9]@csulb\.edu$/g;
  const studentRegex = /^[a-zA-Z][\w.-]*[a-zA-Z0-9]@student.csulb\.edu$/g;

  const auth = getAuth();
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

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Signed in");
        console.log(userCredential.user.email);
        console.log("Email verified: " + userCredential.user.emailVerified);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        setError("Failed to create a new account");
      });
  };

  return (
    <>
      { user
        ? navigate('/')
        : <>
            <h1>Create Account</h1>
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
            <input
              value={ confirmPassword }
              type="password"
              placeholder="Re-enter your password"
              onChange={ e => setConfirmPassword(e.target.value) }
            />
            <button
              onClick={ createAccount }
            >
              Create Account
            </button>

            <Link to="/login">
              <br />Already have an account? Log in here
            </Link>
          </>
      }
    </>
  )
};

export default CreateAccountPage;
