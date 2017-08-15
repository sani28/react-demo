import React, {Component} from 'react';

export function Shape (props) {
  const {bgColor = 'Blue', type = 'square', x, y} = props;

  const style = {
    borderRadius: type === 'circle' ? '99999999px' : '0px',
    width: '50px',
    height: '50px',
    backgroundColor: bgColor,
    left: x,
    top: y,
    position: 'absolute'
  }

  return (
    <div className='Shape' style={style} />
  );
}

export function ShapeContainer(props) {
  // this is where we will define our container arena
  // this is also where we will place our shape
  const { x, y } = props

  const containerStyle = {
    height: '300px',
    width: '400px',
    border: '5px solid green',
    position: 'relative'
  }

  return (
    <div style={containerStyle}>
      <Shape x={x} y={y}/>
    </div>
  )
}

export default class ShapeMover extends Component {
  constructor(props) {
    super(props)

    this.state = {
      x: 0,
      y: 0
    }

    this.moveShape = this.moveShape.bind(this)
  }

  moveShape(event) {
    const direction = event.target.name
    const x = this.state.x
    const y = this.state.y

    switch (direction) {
      case 'left':
        return this.setState({x: x - 10})
      case 'right':
        return this.setState({x: x + 10})
      case 'up':
        return this.setState({y: y - 10})
      case 'down':
        return this.setState({y: y + 10})
    }
  }

  render() {
    return (
      <div>
        <h3>This is the ShapeMover</h3>
        <button name='left' onClick={this.moveShape}>Left</button>
        <button name='up' onClick={this.moveShape}>Up</button>
        <button name='down' onClick={this.moveShape}>Down</button>
        <button name='right' onClick={this.moveShape}>Right</button>

        <ShapeContainer x={this.state.x} y={this.state.y}/>
      </div>
    )
  }
}
