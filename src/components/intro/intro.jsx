import React from 'react'
import './intro.css'
import Me from '../../images/me.png'

export const Intro = () => {
  return (
    <div className="i">
        <div className="i-left">
            <div className="i-left-wrapper">
                <h1 className="i-name"><span className="i-intro">I Am</span> Elon Musk</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">SpaceX</div>
                        <div className="i-title-item">Tesla</div>
                        <div className="i-title-item">Twitter</div>
                        <div className="i-title-item">NeuraLink</div>
                        <div className="i-title-item">Boring Company</div>
                    </div>
                </div>
                <p className="i-desc">
                I am a visionary entrepreneur and innovator whose work spans multiple industries. My endeavors consistently push the boundaries of what's possible, with a vision aimed at solving some of humanity's most pressing challenges while simultaneously advancing technology for the betterment of society.

                </p>
            </div>
        </div>
        <div className="i-right">
            <div className="i-bg"></div>
            <img src={Me} alt="" className="i-img" />
        </div>
    </div>
  )
}
