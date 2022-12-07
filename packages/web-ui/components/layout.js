import styles from './Layout.module.css'
import Navbar from './navbar'
import useUser from '../lib/useUser'

export default function Layout({ children }) {
  const User = useUser();

  return (
    <div>
      <Navbar user={User.user} loading={User.isLoading} />
      <main className={styles.container}>{children}</main>
    </div>
  );
}
