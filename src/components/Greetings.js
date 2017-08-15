import React from 'react';
import Hello from './Hello';

//props.name == ['Jo', 'Dave', 'Thomas', 'Diana']
//[<Hello anme ='Jo' />, <Hello name='Dave' />, <Hello name='Thomas' /> .....]
function Greetings(props) {

  const {names = []} = props; //set an empty array to prevent a crash if nothing is in the array


//To optimize rendering lists of components ,
//Give each component in the list the key prop which should
//be given a unique identifier. This can be the `index` of the array
// or much better yet, the `id` of a row in a databse if working with real data. 
  const helloElements = names.map(
    (name, index) => <Hello key={index} name= {name} />
  );


return (
   <div className='Greetings'>
     { helloElements }
   </div>
 );
}

export default Greetings;
