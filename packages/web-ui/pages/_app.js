import '../styles/globals.css'
import Layout from '../components/layout'
import initFirebase from '../lib/initFirebase'

const firebaseApp = initFirebase();

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App
