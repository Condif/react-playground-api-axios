import React, { Component, CSSProperties } from 'react';
import Navbar from './navbar';
import ViewContainer from './viewContainer/viewContainer';
import { fullScreen } from '../css';
import { ThemeContext, ThemePalette } from '../contexts/themeContext';

interface Props {}

interface State {
    currentView: string
}

/** React class component */
export default class Layout extends Component<Props, State> {

    render() {
        return (
            <ThemeContext.Consumer>
                {({ theme }) => (
                <div style={{ ...rootStyle(theme), ...fullScreen}}>
                    <Navbar/>
                    <ViewContainer/>
                </div>
                )}
            </ThemeContext.Consumer>
        );
    }
}

const rootStyle = (theme: ThemePalette): CSSProperties => ({
    display: 'flex',
    flexDirection: 'column',
    background: theme.background.secondary
});

