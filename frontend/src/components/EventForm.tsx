import React from "react";
import styles from "./EventForm.module.css";

import {
  Form,
  useNavigate,
  useNavigation,
  json,
  redirect,
} from "react-router-dom";
import { Event } from "../pages/Events";

const EventForm = (props: { event: Event; method: "post" | "patch" }) => {
  const navigate = useNavigate();
  const navigation = useNavigation();

  const submitting =
    navigation.state === "submitting" || navigation.state === "loading";

  const event = props.event;
  const cancelHandler = () => {
    navigate("..");
  };
  return (
    <Form method={props.method} className={styles.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          // required
          defaultValue={event ? event.title : ""}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={event ? event.image : ""}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={event ? event.date : ""}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows={5}
          required
          defaultValue={event ? event.description : ""}
        />
      </p>
      <div className={styles.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button
          disabled={submitting}
          className={submitting ? styles.inactive : undefined}
        >
          {submitting ? "Submitting..." : "Save"}
        </button>
      </div>
    </Form>
  );
};

export default EventForm;

export const action = async ({ request, params }: any) => {
  const method = request.method;
  const data = await request.formData();

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  let url = "http://localhost:8080/events";
  if (method === "PATCH") {
    url = `http://localhost:8080/events/${params.eventId}`;
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });
  if (!response.ok) {
    throw json({ message: "An error occurred during sending data." });
  }
  return redirect("/events");
};
