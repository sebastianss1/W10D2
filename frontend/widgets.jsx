import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../frontend/root.jsx'


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    // console.log(root);

    ReactDOM.render(<Root />, root);
});