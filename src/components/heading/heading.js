import React from 'react';
import './heading.scss';

const Heading = props => {
    return (
        <h2 className="heading">{props.title}</h2>
    )
}

export default Heading
