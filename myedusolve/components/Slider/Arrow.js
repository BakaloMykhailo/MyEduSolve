import React from 'react';

import { ArrorRight, ArrowLeft } from '../../static';

const Arrow = ({type}) => {
    return (
        <div className="arrow">
            {type == 'left' ? <ArrowLeft/> : <ArrorRight/>}
        </div>
    )
}

export default Arrow;