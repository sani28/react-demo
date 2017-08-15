import React from 'react';
import Hello from './Hello'
import Shape from './Shape'
import Background from './Background'
import Greetings from './Greetings'
import ShadesOfGrey from './ShadesOfGrey'
import Fa from './Fa'
import GuestBook from './GuestBook';
import Timer from './Timer';
import Stopwatch from './Stopwatch';
import ShapeMover from './ShapeMover';

function App (props) {
  const style = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  }
    return (
      <div className='App' style={style}>
        <ShapeMover />
        <Stopwatch />
       <Timer />
       <GuestBook />
       <Fa kind='ambulance'/>
       <Fa kind='heart-o'/>
       <Hello name='Jon' bgColor='LightCyan' isBye />
       <Hello name='Daenerys' fontFamily='Papyrus' />
       <Hello name='Cersei' isBye={true} />


       <Shape bgColor='Red' />
       <Shape bgColor='Green' type='circle' />

       <Background />

       <Greetings names={['Jo', 'Dave', 'Lana', 'Thomas', 'Ashley']} />

       <ShadesOfGrey levels={9}/>
     </div>
    );
}

export default App;
