import "./globals.css";
import Header from "./components/Header";
import ThemeProviderComponent from "./components/ThemeProviderComponent";

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

          {children}
        </ThemeProviderComponent>
      </body>
    </html>
  );
}
