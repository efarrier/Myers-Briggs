import React from 'react';

const Count = (props) => {
  return (
    <p className="counter">{'Question ' + (props.count + 1) + ' of ' + props.total }</p>
  )
}

export default Count;
