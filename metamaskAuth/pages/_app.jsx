// merging WagmiConfig and Session Provider

import {
  createClient, // default option for Wagmi, default configurations 
  configureChains, // chains that run based off mainnet and goerli 
  defaultChains, 
  WagmiConfig,
} from "wagmi";
import { publicProvider } from "wagmi/providers/public"; // folder when downloading wagmi
import { SessionProvider } from "next-auth/react"; // next auth is next js migration 

const { provider, webSocketProvider } = configureChains(defaultChains, [
  publicProvider(),
]);

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
});

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
