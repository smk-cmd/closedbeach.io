// merging WagmiConfig and Session Provider

import {
  createClient, // default option for Wagmi, default configurations 
  configureChains, // chains that run based off mainnet and goerli 
  // makes it easier to connect to providers and connectors instead of defining each individual piece
  defaultChains, // passes to the connectors
  WagmiConfig,
} from "wagmi";
import { publicProvider } from "wagmi/providers/public"; // folder when downloading wagmi
import { SessionProvider } from "next-auth/react"; // next auth is next js migration 

const { provider, webSocketProvider } = configureChains(defaultChains, [
  publicProvider(),
]);
// after running this code, the result of this will determine if it is sufficient enough for createClient. 
// 

//standard createClient gathering providers, websocketproviders and connects 
const client = createClient({
  provider, // app support
  webSocketProvider,
  autoConnect: true,
});


// passes to myApp 
function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={client}>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <Component {...pageProps} />
      </SessionProvider>
    </WagmiConfig>
  );
}

export default MyApp;
