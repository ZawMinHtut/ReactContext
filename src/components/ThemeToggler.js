import React, { Component } from 'react';
import { ThemeContext } from '../themecontext';

export default class ThemeToggler extends Component {
    render(){
        return(
            <ThemeContext.Consumer>{
                (context) => {
                    return (
                        <button onClick={context.ThemeToggler}>Toggle Theme</button>
                    );
                }
            }</ThemeContext.Consumer>
        );
    }
}