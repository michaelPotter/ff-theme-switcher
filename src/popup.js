// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import React, {useEffect, useState} from 'react';
import {render} from "react-dom";
import theme_dark from './theme_dark';
import theme_light from './theme_light';

function light() { browser.theme.update(theme_light) }
function dark() { browser.theme.update(theme_dark) }

function MainContent(props) {

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
