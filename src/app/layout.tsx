import clsx from "clsx";
import Link from "next/link";
import { Inter } from "next/font/google";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const interTight = Inter_Tight({ subsets: ["latin"], weight: "600" });

export const metadata = {
  title: "Adnan's Web Site",
  description: "Adnan Chowdhury is a Software Developer in the United States.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="md:max-w-2xl md:mx-auto">
        <div className="p-4 pb-0">
          <div className={clsx(interTight.className, ["text-4xl"])}>
            <Link href="/">Adnan Chowdhury</Link>
          </div>
          <div>Sofware engineer, musician, content creator</div>
        </div>

        <div className="p-4">{children}</div>
        <div className="p-4">© {new Date().getFullYear()} Adnan Chowdhury</div>
      </body>
    </html>
  );
}
