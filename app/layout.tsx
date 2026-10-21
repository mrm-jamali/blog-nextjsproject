import Nav from "@/components/Nav";

import "./globals.css"
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fa" 
     
    >
      <body className="min-h-full flex flex-col" dir="rtl">{children}
        <Nav />
      </body>
    </html>
  );
}
