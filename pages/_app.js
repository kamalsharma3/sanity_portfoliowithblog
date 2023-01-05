import "../styles/globals.css";
import { ContextProvider } from "../context/ContextProvider";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
};

export default MyApp;
