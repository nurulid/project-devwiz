"use client";

import Link from "next/link";
import { useLogout } from "@/components/auth/hooks/useLogout";
import { Button } from "@nextui-org/react";

export const HeaderDashboard = () => {
  const { handleLogout } = useLogout();

  return (
    <header className="bg-white shadow">
      <div className="mx-auto max-w-7xl p-8">
        <div className="flex items-center justify-between">
          <Link href={"/"} className="font-bold">
            EventMakers <span className="font-normal">| Dashboard</span>
          </Link>
          <div className="space-x-4">
            <Link href={"/dashboard/events"} className="link">
              My Events
            </Link>
            <Link href={"/dashboard/events/create"} className="btn-link">
              Create Event
            </Link>
            <Button
              onClick={handleLogout}
              variant="faded"
              color="warning"
              className="rounded-full"
            >
              Log out
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
