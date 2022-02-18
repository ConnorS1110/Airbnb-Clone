import React from 'react'
import star from "../images/star.png"

export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "sold out"
    }
    else if (props.item.location.localeCompare("online", undefined, { sensitivity: 'base' }) === 0) {
        badgeText = "online"
    }
    return (
        <div className='card'>
            <div className='card-top'>
                {badgeText && <p className="status">{badgeText}</p>}
                <img className="card-image" src={`./images/${props.item.coverImg}`} alt="Headshot" />
            </div>
            <div className='card-info'>
                <div className='card-rating-info'>
                    <img className="rating-image" src={star} alt="Star" />
                    <p className='card-rating'>{parseFloat(props.item.stats.rating).toFixed(1)}</p>
                    <p className='rating-count'>({props.item.stats.reviewCount})</p>
                    <p>·</p>
                    <p className='location'>{props.item.location}</p>
                </div>
                <p className='card-description'>{props.title}</p>
                <p className='card-price'><strong>From ${props.item.price}</strong> / person</p>
            </div>
        </div>
    )
}
