import logo200Image from 'assets/img/logo/logo_200.png';
import sidebarBgImage from 'assets/img/sidebar/sidebar-4.jpg';
import SourceLink from 'components/SourceLink';
import React from 'react';
import { connect } from 'react-redux'
import {
  Badge
} from 'reactstrap';
import FaGithub from 'react-icons/lib/fa/github';

/**
 * Actions Jorney Framework
 */

import { getActionByName } from  '../../jorney/managers/components'

import {
  MdAccountCircle,
  MdArrowDropDownCircle,
  MdBorderAll,
  MdBrush,
  MdChromeReaderMode,
  MdDashboard,
  MdExtension,
  MdGroupWork,
  MdInsertChart,
  MdKeyboardArrowDown,
  MdNotificationsActive,
  MdPages,
  MdRadioButtonChecked,
  MdSend,
  MdStar,
  MdTextFields,
  MdViewCarousel,
  MdViewDay,
  MdViewList,
  MdWeb,
  MdWidgets,
} from 'react-icons/lib/md';
import { NavLink } from 'react-router-dom';
import {
  // UncontrolledTooltip,
  Collapse,
  Nav,
  Navbar,
  NavItem,
  NavLink as BSNavLink,
} from 'reactstrap';
import bn from 'utils/bemnames';

const sidebarBackground = {
  backgroundImage: `url("${sidebarBgImage}")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const navComponents = [
  { to: '/buttons', name: 'buttons', exact: false, Icon: MdRadioButtonChecked },
  {
    to: '/button-groups',
    name: 'button groups',
    exact: false,
    Icon: MdGroupWork,
  },
  { to: '/forms', name: 'forms', exact: false, Icon: MdChromeReaderMode },
  { to: '/input-groups', name: 'input groups', exact: false, Icon: MdViewList },
  {
    to: '/dropdowns',
    name: 'dropdowns',
    exact: false,
    Icon: MdArrowDropDownCircle,
  },
  { to: '/badges', name: 'badges', exact: false, Icon: MdStar },
  { to: '/alerts', name: 'alerts', exact: false, Icon: MdNotificationsActive },
  { to: '/progress', name: 'progress', exact: false, Icon: MdBrush },
  { to: '/modals', name: 'modals', exact: false, Icon: MdViewDay },
];

const navContents = [
  { to: '/jorney/new', name: 'New', exact: false, Icon: MdTextFields },
  { to: '/save', name: 'Save', exact: false, Icon: MdTextFields },
  { to: '/export', name: 'Export', exact: false, Icon: MdTextFields },
  { to: '/import', name: 'Import', exact: false, Icon: MdTextFields },

];

const components = [
  { name: 'Init', exact: false, Icon: MdAccountCircle },
  // { name: 'Context', exact: false, Icon: MdAccountCircle },
  { name: 'Menu', exact: false, Icon: MdAccountCircle },
  // { name: 'Digitizer', exact: false, Icon: MdAccountCircle },
  // { name: 'Switch', exact: false, Icon: MdAccountCircle },
  // { name: 'On/Of', exact: false, Icon: MdAccountCircle },
  // { name: 'Representative', exact: false, Icon: MdAccountCircle },
  // { name: 'Bye', exact: false, Icon: MdAccountCircle },
  // { name: 'Representative or Bye', exact: false, Icon: MdAccountCircle },
  // { name: 'Validators', exact: false, Icon: MdAccountCircle },
  // { name: 'Prompt', exact: false, Icon: MdAccountCircle },
  { name: 'End', exact: false, Icon: MdAccountCircle }
];

const navItems = [
  { to: '/dashboards', name: 'Dashboards', exact: false, Icon: MdWeb },
  { to: '/startPage', name: 'Start Page', exact: false, Icon: MdWeb },
  { to: '/help', name: 'Help', exact: false, Icon: MdWeb },
  { to: '/login', name: 'Logout', exact: false, Icon: MdWeb }
];

const administrative = [
  { to: '/users', name: 'Users', exact: false, Icon: MdWeb },
  { to: '/user/new', name: 'New User', exact: false, Icon: MdWeb },
  { to: '/user/profile/new', name: 'new Profile', exact: false, Icon: MdWeb },
  { to: '/roles', name: 'Roles', exact: false, Icon: MdWeb },
  { to: '/roles/new', name: 'New Roles', exact: false, Icon: MdWeb },
];

const navVersionControl = [
  { to: '/versioncontrol', name: 'Listing',  exact: false },
  {to: '/versioncontrol/newBranch', name: 'New Branch',  exact: false}
]

const bem = bn.create('sidebar');

class Sidebar extends React.Component {

  constructor(props) {
    super(props)
  }

  state = {
    isOpenComponents: false,
    isOpenContents: false,
    isOpenPages: false,
    isOpenAdministrative: false
  };

  handleClick = name => () => {
    this.setState(prevState => {
      const isOpen = prevState[`isOpen${name}`];

      return {
        [`isOpen${name}`]: !isOpen,
      };
    });
  };

  render() {

    const { openModal } = this.props

    return (
      <aside className={bem.b()} data-image={sidebarBgImage}>
        {/* <div className={bem.e('background')} style={sidebarBackground} /> */}
        <div className={bem.e('content')}>
          <Navbar>
            <NavItem className="navbar-brand d-flex">
              <img
                src={logo200Image}
                width="40"
                height="30"
                className="pr-2"
                alt=""
              />
              <div className="text-white">
                Journey Design
              </div>
            </NavItem>
          </Navbar>
          <Nav vertical>
            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Contents')}>
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                 <MdPages className={bem.e('nav-item-icon')} />
                  <span className="">File</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenContents
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenContents}>
              {navContents.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}>
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>

            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Components')}>
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdPages className={bem.e('nav-item-icon')} />
                  <span className="">ToolBar</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenComponents
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenComponents}>
              {components.map(({ name, exact, Icon }, index) => (
                <NavItem key={index}
                  draggable="true"
                  onDragStart={() => openModal(name)}
                  className={bem.e('nav-item')}
                  style={{ cursor: 'pointer', paddingLeft: '10%' }}>
                  <Icon className={bem.e('nav-item-icon')} />
                  <span draggable="true">{name}</span>
                  <Badge style={{float: 'right' }} color="warning" className="mr-1">
                    New
                  </Badge>
                </NavItem>
              ))}
            </Collapse>

            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('VersionControl')}>
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdPages className={bem.e('nav-item-icon')} />
                  <span className="">Version Control</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenVersionControl
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenVersionControl}>
              {navVersionControl.map(({ name, exact, to, Icon }, index) => (
                <NavItem key={index}>
                    <BSNavLink
                      id={`navItem-${name}-${index}`}
                      tag={NavLink}
                      to={to}
                      activeClassName="active"
                      exact={exact}>
                      <span>
                        {name}
                      </span>
                    </BSNavLink>
                </NavItem> 
              ))}
            </Collapse>

            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Administrative')}>
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdPages className={bem.e('nav-item-icon')} />
                  <span className="">Administrative</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenAdministrative
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenAdministrative}>
              {administrative.map(({ name, exact, to, Icon }, index) => (
                <NavItem key={index}>
                    <BSNavLink
                      id={`navItem-${name}-${index}`}
                      tag={NavLink}
                      to={to}
                      activeClassName="active"
                      exact={exact}>
                      <span>
                        {name}
                      </span>
                    </BSNavLink>
                </NavItem> 
              ))}
            </Collapse>      

           
            {navItems.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}>
                  <Icon className={bem.e('nav-item-icon')} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))}
          </Nav>
        </div>
      </aside>
    );
  }
}

var mapDispatchToAction = function (dispatch, state) {

  return {
    openModal: (name) => {
      if (state != {} && state != null){

        let action = getActionByName(name)
        dispatch(action())
      }
    }
  }
}

export default connect(null, mapDispatchToAction)(Sidebar);
