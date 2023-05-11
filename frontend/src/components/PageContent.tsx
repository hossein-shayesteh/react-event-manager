import React from "react";
import styles from "./PageContent.module.css";

interface PageContent {
  title: string;
  children: React.ReactNode;
}

const PageContent = (props: PageContent) => {
  return (
    <div className={styles.content}>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  );
};

export default PageContent;
