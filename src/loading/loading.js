import React from 'react'
import Lottie from 'react-lottie'
import * as loading from './4883-beer-icon.json'

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidyMid slice'
    }
}

const Loading = () => {
   
        return (
            <div>
                <Lottie options={defaultOptions} height={1000} width={1000}/>
            </div>
        )

}

export default Loading
