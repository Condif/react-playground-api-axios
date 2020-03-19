import React from 'react';
import { PropagateLoader } from 'react-spinners';
import { centeredContent, fullScreen } from '../css';
import { ThemeContext } from '../contexts/themeContext';

interface Props {
    size?: number
}

export default function(props: Props) {
    const defaultSize = 6;
    const size = props.size ? (props.size * defaultSize) : defaultSize

    return (
        <ThemeContext.Consumer>
            {({theme}) => (
                <div style={{ ...centeredContent, ...fullScreen}}>
                    <PropagateLoader 
                        color={theme.foreground.primary} 
                        size={size} 
                        sizeUnit="px"
                    />
                </div>
            )}
        </ThemeContext.Consumer>
    );
}