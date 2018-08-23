import React, { Component, Fragment } from 'react';
import { Transition } from 'react-transition-group';
import './styles.css';

const duration = 300;

const defaultInputStyle = {
  transition: `all ${duration}ms ease-in-out`,
  height: 1,
  padding: 0,
}

const inputTransitionStyles = {
  entering: { height: 32, padding: 5 },
  entered: { height: 32, padding: 5 },
};

const defaultLabelStyle = {
  transition: `all ${duration}ms ease-in-out`,
  fontSize: 12,
}

const labelTransitionStyles = {
  entering: { fontSize: 10 },
  entered: { fontSize: 10 },
};

export default class TextInput extends Component {
  state = {
    isFocused: false,
  }

  setFocus = isFocused => {
    this.setState({ isFocused });
  }

  render() {
    const { label, value } = this.props;
    return(
      <div className="textinput-container">
        <Transition
          in={this.state.isFocused || value !== ''}
          timeout={duration}
        >
          {(state) => (
            <Fragment>
              <label
                htmlFor={`input-${label}`}
                style={{
                  ...defaultLabelStyle,
                  ...labelTransitionStyles[state],
                }}
              >
                {label}
              </label>
              <input
                name={`input-${label}`}
                id={`input-${label}`}
                type="text"
                onFocus={() => this.setFocus(true)}
                onBlur={() => this.setFocus(false)}
                {...this.props}
                style={{
                  ...defaultInputStyle,
                  ...inputTransitionStyles[state],
                }}
              />
            </Fragment>
          )}
        </Transition>
      </div>
    )
  }
}
