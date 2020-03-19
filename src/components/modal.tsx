import React, { Component, CSSProperties } from 'react';
import ReactDOM from 'react-dom';
import { fullScreen, centeredContent } from '../css';
import { ThemePalette, ThemeContext } from '../contexts/themeContext';

interface Props {
    /** Using a persistent modal may cause it to never close if not handled manually */
    persistent?: boolean;
    shouldClose: () => void;
}

export default class Modal extends Component<Props> {
    
    element: HTMLDivElement 

    constructor(props: Props) {
        super(props);
        this.element = document.createElement('div');
        this.element.id = 'modal-root';
    }

    onclick = () => {
        if (!this.props.persistent) {
            this.props.shouldClose();
        }
    }

    componentDidMount() {
        document.body.appendChild(this.element);
    }

    componentWillUnmount() {
        document.body.removeChild(this.element);
    }

    render() {
        return ReactDOM.createPortal((
            <ThemeContext.Consumer>
                {({ theme }) => (
                    <div style={{ ...rootStyle(theme), ...centeredContent }} onClick={this.onclick}>
                        {this.props.children}
                    </div>
                )}
            </ThemeContext.Consumer>
        ),
        this.element
        )
    };
}

const rootStyle = (theme: ThemePalette): CSSProperties => ({
    background: `${theme.background.primary}CC`,
    color: theme.foreground.primary,
})