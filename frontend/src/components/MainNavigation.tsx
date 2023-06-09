import React from "react";
import styles from "./MainNavigation.module.css";

import { Form, NavLink, useRouteLoaderData } from "react-router-dom";
import NewsletterSignup from "./NewsletterSignup";

const MainNavigation = () => {
  const token = useRouteLoaderData("root");

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"events"}
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"newsletter"}
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Newsletter
            </NavLink>
          </li>
          {!token && (
            <li>
              <NavLink
                to={"auth?mode=login"}
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                Log in
              </NavLink>
            </li>
          )}
          <>
            {token && (
              <li>
                <Form action={"/logout"} method={"post"}>
                  <button>Log out</button>
                </Form>
              </li>
            )}
          </>
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
};

export default MainNavigation;
