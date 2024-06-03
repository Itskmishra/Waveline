import { Inter } from "next/font/google";
import "../styles/globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Waveline",
  description:
    "A landing page for a web application. Designed with next js by skmishra.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "bg-white max-w-7xl w-full mx-auto"
        )}
      >
        {children}
      </body>
    </html>
  );
}
