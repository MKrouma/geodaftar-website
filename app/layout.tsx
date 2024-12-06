import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Geodaftar | Studio d'Intélligence Géospatiale",
  description: "Geodaftar est un studio d'intélligence géospatiale spécialisé dans l'analyse de données géospatiales pour les entreprises africaines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#143815] antialiased`}>
        <div className="min-h-screen bg-gradient-to-b from-[#143815] to-gray-900 relative overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#143815]/20 via-black/0 to-black pointer-events-none" />
          {children}
        </div>
      </body>
    </html>
  );
}
