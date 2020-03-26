import React from 'react'
import Animation from './Components/Animation';
import Spinner from './Animations/spinner.json';
import Spinner2 from './Animations/spinner2.json';

import UserLocation from './Animations/user-location.json';
import PinOpen from './Animations/pin-open.json';
import AppearinContent from './Animations/appearing-content.json';
import Anchour from './Animations/anchour.json';



const App = () => {

 
  return (
    <div>
      <p>Spinner / Splash Screen</p>
        <Animation animation={Spinner} width="100px"/>
        <p>User location marker</p>
        
        <Animation animation={UserLocation} width="100px"/>
        <p>Animated marker</p>

        <Animation animation={PinOpen} width="300px" />
        <p>Spinner 2</p>
        <Animation animation={Spinner2} width="100px"/>
        <p> Appearing content</p>
        <Animation animation={AppearinContent} width="300px"/>
        <p> Anchour</p>
        <Animation animation={Anchour} width="300px"/>
    </div>
        

  )
}
 
export default App
