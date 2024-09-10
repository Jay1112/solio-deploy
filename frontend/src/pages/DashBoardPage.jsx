import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardForm from "../components/Dashboard/DashboardForm";

function DashBoardPage() {
  return (
    <DashboardLayout>
      <div className="p-4 animated animatedFadeInUp fadeInUp">
        <DashboardForm />
      </div>
    </DashboardLayout>
  );
}

export default DashBoardPage;
