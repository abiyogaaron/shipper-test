import React, { FC } from 'react';
import { Sidebar, Menu } from 'semantic-ui-react';

interface IMobileSidebarProps {
  isVisible: boolean;
  renderMenuItem(): JSX.Element[];
}

const MobileSidebar: FC<IMobileSidebarProps> = ({
  isVisible,
  renderMenuItem,
}) => (
  <Sidebar
    as={Menu}
    animation="overlay"
    icon="labeled"
    vertical
    visible={isVisible}
    width="thin"
    className="navbar-wrapper"
  >
    {renderMenuItem()}
  </Sidebar>
);

export default MobileSidebar;
