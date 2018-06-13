import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import React, {Component, Fragment} from 'react';
import {hot} from 'react-hot-loader';
import Loadable from 'react-loadable';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import AppHeader from './components/appheader';
import {Home} from './containers/home';
import {Login} from './containers/login';
import {Settings} from './containers/settings';

import '!file-loader?name=[name].[ext]!../styles/images/ace-builder1.png';
import '!file-loader?name=[name].[ext]!../styles/images/ace-builder2.png';
import '!file-loader?name=[name].[ext]!../styles/images/ace-builder3.png';
import '!file-loader?name=[name].[ext]!../styles/images/node-list1.png';
import '!file-loader?name=[name].[ext]!../styles/images/node-list2.png';
import '!file-loader?name=[name].[ext]!../styles/images/node-list3.png';
import '!file-loader?name=[name].[ext]!../styles/images/file-browser1.png';

import '!file-loader?name=[name].[ext]!../styles/images/file-browser3.png';
import '!file-loader?name=[name].[ext]!../styles/images/file-browser4.png';
import '!file-loader?name=[name].[ext]!../styles/images/dashboard1.png';
import '!file-loader?name=[name].[ext]!../styles/images/volume-edit1.png';
import '!file-loader?name=[name].[ext]!../styles/images/volume-edit2.png';
import '!file-loader?name=[name].[ext]!../styles/images/volume-edit3.png';


import '!file-loader?name=[name].[ext]!../styles/images/baseline-arrow_back_ios-24px.svg';
import '!file-loader?name=[name].[ext]!../styles/images/baseline-arrow_forward_ios-24px.svg';
import {Boards} from "./containers/boards";

const theme = createMuiTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#2196f3',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contast with palette.primary.main
        },
        secondary: {
            light: '#0066ff',
            main: '#0044ff',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#ffcc00',
        },
        // error: will use the default color
    },
});
// const Loading = () => <div>Loading...</div>;
//
// const HomePage = Loadable({
//     loader: () => import('./containers/home'),
//     loading: Loading,
// });
//
// const SettingsPage = Loadable({
//     loader: () => import('./containers/settings'),
//     loading: Loading,
// });
//
// const LoginPage = Loadable({
//     loader: () => import('./containers/login'),
//     loading: Loading,
// });


class App extends Component {
    render() {
        return (
            <Router>
                <MuiThemeProvider theme={theme}>
                  <Fragment>
                      <AppHeader title="App" />
                      <main>
                          <Switch>
                              <Route exact path="/" component={Home} />
                              <Route path="/boards" component={Boards} />
                              <Route path="/settings" component={Settings} />
                              <Route path="/login" component={Login} />
                          </Switch>
                      </main>
                  </Fragment>
                </MuiThemeProvider>
            </Router>

        );
    }
}
export default hot(module)(App);
