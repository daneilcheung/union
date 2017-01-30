import React, { PropTypes as T } from 'react';
import labelize from 'utilities/labelize';
import styles from '@union/fields-css';

const classMap = {
  neutral: styles.field,
  invalid: styles.invalidField,
  valid: styles.validField
};

export default function Field({
  name,
  validationMessage,
  label = labelize(name),
  state = 'neutral',
  type = 'text',
  ...props
}) {
  const id = name + Date.now();

  const inputClass = classMap[state];

  if (!inputClass) {
    throw new Error(`${state} state is not supported`);
  }

  return (
    <div className={styles.fieldContainer}>
      <input type="text" className={inputClass} id={id} name={name} {...props} placeholder=" " />
      <label className={styles.fieldLabel} htmlFor={id} > { label } </label>
      <div className={styles.requirements}>{validationMessage}</div>
    </div>
  );
}

Field.propTypes = {
  /**
   * Name used for input element
   */
  name: T.string.isRequired,
  /**
   * The input's label string
   */
  label: T.string,
  /**
   * Render state
   */
  state: T.oneOf(['neutral', 'valid', 'invalid']),
  /**
   * Validation message used when field is invalid
   */
  validationMessage: T.string
};
