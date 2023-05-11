import styles from "./EventsNavigation.module.css";
import { Link } from "react-router-dom";

function EventsNavigation() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <Link to={"/events"}>All Events</Link>
          </li>
          <li>
            <Link to={"new"}>New Event</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
