import * as React from 'react';
import { ChangeEvent } from 'react';
import { user } from '../../services';

const initialState = {
    username: '',
    password: '',
};

type State = Readonly<typeof initialState>;

export default class Login extends React.Component<object, State> {
    readonly state: State = initialState;

    private onInputChange = (e: ChangeEvent<HTMLInputElement>, name: keyof State): void => {
        this.setState({
            [name]: e.target.value
        } as any); // https://github.com/Microsoft/TypeScript/issues/5579
    };

    private login = (): void => {
        const { username, password } = this.state;
        user.login(username, password);
    };

    render(): JSX.Element {
        const { username, password } = this.state;

        return (
            <div>
                <div>
                    <input
                        type="textbox"
                        placeholder="Username"
                        id="username"
                        onChange={(e) => this.onInputChange(e, 'username')}
                        value={username}
                    />
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => this.onInputChange(e, 'password')}
                        placeholder="Password"
                        value={password}
                    />
                </div>
                <div>
                    <button onClick={this.login}>Submit</button>
                </div>
            </div>
        );
    }
}