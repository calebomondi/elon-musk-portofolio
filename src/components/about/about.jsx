import React from 'react'
import './about.css'

export const About = () => {
  return (
    <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src="https://cdn.pixabay.com/photo/2023/01/02/09/13/rocket-7691652_1280.jpg" 
                alt="" 
                className="a-img" />
            </div>
        </div>
        <div className="a-right">
            <div className="a-title">About Me</div>
            <p className="a-desc">
            I have embarked on a journey fueled by innovation, ambition, and a relentless pursuit of making the seemingly impossible, possible. I've endeavored to revolutionize space exploration, aiming to make humanity a multi-planetary species by colonizing Mars. I'm pioneering sustainable energy solutions, striving to accelerate the world's transition to electric vehicles and renewable energy sources.
            </p>
            <div className="a-images">
                <div className="a-img-item">
                    <img src="https://i.pinimg.com/564x/9d/a8/b8/9da8b8e22b9ab6afeec2d589734530f3.jpg" 
                    alt="" />
                </div>
                <div className="a-img-item">
                    <img src="https://i.pinimg.com/564x/cc/31/6f/cc316f97197528e5e26e613a93ab16a4.jpg" 
                    alt="" />
                </div>
                <div className="a-img-item">
                    <img src="https://i.pinimg.com/564x/e4/e9/82/e4e98262f33a82b1d2547c1469e00bd4.jpg" 
                    alt="" />
                </div>
                <div className="a-img-item">
                    <img src="https://i.pinimg.com/736x/49/7a/ce/497acefda85b56c6db81250a1dfceb2d.jpg" 
                    alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
