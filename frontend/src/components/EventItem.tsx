import styles from "./EventItem.module.css";
import { Event } from "../pages/Events";
import { Link, useSubmit } from "react-router-dom";
function EventItem({ event }: { event: Event }) {
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
      <menu className={styles.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={handleDeleteItem}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
