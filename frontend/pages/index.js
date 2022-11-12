import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from './api/auth/[...nextauth]'

export async function getServerSideProps({ req, res }) {
  return {
    props: {
      session: await unstable_getServerSession(req, res, authOptions)
    }
  }
}

import "./app.css";
import Layout from "./components/Layout/Layout";

function App() {
  return <Layout />;
}

export default App;
