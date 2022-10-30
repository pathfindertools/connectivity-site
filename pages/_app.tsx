import "../styles.css";
import TinaProvider from "../.tina/components/TinaDynamicProvider";
import PlausibleProvider from 'next-plausible';

const App = ({ Component, pageProps }) => {
  return (
    <TinaProvider>
      <PlausibleProvider domain="https://libp2p-microgen.vercel.app/">
        <Component {...pageProps} />
      </PlausibleProvider>
    </TinaProvider>
  );
};

export default App;
