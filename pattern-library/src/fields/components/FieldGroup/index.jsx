import React, { PropTypes } from 'react';
import bsGrid from '@xo-union/bootstrap/grid';
import bsUtils from '@xo-union/bootstrap/utilities';

/**
 * Use this component to visually separate groups of fields
 */
export default function FieldGroup({ children, ...props }) {
  return (
    <div className={bsUtils.mb3} {...props}>
      <div className={bsGrid.row}>
        {children}
      </div>
    </div>
  );
}

FieldGroup.propTypes = {
  /**
   * The first level children should more than likely be divs using bootstrap's grid classes.
   * The second level children should be fields.
   */
  children: PropTypes.node.isRequired
};
