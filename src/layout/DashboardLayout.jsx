import { Sidebar } from "./Sidebar";

export const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="ml- min-h-screen p-6">
        {children}
      </main>
    </div>
  );
};
