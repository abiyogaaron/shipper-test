import React, {
  FC, lazy, Suspense, useCallback, useMemo, useState,
} from 'react';
import {
  Route, Switch, Link, useLocation,
} from 'react-router-dom';
import {
  Sidebar, Menu, Icon, Grid, Container,
} from 'semantic-ui-react';
import { useMediaQuery } from 'react-responsive';
import { ToastContainer } from 'react-toastify';

import PageLoader from './components/PageLoader';
import MobileSidebar from './components/MobileSidebar';
import Navbar from './components/Navbar';

import { MENU_LIST } from './constants';
import { SCREEN_BREAKPOINT } from './type';

import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import NotFound from './pages/NotFound';
// lazy load component
const DriverManagement = lazy(() => import('./pages/DriverManagement'));
const Home = lazy(() => import('./pages/Home'));
const Pickup = lazy(() => import('./pages/Pickup'));

const App: FC = () => {
  const [isSidebarShow, setIsSidebarShow] = useState<boolean>(false);
  const { pathname } = useLocation();
  const isMobile = useMediaQuery({ query: `(max-width: ${SCREEN_BREAKPOINT.MOBILE}px)` });

  const routes = useMemo(() => (
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <Home />
        )}
      />
      <Route
        exact
        path="/driver-management"
        render={() => (
          <DriverManagement />
        )}
      />
      <Route
        exact
        path="/pickup"
        render={() => (
          <Pickup />
        )}
      />
      <Route component={NotFound} />
    </Switch>
  ), []);

  const handleToggle = useCallback(() => {
    setIsSidebarShow(!isSidebarShow);
  }, [isSidebarShow]);

  const closeSidebar = useCallback(() => {
    if (!isSidebarShow) {
      return;
    }
    setIsSidebarShow(!isSidebarShow);
  }, [isSidebarShow]);

  const renderMenu = useCallback(() => MENU_LIST.map((menu, index) => {
    const isActive = menu.to === pathname;

    return (
      <Menu.Item
        as={Link}
        to={menu.to}
        key={`menu-${menu.title}-${index}`}
        className={`menu-item ${isActive ? 'menu-item-active' : ''}`}
      >
        <Icon name={menu.icon} className="menu-item-icon" />
        {menu.title}
      </Menu.Item>
    );
  }), [pathname]);

  const renderContent = useCallback(() => {
    if (isMobile) {
      return (
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column width={16} className="content-mobile-wrapper">
                <Suspense fallback={<PageLoader />}>
                  {routes}
                </Suspense>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      );
    }
    return (
      <Container fluid>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column width={3} className="sidebar-desktop-wrapper">
              <Menu vertical fluid className="navbar-wrapper">
                {renderMenu()}
              </Menu>
            </Grid.Column>
            <Grid.Column width={13} className="content-desktop-wrapper">
              <Suspense fallback={<PageLoader />}>
                {/* routes here so navbar and sidebar no need to be created or destroyed every change page */}
                {routes}
              </Suspense>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }, [isMobile, renderMenu]);

  return (
    <Sidebar.Pushable>
      {isMobile
        && (
        <MobileSidebar
          isVisible={isSidebarShow}
          renderMenuItem={renderMenu}
        />
        )}

      <Sidebar.Pusher
        dimmed={isSidebarShow}
        onClick={closeSidebar}
      >
        <Navbar handleToggle={handleToggle} />

        {renderContent()}
      </Sidebar.Pusher>
      <ToastContainer />
    </Sidebar.Pushable>
  );
};

export default App;
