import React from 'react';

import './banner.css';

export function ReusableBanner(props) {
    return (
        <div className="banner">{props.text}</div>
    )
}