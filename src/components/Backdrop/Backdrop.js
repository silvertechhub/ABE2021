import React from 'react';

import './Backdrop.css';

const Backdrop = props =>{ 
    return(
        <div className="backClick" onClick={props.click} />
    )
}

export default Backdrop;