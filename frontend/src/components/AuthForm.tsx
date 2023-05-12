import React from "react";
import styles from "./AuthForm.module.css";

import {
  Form,
  Link,
  useSearchParams,
  useActionData,
  useNavigation,
} from "react-router-dom";

const AuthForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  const actionData = useActionData() as any;
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  return (
    <>
      <Form method="post" className={styles.form}>
        <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
        {actionData && actionData.message && <p>{actionData.message}</p>}
        {actionData && actionData.errors && (
          <ul>
            {Object.values(actionData.errors).map((err: any) => (
              <li key={err}>- {err}</li>
            ))}
          </ul>
        )}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id={"password"} type="password" name="password" required />
        </p>
        <div className={styles.actions}>
          <Link to={`?mode=${isLogin ? "signup" : "login"}`} type="button">
            {isLogin ? "Create new user" : "Login"}
          </Link>
          <button type={"submit"} disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Save"}
          </button>
        </div>
      </Form>
    </>
  );
};

export default AuthForm;
