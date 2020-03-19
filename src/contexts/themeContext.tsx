import React from "react";

interface Themes {
    light: ThemePalette
    dark: ThemePalette
}

export interface ThemePalette {
    foreground: {
        primary: string,
        secondary: string,
        darkened: string
    },
    background: {
        primary: string,
        secondary: string,
    }
}

//Våra färgpaletter för de olika teman
const themes: Themes = {
    light: {
        foreground: {
            primary: '#0A0A0A',
            secondary: '#1F1F1F',
            darkened: '#000000'
        },
        background: {
            primary: '#EEEEEE',
            secondary: '#EAEAEA',
        },
    },
    dark: {
        foreground: {
            primary: '#EEEEEE',
            secondary: '#EAEAEA',
            darkened: '#707070'
        },
        background: {
            primary: '#0A0A0A',
            secondary: '#1F1F1F',
        },
    },
}




export const ThemeContext = React.createContext<State>({
    theme: themes.dark,
    toggleTheme: () => { }
})


interface Props {

}

interface State {
    theme: ThemePalette,
    toggleTheme: () => void
}

export default class ThemeProvider extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            theme: themes.dark,
            toggleTheme: this.toggleTheme
        }
    }

    toggleTheme = () => {
        this.setState({ theme: this.state.theme === themes.light ? themes.dark : themes.light })
    }

    render() {
        return (
            <ThemeContext.Provider value={this.state}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}