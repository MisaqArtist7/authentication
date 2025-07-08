import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
  description: "Login and sign up page with next.js architecture",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className="antialiased" >
        {children}
      </body>
    </html>
  );
}
