import React, { FC } from 'react';
import {
  Segment, Header, Input, Button, Icon,
} from 'semantic-ui-react';
import styles from '../styles/HeaderSegment.module.scss';

interface IHeaderSegmentProps {
  title: string;
  subtitle: string;
  useSearchBox: boolean;
  searchPlaceholder?: string;
  addBtnText?: string;
}

const HeaderSegment: FC<IHeaderSegmentProps> = ({
  title,
  subtitle,
  useSearchBox,
  searchPlaceholder,
  addBtnText,
}) => (
  <Segment className={styles['header-segment']}>
    <div>
      <Header as="h1">
        <Header.Content>
          <span className={styles['header-segment-title']}>{title}</span>
          <Header.Subheader>{subtitle}</Header.Subheader>
        </Header.Content>
      </Header>
    </div>

    {useSearchBox
        && (
        <div>
          <Input
            className={styles['header-segment-search-input']}
            icon="search"
            iconPosition="left"
            placeholder={searchPlaceholder}
          />
          <Button className={styles['header-segment-add-btn']}>
            {addBtnText}
            &nbsp;&nbsp;
            <Icon name="plus" />
          </Button>
        </div>
        )}

  </Segment>
);

HeaderSegment.defaultProps = {
  searchPlaceholder: '',
  addBtnText: '',
};

export default HeaderSegment;
