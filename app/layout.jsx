import Head from "./head";
import Header from "./header";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head/>
      <body>
        <Header/>
        {children}
        
        </body>
    </html>
  );
}
