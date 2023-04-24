import { Inter } from "next/font/google";
import "./globals.css";
import "./ghost.css";

const inter = Inter({ subsets: ["latin"] });

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
        <div className="p-4">{children}</div>
        <div className="p-4">© {new Date().getFullYear()} Adnan Chowdhury</div>
      </body>
    </html>
  );
}
