import "./globals.css";

export const metadata = {
  title: "Defenceless Souls",
  description: "Dog Rescue",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
