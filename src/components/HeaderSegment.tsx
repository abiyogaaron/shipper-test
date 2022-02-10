import React, { FC, memo, useCallback } from 'react';
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
  setSearchData?(value: string): void;
}
// header segment could be reusable if some page dont want the search box, just toggle the boolean
const HeaderSegment: FC<IHeaderSegmentProps> = ({
  title,
  subtitle,
  useSearchBox,
  searchPlaceholder,
  addBtnText,
  setSearchData,
}) => {
  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (setSearchData) {
      setTimeout(() => {
        setSearchData(value);
      }, 1000); // 1s;
    }
  }, []);

  return (
    <Segment className={styles['header-segment']}>
      <div>
        <Header as="h1">
          <Header.Content>
            <span className={styles['header-segment-title']}>{title}</span>
            <Header.Subheader>{subtitle}</Header.Subheader>
          </Header.Content>
        </Header>
      </div>

      {/* if this component is using searchbox (true) */}
      {useSearchBox
          && (
          <div>
            <Input
              className={styles['header-segment-search-input']}
              icon="search"
              iconPosition="left"
              placeholder={searchPlaceholder}
              onChange={(e) => handleSearchChange(e)}
              name="search-input"
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
};

// every optional props need to be set the default value
HeaderSegment.defaultProps = {
  searchPlaceholder: '',
  addBtnText: '',
  setSearchData: () => {},
};

export default memo(HeaderSegment);
