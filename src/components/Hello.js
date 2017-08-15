import React, {Component} from 'react';
//exported default values are imported without using braces {}
//all other values that exported (without default) must be imported using their name surrounded by
//braces {}

//when using jsx, you must always import react - even though you might not use
//the React object anyhwere in your file


//All class based components must `extend` from `Component` or `React.component`
//depending on who you choose to import react modules
class Hello extends Component {

  constructor (props) {
      super(props);

      this.state = {
        hovered: false
      };

  }

  render() {

    const { hovered } = this.state;
    //Al class based components must have a render method that
    //returns a React element

    const {
       isBye = false,
       bgColor = 'Lavender',
       fontFamily = 'Helvetica Neue'
     } = this.props;

     let greeting;
     if (hovered) {
       greeting = !isBye ? <em>Bye</em> : <strong>Hello</strong>
     } else {
       greeting = isBye ? <em>Bye</em> : <strong>Hello</strong>
     }

   //In the class based component, `props` is a property of `this`
  // const greeting = isBye ? <em>Bye</em> : <strong>Hello</strong>

  // const {bgColor = 'Lavender', fontFamily = 'Helvetica Neue'} = props;

    const style = {
      fontFamily: `${fontFamily}, sans-serif`,
      fontWeight: '200',
      backgroundColor: bgColor,
      borderRadius: '3px'
    };

  return (

    <h1
      onMouseLeave={() => {this.setState({hovered: false})}}
      onMouseEnter={() => {this.setState({hovered: true})}}
      className='Hello' style={style}>
       {greeting},
        {this.props.name}!
      </h1>

    );
  }
}

//Using props with the jSX:
// <`Hello name='Jon' />`
// the `props1 object will recieve all HTML attributes as properties`
//meaning that the above `Hello` react element will be be instantiated with props having
//the property `name` and its value being `Jon.`
export default Hello
