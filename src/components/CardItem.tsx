import React, { FC, useCallback } from 'react';
import { Card, Icon } from 'semantic-ui-react';
import { useMediaQuery } from 'react-responsive';
import styles from '../styles/CardWrapper.module.scss';
import { SCREEN_BREAKPOINT } from '../type';

const CardItem: FC = () => {
  const isMobile = useMediaQuery({ query: `(max-width: ${SCREEN_BREAKPOINT.MOBILE}px)` });

  const renderUserIcon = useCallback(() => {
    if (isMobile) {
      return <Icon name="user circle" size="massive" className={styles['card-wrapper-user-icon']} />;
    }
    return <Icon name="user circle" size="huge" className={styles['card-wrapper-user-icon']} />;
  }, [isMobile]);

  return (
    <Card className={styles['card-wrapper']}>
      <div className={styles['card-wrapper-header']}>
        <p>
          <span className={styles['card-wrapper-header-text']}>Driver Id&nbsp;</span>
          <span className={styles['card-wrapper-header-id']}>123123</span>
        </p>
        <Icon name="ellipsis horizontal" className={styles['card-wrapper-header-icon']} />
      </div>
      <Card.Content>
        {renderUserIcon()}
      </Card.Content>
    </Card>
  );
};

export default CardItem;
