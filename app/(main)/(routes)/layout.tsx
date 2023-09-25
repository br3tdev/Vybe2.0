import NavigationSidebar from "@/components/navigation/navigation-sidebar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-full">
      <section className="hidden md:flex h-full w-[72px] z-30 flex-col fixed inset-y-0">
        <NavigationSidebar />
      </section>
      <section className="md:pl-[72px] h-full">{children}</section>
    </main>
  );
}
