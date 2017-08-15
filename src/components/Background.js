import React from 'react';
import Shape from './Shape'
function Background(props) {

  const {bgColor = 'Orange'} = props;

  const style = {
    width: '600px',
    height: '200px',
    background : bgColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '10px'
  }
  return (

    <div className="Background" style={style}>
      <Shape bgColor="Purple" />
      <Shape bgColor="Purple" />
      <Shape bgColor="Purple" />
    </div>
  )

}
export default Background
