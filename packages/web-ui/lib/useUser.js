import { useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const useUser = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    return onAuthStateChanged(getAuth(), user => {
      console.log("Sign-in state changed for the user");
      setUser(user);
      setIsLoading(false);
    });
  }, []);

  return {user, isLoading}
}

export default useUser
