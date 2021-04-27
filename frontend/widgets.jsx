import React from 'react';
import ReactDOM from 'react-dom';
import Clock from '../frontend/clock.jsx'
import Tabs from '../frontend/tabs.jsx'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    console.log(root);

    ReactDOM.render( <Clock />, <Tabs />, root)
});