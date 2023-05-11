import React from "react";
import EventForm from "../components/EventForm";
import { useRouteLoaderData } from "react-router-dom";
import { Event } from "./Events";

const EditEvent = () => {
  const eventData = useRouteLoaderData("event-detail") as { event: Event };

  return <EventForm event={eventData.event} method={"patch"} />;
};
export default EditEvent;
