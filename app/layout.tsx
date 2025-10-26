// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>VyBout</title>
      </head>
      <body className="bg-gray-50">
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col min-h-screen md:ml-64">
            <Navbar />
            <main className="flex-1 p-4 md:p-8">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
