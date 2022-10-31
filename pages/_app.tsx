import "../styles.css";
import TinaProvider from "../.tina/components/TinaDynamicProvider";
import PlausibleProvider from 'next-plausible';

const App = ({ Component, pageProps }) => {
  return (
    <PlausibleProvider domain="connectivity.libp2p.io">
      <TinaProvider>
        <Component {...pageProps} />
      </TinaProvider>
    </PlausibleProvider>
  );
};

export default App;
