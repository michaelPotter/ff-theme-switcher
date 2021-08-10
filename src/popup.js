// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import React, {useEffect, useState} from 'react';
import {render} from "react-dom";
import theme_dark from './theme_dark';
import theme_light from './theme_light';

let browserThemes = {
    light: theme_light,
    dark: theme_dark,
};


function setTheme(theme) {
    browser.theme.update(browserThemes[theme]);
    setDDGTheme(theme);
    window.close();
}

let light = () => setTheme("light")
let dark = () => setTheme("dark")

function setDDGTheme(theme) {
    if (theme == "dark") {
        browser.cookies.set({
            name: "ae",
            value: "d",
            url: "https://duckduckgo.com/",
            sameSite: "lax",
            secure: true,
        });
    } else if (theme == "light") {
        browser.cookies.remove({
            name: "ae",
            url: "https://duckduckgo.com/",
        });
    }
}

function MainContent(props) {

    // // CODE TO PRINT CURRENT THEME
    // useEffect(async () => {
    //     let t = await browser.theme.getCurrent()
    //     console.log(JSON.stringify(t, null, 2))
    //     setTheme(t);
    // }, []);

    return (
        <>
            <button onClick={light}>light</button>
            <button onClick={dark}>dark</button>
        </>
    )
}

let content = (<MainContent/>);

render(content, document.getElementById('main'));
