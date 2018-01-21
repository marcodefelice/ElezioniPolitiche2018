import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';

import App from 'containers/App';

/**
 * Require main styles
 */
import 'styles/index.scss';

/**
 * Render App component
 */
const renderComponent = () => {
    return (
        <Router>
            <App />
        </Router>
    );
};

render(renderComponent(), document.getElementById('app'));
