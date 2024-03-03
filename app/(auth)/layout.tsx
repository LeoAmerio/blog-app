const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen w-full items-center justify-content">
      {children}
    </main>
  );
};
export default Layout;
