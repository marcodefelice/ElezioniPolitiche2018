import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/style.scss';

export default class Wrapper extends Component {
    render() {
        return (
            <div>
                <div className="title">Elezioni Politiche</div>
                <div className="cassa">4 Marzo 2018</div>
            </div>
        );
    }
}

render(<Wrapper />, document.getElementById('app'));
