import React, { useState } from 'react'
import DrinkForm from '../../container/DrinkForm'
import DrinkForm2 from '../DrinkForm2/DrinkForm2'

import '../NextForm/NextForm.css'

const NextForm = () => {
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
            {!toggle ? <DrinkForm /> : <DrinkForm2 />}
            </div>
    )
}

export default NextForm