import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css';

const socials = ['SnapChat', 'Instagram', 'TikTok', 'FaceBook'];

const Home = () => {
  const [socialText, setSocialText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSocialText((prev) => prev + 1);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src='/landing.png' alt='landing' className={styles.image} />
        <Link to={'/create'}>
          <button
            className={`${styles.create_event_button} ${styles.create_event_button_alt}`}
          >
            🎉 Create my event
          </button>
        </Link>
      </div>

      <div className={styles.heading}>
        <p className={styles.snapchat_text}>
          Imagine if{' '}
          <span className={styles.snapchat}>
            {socials[socialText % socials.length]}
          </span>{' '}
          had Events
        </p>
        <p className={styles.heading_description}>
          Easily host and share events with your friends across any social
          media.
        </p>
        <Link to={'/create'}>
          <button className={styles.create_event_button}>
            🎉 Create my event
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
