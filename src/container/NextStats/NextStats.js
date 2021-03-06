import React, { useState } from 'react'
import InitialStats from '../InitialStats/InitialStats'
import ExtraStats from '../ExtraStats/ExtraStats'

const NextStats = () => {
    const [toggle, setToggle] = useState(false)

    return (
      
        <div className="next-form">
            <span onClick={() => {setToggle(!toggle)}}
                      className={!toggle ? "form-left-hide" : "form-left-show"}>
                      {"<prev"}
                </span>
                <span onClick={() => setToggle(!toggle)} 
                      className={"form-right-show"}>
                      {"next>"}
                </span>
           {!toggle ? <InitialStats /> : <ExtraStats />}
        </div>
    )
  }


export default NextStats