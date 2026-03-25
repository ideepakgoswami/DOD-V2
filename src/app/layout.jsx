import "./globals.css";
import { Cinzel, Montserrat } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingButton from "../components/FloatingButton";
import Preloader from "../components/Preloader";

const cinzel = Cinzel({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cinzel",
  weight: ["400", "600", "700", "800"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Dream of Dance Studio | Professional Dance Training in Delhi",
  description: "Join Dream of Dance. Train. Perform. Compete. Delhi's home for professional dance, fitness, zumba, aerobics, and event choreography.",
  metadataBase: new URL('https://dreamofdancestudio.com'),
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Dream of Dance Studio | Professional Dance Training",
    description: "Delhi's home for professional dance, fitness, zumba, aerobics, and event choreography. Join Dream of Dance to train, perform, and compete.",
    url: 'https://dreamofdancestudio.com',
    siteName: 'Dream of Dance Studio',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dream of Dance Studio",
    description: "Delhi's home for professional dance, fitness, zumba, aerobics, and event choreography.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DanceSchool",
  name: "Dream of Dance Studio",
  url: "https://dreamofdancestudio.com",
  telephone: "+919560832548",
  address: {
    "@type": "PostalAddress",
    streetAddress: "G-3/1, Ground Floor, St. No. 6, Near Moni Baba Mandir, Brahmpuri",
    addressLocality: "Delhi",
    postalCode: "110053",
    addressCountry: "IN"
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      opens: "09:00",
      closes: "21:00"
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://instagram.fdel5-3.fna.fbcdn.net" crossorigin />
        <link rel="preconnect" href="https://static.cdninstagram.com" crossorigin />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${cinzel.variable} ${montserrat.variable} flex flex-col min-h-screen bg-charcoal text-ivory font-montserrat tracking-[0.02em]`} suppressHydrationWarning>
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
