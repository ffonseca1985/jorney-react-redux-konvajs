import { STATE_LOGIN, STATE_SIGNUP } from 'components/AuthForm';
import GAListener from 'components/GAListener';
import { EmptyLayout, LayoutRoute, MainLayout } from 'components/Layout';
// pages
import DashboardPage from './pages/bi/DashboardPage'
import JorneyPage from './pages/jorney/JorneyPage'

import NewRole from './pages/administrator/role/newRole'
import NewUser from './pages/administrator/user/newUser'
import Roles from './pages/administrator/role/roles'
import Users from './pages/administrator/user/users'
import NewProfile from './pages/administrator/user/newProfile'

import HelpPage from './pages/help/helpPage'

import {default as VersionControl} from './pages/versionControl/list'
import React from 'react';
import StartPage from './pages/startPage/StartPage'
import AuthPage from './pages/login/AuthPage';
import NewBranch from './pages/versionControl/graph/newBranch' 

import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import './styles/reduction.css';
import { Provider} from 'react-redux'
import store from './jorney/store/index'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo, faTools, faToolbox, faSave } from '@fortawesome/free-solid-svg-icons'

import "gitgraph.js";
import "gitgraph.js/build/gitgraph.css";


library.add(faIgloo, faTools, faToolbox, faSave)

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter basename={getBasename()}>
        <GAListener>
          <Switch> 
            
            <LayoutRoute exact path='/jorney/new' layout={MainLayout} component={JorneyPage}/>
            
            <LayoutRoute exact path='/user/new' layout={MainLayout} component={NewUser}/>
            <LayoutRoute exact path='/user/profile/new' layout={MainLayout} component={NewProfile}/>
            <LayoutRoute exact path='/users' layout={MainLayout} component={Users}/>
            <LayoutRoute exact path='/roles' layout={MainLayout} component={Roles}/>
            <LayoutRoute exact path='/roles/new' layout={MainLayout} component={NewRole}/>

            <LayoutRoute exact path='/versioncontrol' layout={MainLayout} component={VersionControl} />
            <LayoutRoute exact path='/versioncontrol/newBranch' layout={MainLayout} component={NewBranch} />

            <LayoutRoute exact path='/help' layout={MainLayout} component={HelpPage} />
           
            <LayoutRoute exact path="/startPage" layout={MainLayout} component={StartPage} />
            <LayoutRoute exact path="/dashboards" layout={MainLayout} component={DashboardPage} />
            <LayoutRoute exact path="/" layout={EmptyLayout} component={props => ( <AuthPage {...props} authState={STATE_LOGIN} />)}/>
           
            <Redirect to="/" />

          </Switch>
        </GAListener>
      </BrowserRouter>
      </Provider>         
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
