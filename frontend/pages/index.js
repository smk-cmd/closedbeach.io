import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";

export async function getServerSideProps({ req, res }) {
  return {
    props: {
      session: await unstable_getServerSession(req, res, authOptions),
    },
  };
}

import "../src/app.css";
import Layout from "../src/components/Layout/Layout.jsx";

function App() {
  return <Layout />;
}

export default App;
