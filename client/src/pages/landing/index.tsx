import * as React from 'react';
import Login from '../login';

const Landing = (): JSX.Element => {
    return (
        <div>
            <Login />
            {'Hello React Hot Loader!@'}
        </div>
    );
};

export default Landing;