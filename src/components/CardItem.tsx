import React, { FC, useCallback, memo } from 'react';
import { Card, Icon, SemanticICONS } from 'semantic-ui-react';
import { useMediaQuery } from 'react-responsive';
import { ICardDataField, SCREEN_BREAKPOINT } from '../type';
import styles from '../styles/CardItem.module.scss';

interface ICardItemProps {
  userId: number | string | null;
  headerText: string;
  icon: SemanticICONS;
  CardDataField: ICardDataField[];
}
// the card could be reusable for other component with the same purpose
const CardItem: FC<ICardItemProps> = ({
  userId,
  headerText,
  icon,
  CardDataField,
}) => {
  const isMobile = useMediaQuery({ query: `(max-width: ${SCREEN_BREAKPOINT.MOBILE}px)` });

  const renderUserIcon = useCallback(() => {
    if (isMobile) {
      return <Icon name={icon} size="massive" className={styles['card-wrapper-user-icon']} />;
    }
    return <Icon name={icon} size="huge" className={styles['card-wrapper-user-icon']} />;
  }, [isMobile]);

  const renderCardData = useCallback(() => CardDataField.map((field, index) => (
    <div className={styles['card-wrapper-content']} key={`${field.value}-${index}`}>
      <p className={styles['card-wrapper-label-info']}>{field.label}</p>
      <h5 className={styles['card-wrapper-data']}>{field.value}</h5>
    </div>
  )), [CardDataField]);

  return (
    <Card className={styles['card-wrapper']}>
      <div className={styles['card-wrapper-header']}>
        <p>
          <span className={styles['card-wrapper-header-text']}>
            {headerText}
            &nbsp;&nbsp;
          </span>
          <span className={styles['card-wrapper-header-id']}>{userId}</span>
        </p>
        <Icon name="ellipsis horizontal" className={styles['card-wrapper-header-icon']} />
      </div>
      <Card.Content className={styles['card-wrapper-container']}>
        <div>
          {renderUserIcon()}
        </div>
        <div>
          {renderCardData()}
        </div>
      </Card.Content>
    </Card>
  );
};

export default memo(CardItem);
