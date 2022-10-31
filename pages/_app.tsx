import "../styles.css";
import TinaProvider from "../.tina/components/TinaDynamicProvider";
import PlausibleProvider from 'next-plausible';

const App = ({ Component, pageProps }) => {
  return (
    <PlausibleProvider domain="libp2p-microgen.vercel.app">
      <TinaProvider>
        <Component {...pageProps} />
      </TinaProvider>
    </PlausibleProvider>
  );
};

export default App;
