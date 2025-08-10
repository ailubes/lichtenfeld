import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lichtenfeld - Справжні сири від майстра-сировара",
  description: "Артизанські сири від Олександра Доброжанського. Робимо сири так, як робили майстри в Альпах та Британії сотні років тому.",
  keywords: "сир, крафтовий сир, артизанський сир, український сир, Ліхтенфельд, Lichtenfeld, сировар, ферма",
  openGraph: {
    title: "Lichtenfeld - Справжні сири від майстра-сировара",
    description: "Артизанські сири від Олександра Доброжанського",
    url: "https://lichtenfeld.com.ua",
    siteName: "Lichtenfeld",
    locale: "uk_UA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
