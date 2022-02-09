import React, {
  FC, memo, useCallback, useMemo,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Icon } from 'semantic-ui-react';
import { MAX_DRIVER_PER_PAGE } from '../constants';
import { AppState } from '../redux';
import { setPreviewAndPage } from '../redux/actions/driverManagement';
import styles from '../styles/PaginationBtn.module.scss';

const PaginationBtn: FC = () => {
  const { currentPage, data } = useSelector((state: AppState) => state.driverManagement);
  const dispatch = useDispatch();

  const prevPageDisabled = useMemo<boolean>(() => currentPage <= 0, [currentPage]);
  const nextPageDisabled = useMemo<boolean>(() => {
    const lastPage = (data.length / MAX_DRIVER_PER_PAGE) - 1;
    return currentPage >= lastPage;
  }, [data, currentPage]);

  const movingPage = useCallback((e, isNext: boolean) => {
    e.stopPropagation();
    let offset;
    let currPage;

    if (!isNext) {
      offset = (currentPage - 1) * MAX_DRIVER_PER_PAGE;
      currPage = currentPage - 1;
    } else {
      offset = (currentPage + 1) * MAX_DRIVER_PER_PAGE;
      currPage = currentPage + 1;
    }

    const newPreviewDriver = data.slice(offset, offset + MAX_DRIVER_PER_PAGE);
    dispatch(setPreviewAndPage({
      currentPage: currPage,
      previewDriver: newPreviewDriver,
    }));
  }, [currentPage, data]);

  return (
    <div className={styles['pagination-btn']}>
      <Button
        icon
        labelPosition="left"
        className={styles['pagination-btn-page']}
        disabled={prevPageDisabled}
        onClick={(e) => movingPage(e, false)}
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
      >
        <Icon name="chevron right" className={styles['pagination-btn-page-icon']} />
        Next Page
      </Button>
    </div>
  );
};

export default memo(PaginationBtn);
