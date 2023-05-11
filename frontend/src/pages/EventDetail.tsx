import React from "react";
import { json, useRouteLoaderData, Outlet, redirect } from "react-router-dom";
import EventItem from "../components/EventItem";
import { Event } from "./Events";

const EventDetail = () => {
  const loaderData = useRouteLoaderData("event-detail") as { event: Event };
  return (
    <>
      <EventItem event={loaderData.event} />
      <Outlet />
    </>
  );
};
export default EventDetail;

export const loader = async ({ params }: any) => {
  const eventId = params.eventId;
  const response = await fetch(`http://localhost:8080/events/${eventId}`);
  if (!response.ok) {
    throw json(
      { message: "Could not fetch event this event!" },
      { status: 500 }
    );
  } else {
    return response;
  }
};

export const action = async ({ request, params }: any) => {
  const response = await fetch(
    `http://localhost:8080/events/${params.eventId}`,
    {
      method: request.method,
    }
  );
  console.log(request.method);
  if (!response.ok) {
    throw json({ message: "An error occurred during deleting event." });
  }
  return redirect("/events");
};
