import React, { useContext } from 'react'
import themeContext from './themeContext'
const ThemeItem = props => {
    const { selectedTheme, selectTheme } = useContext(themeContext);
    return (
        <button style={{ color: selectedTheme.linkColor }} onClick={() => selectTheme(props.themeName)}>
            {props.themeName}
        </button>
    );
};

export default ThemeItem
