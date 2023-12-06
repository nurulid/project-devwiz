import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Provider } from "@/components/providers";
import { DefaultLayout } from "@/components/template/DefaultLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Devwiz EventMakers",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <DefaultLayout>
            {children}
          </DefaultLayout>
        </Provider>
      </body>
    </html>
  );
}
