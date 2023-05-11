import React, { Suspense } from "react";

import EventsList from "../components/EventsList";
import { useLoaderData, json, defer, Await } from "react-router-dom";

export interface Event {
  date: string;
  description: string;
  id: string;
  image: string;
  title: string;
}
export type Events = Events[];

const Events = () => {
  const { events } = useLoaderData() as { events: Events[] };

  return (
    <Suspense
      fallback={
        <div className={"centered"}>
          <div className="lds-dual-ring"></div>
        </div>
      }
    >
      <Await resolve={events}>
        {(events) => <EventsList events={events} />}
      </Await>
    </Suspense>
  );
};

export default Events;

export const loadEvents = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json({ message: "Could not fetch events!" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
};
export const loader = () => {
  return defer({
    events: loadEvents(),
  });
};
