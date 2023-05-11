import React from "react";
import styles from "./PageContent.module.css";

const PageContent = (props: { title: string; children: React.ReactNode }) => {
  return (
    <div className={styles.content}>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  );
};

export default PageContent;
