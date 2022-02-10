import React, { FC } from 'react';
import { Header, Icon } from 'semantic-ui-react';
import styles from '../styles/NotFound.module.scss';

const NotFound: FC = () => (
  <div className={styles['not-found']}>
    <Header as="h1" icon textAlign="center" className={styles['not-found-header']}>
      <Icon name="warning sign" />
      <Header.Content>Not Found</Header.Content>
      <Header.Subheader>
        Your page is not found, Please try another url
      </Header.Subheader>
    </Header>
  </div>
);

export default NotFound;
