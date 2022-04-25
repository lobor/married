import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Menu } from "../components/Menu";
import { Provider } from "react-supabase";
import { supabase } from "../utils/supabaseClient";
import { UserProvider } from "../providers/user";
import { TitleProvider } from "../providers/title";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="text-base h-full flex flex-col">
      <Head>
        <title>{"Mariage d'Orphée et Lionel"}</title>
        <meta name="description" content="Mariage d'Orphée et Lionel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider value={supabase}>
        <UserProvider>
          <TitleProvider>
            <Menu />
            <div className="flex-1 overflow-auto pt-10">
              <Component {...pageProps} />
            </div>
          </TitleProvider>
        </UserProvider>
      </Provider>
    </div>
  );
}

export default MyApp;
