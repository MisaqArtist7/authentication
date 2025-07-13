import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign up | HeavenFlower",
  description: "Login and sign up page with next.js architecture",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
