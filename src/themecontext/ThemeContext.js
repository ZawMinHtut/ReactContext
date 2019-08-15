import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

export default class ThemeContextProvider extends Component {
    state = {
        isLightTheme: true,
        light: { ui: '#ddd', syntax: '#333', bg: '#eee' },
        dark: { ui: '#333', syntax: '#ddd', bg: '#555' }
    }
    ThemeToggler = () => {
        this.setState(
            {
                isLightTheme: !this.state.isLightTheme
            }
        )
    }
    render(){
        return(
            <ThemeContext.Provider value={{...this.state, ThemeToggler: this.ThemeToggler}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}