﻿import React from 'react';
import './main.scss';

class Main extends React.Component
{
    render()
    {
        return (
            <div className="main">
                {this.props.children}
            </div>
        );
    }
}

export default Main;