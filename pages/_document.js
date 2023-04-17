import Background from "@/components/Background";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-[#8D72E1] text-white">
        <div className="absolute top-0 -z-50">
          <Background />
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
