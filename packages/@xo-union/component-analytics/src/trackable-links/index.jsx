import React from 'react';
import PropTypes from 'prop-types';
import matches from 'matches-selector';
import willOpenNewTab from '@segment/is-meta';
import { autobind } from 'core-decorators';

export class DefaultFollowStrategy {
  constructor({ timeout = 300, location = window.location } = {}) {
    this.timeout = timeout;
    this.location = location;
  }

  call({ href }) {
    setTimeout(() => {
      this.location.href = href;
    }, this.timeout);
  }
}

function linkWillChangePage(element) {
  const target = element.getAttribute('target');
  const href = element.getAttribute('href');

  return href && target !== '_blank';
}

function evalDynamicProperty(propertyValue, ...params) {
  return typeof propertyValue === 'function' ? propertyValue(...params) : propertyValue;
}

export default class TrackableLinks extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    linkSelector: PropTypes.string.isRequired,
    eventName: PropTypes.oneOfType([
      PropTypes.func, PropTypes.string
    ]).isRequired,
    eventData: PropTypes.oneOfType([
      PropTypes.func, PropTypes.string
    ]).isRequired,
    analytics: PropTypes.shape({ track: PropTypes.func }),
    followStrategy: PropTypes.oneOfType([
      PropTypes.oneOf([false]),
      PropTypes.shape({
        call: PropTypes.func
      })
    ])
  }

  static defaultProps = {
    followStrategy: new DefaultFollowStrategy(),
    analytics: window.analytics,
    linkSelector: 'a'
  }

  @autobind
  handleClick(clickEvent) {
    const element = clickEvent.target;
    const { followStrategy, analytics, linkSelector } = this.props;

    if (matches(element, linkSelector)) {
      const eventName = evalDynamicProperty(this.props.eventName, element);
      const eventData = evalDynamicProperty(this.props.eventData, element);

      analytics.track(eventName, eventData);

      if (linkWillChangePage(element) && !willOpenNewTab(clickEvent)) {
        const href = element.getAttribute('href');
        clickEvent.preventDefault();

        if (followStrategy && typeof followStrategy.call === 'function') {
          followStrategy.call({ href });
        }
      }
    }
  }

  render() {
    /* eslint-disable jsx-a11y/no-static-element-interactions */
    const {
      children,
      linkSelector
    } = this.props;

    return (
      <div data-trackable-links={linkSelector} onClick={this.handleClick}>
        {children}
      </div>
    );
  }
}

