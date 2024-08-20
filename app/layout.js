import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Share Prompts",
  description: "Introduction to Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <a href="/">home</a>
          <br />
          <a href="/posts">posts</a>
          <br />
          <a href="/prompts">prompts</a>
          <br />
          <a href="/users">users</a>
        </nav>
        <br />
        <p>
          this layout file forms the layout that is visible and shared with all
          the child elements, in this case it wraps the body element which forms
          the <strong>root-layout</strong>
        </p>
        <p>this layout is visible in all the pages of this website</p>
        <br />
        {children}
      </body>
    </html>
  );
}
