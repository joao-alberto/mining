import { useRouter } from "next/router";
import { Provider } from "@ui/provider";

// Layouts
import { Layout as DashboardLayout } from "@ui/layouts/dashboard";

// Fonts
import "@fontsource/space-grotesk";
import "@fontsource/inter";

const mapLayouts = {
  "/dashboard": DashboardLayout,
  "*": ({ children }) => <div>{children}</div>,
};

function MyApp({ Component, pageProps }) {
  const route = useRouter();
  const Layout = mapLayouts[route.pathname] || mapLayouts["*"];

  return (
    <Provider>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
