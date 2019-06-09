import React, { Component } from 'react';
import cn from 'classnames';

import history from './history';

class Link extends Component {
  isLeftClickEvent = e => e.button === 0;
  isModifiedEvent = e => !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);

  handleClick = e => {
    if (this.props.onClick) {
      this.props.onClick(e);
    }

    if (this.isModifiedEvent(e) || !this.isLeftClickEvent(e)) {
      return;
    }

    if (e.defaultPrevented === true) {
      return;
    }

    e.preventDefault();
    history.push(this.props.to);
  };

  render() {
    const {
      as: T = 'a',
      to,
      className,
      activeClassName = 'active',
      exact = false,
      children,
      ...props
    } = this.props;
    return (
      <T
        href={to}
        {...props}
        className={cn(className, {
          [activeClassName]: exact
            ? history.location.pathname === to
            : history.location.pathname.startsWith(to),
        })}
        onClick={this.handleClick}
      >
        {children}
      </T>
    );
  }
}

export default Link;
