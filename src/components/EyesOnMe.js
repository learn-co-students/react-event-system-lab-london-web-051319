// Code EyesOnMe Component Here

import React, { Component } from 'react';


class EyesOnMe extends Component {
    render(){
        return(
            <button
                onFocus={this.goodConsole}
                onBlur={this.heyConsole}
            ></button>
        )
    }

    goodConsole = () => {console.log('Good!')}
    heyConsole = () => {console.log('Hey! Eyes on me!')}
}

export default EyesOnMe;