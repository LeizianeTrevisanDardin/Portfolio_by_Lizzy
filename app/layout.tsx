import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leiziane — Full-stack Developer",
  description:
    "Portfolio de Leiziane: desenvolvedora full-stack construindo produtos reais com Next.js, TypeScript e Supabase.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="font-body bg-ink text-paper antialiased">
        {children}
      </body>
    </html>
  );
}
