import React, { useState } from 'react';
import Input from '../components/Input';
import styles from '../styles/Create.module.css';
import ReactImagePickerEditor from 'react-image-picker-editor';
import 'react-image-picker-editor/dist/index.css';
import { useNavigate } from 'react-router-dom';

const config2 = {
  borderRadius: '8px',
  language: 'en',
  width: '100%',
  height: '250px',
  objectFit: 'contain',
  compressInitial: null,
};

const CreateEvent = () => {
  const [eventDetails, setEventDetails] = useState({});
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Create your Event</h1>
      <div className={styles.form}>
        <div style={{ flex: 1, width: '100%' }}>
          <Input
            state={eventDetails}
            setState={setEventDetails}
            id={'title'}
            title={'🎉 My event is called '}
          />
          <Input
            state={eventDetails}
            setState={setEventDetails}
            id={'startDate'}
            title={'🗓 It starts at '}
            date
          />
          <Input
            state={eventDetails}
            setState={setEventDetails}
            id={'endDate'}
            title={'🏁 It ends at '}
            date
            optional
          />
          <Input
            state={eventDetails}
            setState={setEventDetails}
            id={'location'}
            title={'📍 It’s happening at '}
            optional
          />
          <Input
            state={eventDetails}
            setState={setEventDetails}
            id={'uri'}
            title={'🔗 Add a URL link '}
            optional
          />
          <Input
            state={eventDetails}
            setState={setEventDetails}
            id={'description'}
            title={'✏️ Description '}
            optional
          />
        </div>
        <ReactImagePickerEditor
          config={config2}
          imageSrcProp={eventDetails.imgSrc}
          imageChanged={(newDataUri) => {
            setEventDetails((prev) => ({ ...prev, imgSrc: newDataUri }));
          }}
        />
      </div>
      <button
        className={styles.event_button}
        onClick={() => {
          localStorage.setItem('event', JSON.stringify(eventDetails));
          navigate('/event');
        }}
      >
        Create Event
      </button>
    </div>
  );
};

export default CreateEvent;
