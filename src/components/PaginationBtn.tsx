import React, {
  FC, memo, useCallback, useMemo,
} from 'react';
import { Button, Icon } from 'semantic-ui-react';
import styles from '../styles/PaginationBtn.module.scss';

interface IPaginationProps {
  maxPerPage: number;
  currentPage: number;
  dataLength: number;
  setCurrentPage(page: number): void;
}

// Paginaton component is reusable so it could be reuse in another page component
const PaginationBtn: FC<IPaginationProps> = ({
  maxPerPage,
  dataLength,
  currentPage,
  setCurrentPage,
}) => {
  const prevPageDisabled = useMemo<boolean>(() => currentPage <= 0, [currentPage]);
  const nextPageDisabled = useMemo<boolean>(() => {
    const lastPage = (dataLength / maxPerPage) - 1;
    return currentPage >= lastPage;
  }, [dataLength, currentPage]);

  const movingPage = useCallback((e, isNext: boolean) => {
    e.stopPropagation();
    let currPage;

    if (!isNext) {
      currPage = currentPage - 1;
    } else {
      currPage = currentPage + 1;
    }

    setCurrentPage(currPage);
  }, [currentPage, dataLength]);

  return (
    <div className={styles['pagination-btn']} data-testid="pagination-container">
      <Button
        icon
        labelPosition="left"
        className={styles['pagination-btn-page']}
        disabled={prevPageDisabled}
        onClick={(e) => movingPage(e, false)}
        role="button"
      >
        <Icon name="chevron left" className={styles['pagination-btn-page-icon']} />
        Previous Page
      </Button>
      <Button
        icon
        labelPosition="right"
        className={styles['pagination-btn-page']}
        disabled={nextPageDisabled}
        onClick={(e) => movingPage(e, true)}
        role="button"
      >
        <Icon name="chevron right" className={styles['pagination-btn-page-icon']} />
        Next Page
      </Button>
    </div>
  );
};

export default memo(PaginationBtn); // memo for unecessary re-render same as navbar or sidebar on app.tsx
