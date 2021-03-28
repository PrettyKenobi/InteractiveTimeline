import styles from './Banner.module.css';
import React from 'react';

class Banner extends React.Component {
  render() {
    return <div className={styles.banner}>
      <h1>Interactive Timeline 📊</h1>
    </div>;
  }
};

export default Banner;