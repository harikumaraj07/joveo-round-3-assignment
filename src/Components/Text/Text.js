import React from "react";

import {text} from './Text.module.css'

export const Text = ({text}) => {
    return <p className={text}>
        {text}
    </p>
}