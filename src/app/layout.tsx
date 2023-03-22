import "./globals.css";
import Header from "./components/Header";
import ThemeProviderComponent from "./components/ThemeProviderComponent";
import NavBar from "./components/NavBar";
import SearchBox from "./components/SearchBox";

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
          <Header />
          <NavBar />
          <SearchBox />
          {children}
        </ThemeProviderComponent>
      </body>
    </html>
  );
}
