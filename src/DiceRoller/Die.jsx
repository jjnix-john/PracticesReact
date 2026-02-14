
import React, {Component} from 'react'
import die from './Die.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

class Die extends Component{
render(){
    const {face, rolling} = this.props
    
    return (
            <div className={die}>
                <FontAwesomeIcon icon={['fas', `fa-dice-${face}`]} className={`Die 
                ${rolling && 'Die-shaking'}`} />
            </div >
        )
}
}

export default Die