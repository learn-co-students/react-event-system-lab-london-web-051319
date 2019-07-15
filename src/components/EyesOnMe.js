// Code EyesOnMe Component Here
import React, {Component} from 'react';

export default class EyesOnMe extends Component {
  render() {
    return(
      <button onFocus={() => console.log('Good!')} onBlur={() => console.log("Hey! Eyes on me!")} ></button> // you must add in the function in these cases because you don't want the events to automatically fire, they must perceieve an event. 
    )
  }
}
