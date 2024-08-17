import React from 'react';
import './Chord.css';
import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';




const Chord=()=> {
  return (
    

      <>
      
<h1 className='text-center text-sucess'> LEarN kEyS & cHoRdS</h1>
      <div className='container'>   
<div className='row'>
<div className='col-md-3'>

<div class="card" >
  <img  src={"https://images.pexels.com/photos/8520479/pexels-photo-8520479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} class="card-img-top" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Piano</h5>
    <p class="card-text">The piano is a keyboard instrument that produces sound when the keys are pressed</p>
    <a href="https://musescore.com/user/24688896/scores/6537774" class="btn btn-primary">Go to learn</a>
  </div>
</div>

<div class="card1" >
  <img  src={"https://images.pexels.com/photos/6647702/pexels-photo-6647702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} class="card-img-top" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Flute</h5>
    <p class="card-text">The flute is a member of a family of musical instruments in the woodwind group. Like all woodwinds, flutes are aerophones, producing sound with a vibrating column of air.</p>
    <a href="https://primesound.org/beginner-flute-notes/" class="btn btn-primary">Go to learn</a>
  </div>
</div>


<div class="card2" >
  <img  src={"https://images.pexels.com/photos/4005446/pexels-photo-4005446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} class="card-img-top" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Guitar</h5>
    <p class="card-text">The guitar is a stringed musical instrument, that is usually fretted (with some exceptions) and typically has six or twelve strings.</p>
    <a href=" https://lessons.com/guitar-chords/easy-guitar-chords" class="btn btn-primary">Go to learn</a>
  </div>
</div>  
</div>
</div>

      </div>
      
      </>
      
      



    
  );
}

export default Chord
