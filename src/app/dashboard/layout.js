import DashboardLayout from "@/components/template/DashboardLayout";
import { Suspense } from "react";
import Loading from "./loading";
Loading

export default function Layout({ children }) {
  return (
    <DashboardLayout>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </DashboardLayout>
  );
}
