import { Provider } from "@ui/provider";

// Fonts
import "@fontsource/space-grotesk";
import "@fontsource/inter";

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
