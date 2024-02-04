interface DashboardLayoutProps {
  children: React.ReactNode;
}

import React from "react";
import Sidebar from "./_components/sidebar";
import OrgSidebar from "./_components/org-sidebar";
import Navbar from "./_components/navbar";

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <main className="h-full">
      <Sidebar />
      <section className="pl-[60px] h-full">
        <article className="flex gap-x-3 h-full">
          <OrgSidebar/>
          <div className="h-full flex-1">
            <Navbar/>
            {children}
            </div>
        </article>
      </section>
    </main>
  );
};

export default DashboardLayout;
