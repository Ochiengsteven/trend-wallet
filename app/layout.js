import AuthProvider from "./(components)/AuthProvider";
import "./globals.css";
import Providers from "./providers";
import ReduxProvider from "./Redux/Provider";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

export const metadata = {
  title: "TrendWallet",
  description: "Generated by Ochieng",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className="">
          <Providers>
            <ReduxProvider>
              <div>{children}</div>
            </ReduxProvider>
          </Providers>
        </body>
      </AuthProvider>
    </html>
  );
}
