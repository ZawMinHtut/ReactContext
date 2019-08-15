import React, { Component } from 'react';
import { ThemeContext } from '../themecontext';

export default class Navbar extends Component {
    static contextType = ThemeContext;
    render(){
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return(
            <nav style={{background: theme.ui, color: theme.syntax}}>
                <div style={{background: theme.bg}}>
                    <h1>Game List</h1>
                    <ul>
                        <li>Menu1</li>
                        <li>Menu2</li>
                        <li>Menu3</li>
                    </ul>
                </div>
            </nav>
        );
    }
}