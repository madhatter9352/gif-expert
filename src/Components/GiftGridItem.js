import React from 'react'
import PropTypes from 'prop-types';

export const GiftGridItem = ( {id, title, url} ) => {
    console.log(id, title, url);
    return (
        <div className="card animate__animated animate__bounce">
            <img src = {url} alt={title} width={250} style={{padding: 10}}></img>
            <p>{title}</p>
        </div>
    )
}

GiftGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
