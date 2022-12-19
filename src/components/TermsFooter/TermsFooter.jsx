import React from "react";
import styles from "./TermsFooter.module.scss";

function TermsFooter({ position = "absolute", className = "", isMobile }) {
  return (
    <div
      className={styles.terms_footer + " " + className}
      style={{ position: position }}
    >
      © {new Date().getFullYear()}{" "}
      <a href="javascript:void" target="_blank" rel="noopener noreferrer">
        VillaTracker
      </a>
      .{isMobile ? <br /> : null} All rights reserved.{" "}
      <a href="javascript:void" target="_blank" rel="noopener noreferrer">
        Cookie policy
      </a>
      ,{" "}
      <a href="javascript:void" target="_blank" rel="noopener noreferrer">
        Privacy
      </a>{" "}
      and{" "}
      <a href="javascript:void" target="_blank" rel="noopener noreferrer">
        Terms
      </a>
      .
    </div>
  );
}
export default TermsFooter;
