import * as React from 'react';
import { render } from 'react-dom';

function RootComponent(props: {}) {
    return <div>Hello world</div>
}

render((
    <RootComponent></RootComponent>
), document.body);
