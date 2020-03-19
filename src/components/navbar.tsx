import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext, ThemePalette } from '../contexts/themeContext';
import Button from './button';
import ThemeToggleButton from './themeToggleButton';


/** React function component */
export default function Navbar() {

    return (
        <ThemeContext.Consumer>
        {({theme}) => (
            <div style={navbar(theme)}>
                <Link to="/" style={navbarItem(theme)}>React Playground</Link>
                <ThemeToggleButton/>
            </div>
        )}
        </ThemeContext.Consumer>
    );
}

const navbar = (theme: ThemePalette): CSSProperties  => ({
    height: '4em',
    minHeight: '4em',
    background: theme.background.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 1em',
    boxShadow: `0 -10px 30px black`

});

const navbarItem = (theme: ThemePalette): CSSProperties => ({
    fontSize: '1.7em',
    margin: 0,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    textDecoration: 'none',
    color: theme.foreground.primary,
});