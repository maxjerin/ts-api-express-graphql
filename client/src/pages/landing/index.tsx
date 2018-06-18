import * as React from 'react';
import Login from '../login';

const Landing = (): JSX.Element => {
    return (
        <div onClick={() => console.warn('why you no acceptt')}>
            <Login />
            {'Hello React Hot Loader!!'}
        </div>
    );
};

export default Landing;