/*import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";

export async function getServerSideProps({ req, res }) {
  return {
    props: {
      session: await unstable_getServerSession(req, res, authOptions),
    },
  };
}*/

import Layout from "../components/Layout.jsx";

function App() {
  return <Layout />;
}

export default App;
