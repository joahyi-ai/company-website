import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "IG Tools",
  description: "Instagram tools",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar /> */}

        {children}
      </body>
    </html>
  );
}
