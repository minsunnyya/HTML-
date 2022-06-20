import type { AppProps, AppContext } from "next/app";

import "../styles/sub_layout.css";
import "../styles/sub_pages.css";
import "../styles/sub_responsive.css";
import "../styles/top_nav.css";
import "../styles/loader.css";
import "../styles/search.css";
import "../styles/table.css";
import "../styles/info.css";
import "../styles/button.css";

// import "../styles/pt_main.css";
// import "../styles/pt_common_main.css";
// import "../styles/DataTableDemo.css";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons

// import "../styles/pt_common_main.css";
import "bootstrap/dist/css/bootstrap.css";
import { store } from "../redux/store";
import React from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { SSRKeycloakProvider } from "@react-keycloak/ssr";
import {
  keycloakConfig,
  initOptions,
  getPersistor,
  onHandleEvent,
} from "../libs/keycloak";
import { parseCookies } from "../libs/cookie";
import { Provider } from "react-redux";
import Head from "next/head";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { GetProvider } from "../contexts/get";
import { TreeProvider } from "@/contexts/tree";

const AppProvider = ({ contexts, children }) =>
  contexts.reduce(
    (prev, context) =>
      React.createElement(context, {
        children: prev,
      }),
    children
  );

interface InitialProps {
  cookies: unknown;
}
const persistor = persistStore(store);

const App = ({ Component, pageProps, cookies }: AppProps & InitialProps) => {
  return (
    <AppProvider contexts={[GetProvider, TreeProvider]}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <SSRKeycloakProvider
            keycloakConfig={keycloakConfig}
            persistor={getPersistor(cookies)}
            initOptions={initOptions}
            onEvent={onHandleEvent}
          >
            <Head>
              <title>Portal</title>
            </Head>
            <Component {...pageProps} />
          </SSRKeycloakProvider>
        </PersistGate>
      </Provider>
    </AppProvider>
  );
};

App.getInitialProps = async (context: AppContext) => {
  return {
    cookies: parseCookies(context?.ctx?.req),
  };
};

export default App;
