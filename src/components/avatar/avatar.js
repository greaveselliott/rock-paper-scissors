import React from 'react';
import './avatar.scss';

function Avatar() {
    return (
        <figure className="avatar">
            <img className="avatar__image" src=""/>
            <figcaption className="avatar__caption">
            <div className="avatar__name">Name</div>
            <div className="avatar__score">Score: 0</div>
            </figcaption>
        </figure>
    )
}

export default Avatar
