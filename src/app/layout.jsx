import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingButton from "../components/FloatingButton";
import Preloader from "../components/Preloader";

export const metadata = {
  title: "Dream of Dance Studio | Professional Dance Training in Delhi",
  description: "Join Dream of Dance. Train. Perform. Compete. Delhi's home for professional dance, fitness, zumba, aerobics, and event choreography.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-charcoal text-ivory">
        <Preloader />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingButton />
      </body>
    </html>
  );
}
