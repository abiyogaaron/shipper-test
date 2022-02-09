import React, { FC, memo } from 'react';
import { Menu, Icon, Image } from 'semantic-ui-react';
import { useMediaQuery } from 'react-responsive';
import { SCREEN_BREAKPOINT } from '../type';

import logo_shipper from '../logo_shipper.png';

interface INavbarProps {
  handleToggle(): void;
}

const Navbar: FC<INavbarProps> = ({
  handleToggle,
}) => {
  const isMobile = useMediaQuery({ query: `(max-width: ${SCREEN_BREAKPOINT.MOBILE}px)` });

  return (
    <Menu className="navbar-wrapper">
      {
        isMobile
        && (
        <Menu.Item onClick={handleToggle} className="menu-item-burger-icon">
          <Icon name="sidebar" />
        </Menu.Item>
        )
      }

      <Menu.Item className="menu-item">
        <Image src={logo_shipper} as="img" width="128" height="auto" />
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item className="menu-item">
          <p>
            {
              !isMobile
              && (
              <>
                <span>Hello,&nbsp;</span>
                <span className="menu-user-text-shipper">Shipper User</span>
              </>
              )
            }
            <Icon name="user circle" size="big" color="grey" />
          </p>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default memo(Navbar);
