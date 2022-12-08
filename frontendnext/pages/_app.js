import "../styles/globals.css"
import { MoralisProvider } from "react-moralis"
import Header from "../components/Header"
import Head from "next/head"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"
import {NotificationProvider} from "web3uikit"
const client = new ApolloClient({
    cache: new InMemoryCache(),
    //using https gateway for easier connection
    uri: process.env.NEXT_PUBLIC_SUBGRAPH_API,
})

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>Closed Beach</title>
                <meta name="description" content="Closed Beach" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MoralisProvider initializeOnMount={false}>
                <ApolloProvider client={client}>
                    <NotificationProvider>
                        <Header />
                        <Component {...pageProps} />
                </NotificationProvider>
                </ApolloProvider>
            </MoralisProvider>
        </div>
    )
}

export default MyApp