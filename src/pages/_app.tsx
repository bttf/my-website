import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Adnan's Web Site</title>
        <meta
          name="description"
          content="Adnan Chowdhury is a Software Developer in the United States."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-4xl mx-auto flex flex-col">
        <div className="flex flex-col flex-1 p-4 text-right">
          <div className="text-4xl">Adnan Chowdhuy</div>
          <div className="ml-2 text-xs inline">
            sofware developer, musician, content creator
          </div>
        </div>

        <div className="p-4">
          <p>
            Hey, I'm a Senior Software Engineer at Company. I enjoy working with
            Next.js and crafting beautiful front-end experiences.
          </p>{" "}
          <p>
            This portfolio is built with Next.js and a library called Nextra. It
            allows you to write Markdown and focus on the content of your
            portfolio.
          </p>
        </div>

        <div className="flex">
          <div className="flex-1">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </>
  );
}
