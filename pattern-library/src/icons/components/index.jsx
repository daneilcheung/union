/* eslint-disable import/no-webpack-loader-syntax */
/**
 * This package uses a hosted svg file (as in http://url-to-cdn-hosted-file) in production but an
 * embedded svg file for development (as in an <svg> tag on the DOM) to avoid depending on a network.
 * The svg is pre-processed to add a unique "stamp" to the ids of the icons. As noted below, this is
 * necessary to allow incompatible versions of the icons library to co-exist within the same application.
 */
import React, { PropTypes } from 'react';
import { init } from '@xo-union/icons/setup';
import styles from '@xo-union/icons/css';
import { stamp } from '@xo-union/icons/data';

/**
 * Initialize icons -- This will be no-op if this version of the icons
 * is already initiazed
 */
init();

export default function Icon({ name, className = '', ...props }) {
  const iconSpecificClass = styles[`icon-${name}`] || '';
  return (
    <svg className={`${styles.icon} ${className} ${iconSpecificClass}`} {...props}>
      <use xlinkHref={`#icon-${name}-${stamp}`} />
    </svg>
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string
};
