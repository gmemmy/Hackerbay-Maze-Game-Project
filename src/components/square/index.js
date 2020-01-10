/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './index.css'

const Square = (props) => {
    return (
      <button className="square" onClick={() => props.onClick()}>
        <img src={props.element} style={{ display: props.display }} />
      </button>
    );
}

export default Square;
