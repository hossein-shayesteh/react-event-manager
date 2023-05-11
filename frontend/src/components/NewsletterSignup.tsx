import React, { useEffect } from "react";
import styles from "./NewsletterSignup.module.css";

import { useFetcher } from "react-router-dom";

const NewsletterSignup = () => {
  const fetcher = useFetcher();
  const { data, state } = fetcher;

  useEffect(() => {
    if (state === "idle" && data && data.message) {
      window.alert(data.message);
      console.log(data);
    }
  }, [state, data]);

  return (
    <fetcher.Form
      method="post"
      action={"/newsletter"}
      className={styles.newsletter}
    >
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
};

export default NewsletterSignup;
