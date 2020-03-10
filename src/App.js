import React from 'react'
import Animation from './Components/Animation';
import Spinner from './animation.json';
import UserLocation from './user-location.json';



const App = () => {

 
  return (
    <div>
      <Animation animation={Spinner}/>
        <Animation animation={UserLocation} />
    </div>
        

  )
}
 
export default App
