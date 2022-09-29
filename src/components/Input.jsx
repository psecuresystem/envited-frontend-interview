import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import styles from '../styles/Create.module.css';

const Input = ({
  title,
  state,
  setState,
  id,
  date: isDate = false,
  optional = false,
}) => {
  return (
    <div>
      <p className={styles.input_title}>
        {title}{' '}
        {optional && <span style={{ opacity: 0.5 }}>{'(optional)'}</span>}
      </p>
      {isDate ? (
        <DatePicker
          className={styles.input}
          selected={state[id]}
          onChange={(date) => setState((prev) => ({ ...prev, [id]: date }))}
          showTimeSelect
          dateFormat='Pp'
        />
      ) : (
        <input
          onChange={(e) =>
            setState((prev) => ({ ...prev, [id]: e.target.value }))
          }
          className={styles.input}
        />
      )}
    </div>
  );
};

export default Input;
