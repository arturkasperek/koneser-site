import React from 'react'
import './IntroImage.scss'

const IntroImage = (props) => {
    return (
        <div className={`intro-image`}>
            <div className={'image-holder'} style={{ backgroundImage: `url(${props.image})` }}/>
            <div className={'overlay'} style={{ opacity: 0.42 }}/>
            <div className={'title-element-container'}>
                <div className={'title-element'}>
                    <div className={'title'}><h1 class={'no-margin'}>{props.title}</h1></div>
                    {props.subTitle && (
                        <div className={'sub-title'}><span>{props.subTitle}</span></div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default IntroImage
