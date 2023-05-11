import React from "react";

import EventForm from "../components/EventForm";

const NewEvent = () => {
  const newEvent = { date: "", description: "", id: "", image: "", title: "" };

  return <EventForm event={newEvent} method={"post"} />;
};
export default NewEvent;
