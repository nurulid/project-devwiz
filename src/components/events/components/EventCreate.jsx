"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Input } from "@nextui-org/react";

export const EventCreate = () => {
  const router = useRouter();
  const [eventName, setEventName] = useState("");

  async function createEvent() {
    const res = await fetch("https://eventmakers-api.vercel.app/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: eventName,
        description: "event description",
        location: "Jakarta",
        date: "2023-12-12",
        authorId: "bb521684-5f99-4817-b0d0-afc84d56178f" // TODO: CHANGE TO DINAMIC USERID
      }),
    });
    const data = await res.json();
    router.refresh();
    setEventName("");
    console.log(data);
  }
  return (
    <div>
      <Input value={eventName} onChange={(e) => setEventName(e.target.value)} />
      <Button onClick={createEvent}>Add event</Button>
    </div>
  );
};
