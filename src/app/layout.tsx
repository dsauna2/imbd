import "./globals.css";
import Header from "./components/Header";
import ThemeProviderComponent from "./components/ThemeProviderComponent";
import NavBar from "./components/NavBar";

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
        <ThemeProviderComponent>
          <Header></Header>
          <NavBar></NavBar>
          {children}
        </ThemeProviderComponent>
      </body>
    </html>
  );
}
