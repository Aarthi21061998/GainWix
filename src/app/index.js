import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Welcome to the homepage" />

        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MXD966N7GY"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MXD966N7GY');
          `}
        </script>
      </Head>

      <main>
        <h1>Welcome to the Home Page</h1>
      </main>
    </div>
  );
}
