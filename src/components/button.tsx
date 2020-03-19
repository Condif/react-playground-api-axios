import React, { PropsWithChildren, CSSProperties } from 'react'
import { ThemeContext, ThemePalette } from '../contexts/themeContext'

type Props = PropsWithChildren <{
    size?: 'small' | 'regular' | 'large'
    onClick: () => void
}>

export default function Button(props: Props) {
    return ( 
        <ThemeContext.Consumer>
            {( {theme} ) => (
            <button onClick={props.onClick} style={rootStyle(theme)}>
                {props.children}
            </button>
            )}
        </ThemeContext.Consumer>
    )
}
const rootStyle = (theme: ThemePalette): CSSProperties => ({
    background: theme.background.primary,
    color: theme.foreground.primary,
    border: `solid 0.1em ${theme.background.secondary}`,
    borderRadius: '100em',
    padding: '0.5em 0.8em',
    fontWeight: 'bold',
    boxShadow: `0 0 15px -3px ${theme.foreground.darkened}`,
    cursor: 'pointer',
    outline: 'inherit',
})