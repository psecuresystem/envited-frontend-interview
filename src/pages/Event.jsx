import React from 'react';
import styles from '../styles/Event.module.css';
import { FaCalendar, FaMapMarkerAlt, FaAngleRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Event = () => {
  const event = JSON.parse(localStorage.getItem('event'));
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <p
        onClick={() => {
          navigate('/');
        }}
        className={styles.cancel}
      >
        X
      </p>
      <div>
        <p className={styles.eventTitle}>{event.title}</p>
        <p className={styles.eventPlatform}>Hosted by Elysia</p>
        <div className={styles.eventDetail}>
          <FaCalendar
            size={24}
            style={{
              padding: 14,
              boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)',
              borderRadius: 10,
              marginRight: 20,
            }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <p className={styles.startDate}>
              {new Date(event.startDate).toUTCString()}
            </p>
            <p className={styles.endDate}>
              To {new Date(event.endDate).toUTCString()}
            </p>
          </div>
          <FaAngleRight
            className={styles.nextArrow}
            size={24}
            style={{
              padding: 14,
              borderRadius: 10,
              marginRight: 20,
            }}
          />
        </div>

        <div className={styles.eventDetail}>
          <FaMapMarkerAlt
            size={24}
            style={{
              padding: 14,
              boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)',
              borderRadius: 10,
              marginRight: 20,
            }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <p className={styles.startDate}>Street Name</p>
            <p className={styles.endDate}>{event.location}</p>
          </div>
          <FaAngleRight
            className={styles.nextArrow}
            size={24}
            style={{
              padding: 14,
              borderRadius: 10,
              marginRight: 20,
            }}
          />
        </div>
      </div>
      <img src={event.imgSrc} alt='landing' className={styles.image} />
    </div>
  );
};

export default Event;
