import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut }  from 'firebase/auth';
import useUser               from './hooks/useUser';

const NavBar = () => {
  // authenticated user
  const { user } = useUser();
  const navigate = useNavigate();

  const auth = getAuth();
  const logout = () => {
    signOut(auth).then(() => {
      console.log("Sign-out successful");
    }).catch((error) => {
        console.log(error.message);
    });
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/artwork">Artwork</Link>
        </li>
      </ul>

      <div className="nav-right">
        { user
          ?
            <button
              onClick={ () => logout() }
            >
              Log Out
            </button>
          :
            <button
              onClick={ () => navigate('/login') }
            >
              Log In
            </button>
        }
      </div>
    </nav >
  );
}

export default NavBar;
