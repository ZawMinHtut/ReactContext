import React, { Component } from 'react';
import { ThemeContext } from '../themecontext';

export default class Content extends Component {
    render(){
        return(
            <ThemeContext.Consumer>{
                (context) => {
                    const { isLightTheme, light, dark } = context;
                    const theme = isLightTheme ? light : dark;
                    return(
                        <div className="content" style={{background: theme.ui, color: theme.syntax}}>
                            <ul>
                                <li style={{background: theme.bg}}>Devil May Cry</li>
                                <li style={{background: theme.bg}}>Resident Evil</li>
                                <li style={{background: theme.bg}}>The Old Blood</li>
                            </ul>
                        </div>
                    );
                }
            }</ThemeContext.Consumer>
        );
    }
}
