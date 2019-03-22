import React from 'react';

import './banner.css';

//Renders banner
export function ReusableBanner(props) {
    return (
        <div className="banner">{props.text}</div>
    )
}