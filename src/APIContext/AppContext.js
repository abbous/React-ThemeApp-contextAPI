import React, { useContext, useState } from 'react'
import themeContext from './themeContext';
import Footer from './Footer'
import Header from './Header'
import Body from './Body'
function AppContext() {
        const { selectedTheme } = React.useContext(themeContext);
        return (
            <div className="app" style={{ backgroundColor: selectedTheme.backgroundColor, color: selectedTheme.color }}>
                <Header />
                <Body />
                <Footer />
            </div>
        );
    };

export default AppContext
