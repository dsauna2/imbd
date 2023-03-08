import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "IMBD",
  description: "imbd clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header></Header>

        {children}
      </body>
    </html>
  );
}
