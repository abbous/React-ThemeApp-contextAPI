import React, { useContext } from 'react'
import themeContext from './themeContext'
import Logo from '../PropsDrilling/Logo'
function Body() {

   

    const { selectedTheme } = React.useContext(themeContext);

    return (
        <div className="app-body">
            <Logo logoBackground={selectedTheme.logoBackground} />
        </div>
    );
};

export default Body;