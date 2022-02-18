import React from 'react'
import heroImage from "../images/photo-grid.png"

export default function Hero() {
    return (
        <section className="hero">
            <img className="hero-photo" src={heroImage} alt="Airbnb Grid" />
            <h1 className="hero-header">Online Experiences</h1>
            <p className="hero-info">Join unique interactive activities led by
                one-of-a-kind hosts- all without leaving home.</p>
        </section>
    )
}
