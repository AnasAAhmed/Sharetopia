'use client'
import "@styles/globals.css";

import Nav from "@components/Nav";
// import Provider from "@components/Provider";
import { SessionProvider } from "next-auth/react";


export const metadata = {
  title: "Sharetopia",
  description: "Discover & Share AI Prompts",
  icons: {
    icon: '/assets/images/logo.svg'
  }
};

const RootLayout = ({ children,session }) => (
  <html lang='en'>
    <body>
      {/* <Provider> */}
        <SessionProvider session={session}> 

        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          {children}
        </main>
        </SessionProvider>
      {/* </Provider> */}
    </body>
  </html>
);

export default RootLayout;
