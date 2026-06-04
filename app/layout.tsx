import "./globals.css";

export const metadata = {
  title: "Kyle20000 Wallet System",
  description:
    "Centralized ledger-based wallet with real-time transfers and audit logging",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
