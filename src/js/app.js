import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/style.css';

export default class Wrapper extends Component {
    render() {
        return (
            <div>
                <div>Elezioni Politiche</div>
                <div>4 Marzo 2018</div>
            </div>
        );
    }
}

render(<Wrapper />, document.getElementById('app'));
