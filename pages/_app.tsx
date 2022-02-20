import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Menu } from "../components/Menu";
import { Provider } from "react-supabase";
import { supabase } from "../utils/supabaseClient";
import { UserProvider } from "../providers/user";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="text-base h-full flex flex-col">
      <Provider value={supabase}>
        <UserProvider>
          <Menu />
          <div className="flex-1 overflow-auto">
            <Component {...pageProps} />
          </div>
        </UserProvider>
      </Provider>
    </div>
  );
}

export default MyApp;
