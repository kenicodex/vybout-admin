export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <nav>Dashboard Sidebar</nav>
      <main>{children}</main>
    </section>
  );
}
