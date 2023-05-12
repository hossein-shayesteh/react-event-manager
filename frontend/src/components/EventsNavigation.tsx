import React from "react";
import styles from "./EventsNavigation.module.css";

import { Link, useRouteLoaderData } from "react-router-dom";

const EventsNavigation = () => {
  const token = useRouteLoaderData("root");
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <Link to={"/events"}>All Events</Link>
          </li>
          <>
            {token && (
              <li>
                <Link to={"new"}>New Event</Link>
              </li>
            )}
          </>
        </ul>
      </nav>
    </header>
  );
};

export default EventsNavigation;
