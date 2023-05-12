import React from "react";
import styles from "./EventItem.module.css";

import { Event } from "../pages/Events";
import { Link, useRouteLoaderData, useSubmit } from "react-router-dom";
const EventItem = ({ event }: { event: Event }) => {
  const token = useRouteLoaderData("root");
  const submit = useSubmit();

  const handleDeleteItem = async () => {
    const proceed = window.confirm("Are You Sure?");
    if (proceed) {
      submit(null, { method: "delete" });
    }
  };

  return (
    <article className={styles.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <>
        {token && (
          <menu className={styles.actions}>
            <Link to="edit">Edit</Link>
            <button onClick={handleDeleteItem}>Delete</button>
          </menu>
        )}
      </>
    </article>
  );
};

export default EventItem;
