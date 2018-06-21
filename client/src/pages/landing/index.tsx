import * as React from 'react';
import Login from '../login';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

const Landing = (): JSX.Element => {
    return (
        <div onClick={() => console.warn('why you no accept')}>
            <BrowserRouter>
                <Route path="/" component={Login} />
                {/* <Route path="/memberEdit/:id" component={MemberPageContainer} /> */}
            </BrowserRouter>
        </div >
    );
};

export default Landing;