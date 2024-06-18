import { Header, Footer } from "@/components/layouts";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <div className="flex flex-col h-screen">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default RootLayout;
