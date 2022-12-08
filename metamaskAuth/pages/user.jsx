// once the session has started the user will proceed to sign in

import { getSession, signOut } from "next-auth/react";

// gets a prop from getServerSideProps
// user proceeds to sign in

// user html process
function User({ user }) {
  return (
    <div>
      <h4>User session:</h4>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button onClick={() => signOut({ redirect: "/signin" })}>Sign out</button>
    </div>
  );
}

// awaits validation and then session starts if authenticated correctly 
// user enters correct credentials and has a metamask account
export async function getServerSideProps(context) {
  const session = await getSession(context);
export async function getServerSideProps(context) { // renders the page 
  const session = await getSession(context); // starts session 
  // redirect if not authenticated
  // return back to credentials page
  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }
}

  return {
    props: { user: session.user },
  };
}

export default User;