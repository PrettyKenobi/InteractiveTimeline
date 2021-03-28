import styles from "./Footer.module.css"
import React from "react";

class Footer extends React.Component {
  render() {
    return <footer>
    <div className={styles.footer}>
      <h3>About</h3>
      <a href="https://github.com/PrettyKenobi/InteractiveTimeline">README</a>
      </div>
      </footer>;
  }
};

export default Footer;