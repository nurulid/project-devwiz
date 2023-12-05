import { EventCard } from "@/components/events/components/EventCard";
import { cookies } from "next/headers";
import Link from "next/link";

async function getMyEvents() {
  const cookieStore = cookies();
  const userId = cookieStore.get("id").value; // get user id value from cookies

  const res = await fetch(
    `https://eventmakers-api.vercel.app/api/events?userid=${userId}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data;
}

export default async function Page() {
  const { data } = await getMyEvents();
  const isEvents = data.length > 0;

  return (
    <>
      <h1 className="text-4xl font-semibold mb-10">My Events</h1>
      {isEvents ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {data.map(
            ({ id, image, name, location, date, isBanned, participants }) => {
              return (
                <EventCard
                  key={id}
                  id={id}
                  image={image}
                  name={name}
                  location={location}
                  date={date}
                  isBanned={isBanned}
                  participants={participants}
                />
              );
            }
          )}
        </div>
      ) : (
        <> 
          <div className="border px-4 my-6 py-3 rounded-xl mb-8 border-yellow-200 dark:border-yellow-100 bg-yellow-200/20">You don't have any event yet.</div>
          <Link href={"/dashboard/events/create"} className="btn-link">
            Create Event
          </Link>
        </>
      )}
    </>
  );
}
