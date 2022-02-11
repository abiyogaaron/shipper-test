import React, {
  FC, useCallback, useEffect, useMemo,
} from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
import { Container, Grid, GridColumn } from 'semantic-ui-react';
import { useMediaQuery } from 'react-responsive';

import CardItem from '../components/CardItem';
import HeaderSegment from '../components/HeaderSegment';
import PageLoader from '../components/PageLoader';
import PaginationBtn from '../components/PaginationBtn';
import NotFoundData from '../components/NotFoundData';

import { MAX_DRIVER_PER_PAGE } from '../constants';
import { AppState } from '../redux';
import { getDriverData } from '../services/driverManagement';
import { setCurrPage, setPreview } from '../redux/actions/driverManagement';
import { SCREEN_BREAKPOINT, ICardDataField, TDriverManagementData } from '../type';
import { filterData, reformatDate } from '../utils';

import styles from '../styles/DriverManagement.module.scss';

const DriverManagement: FC = () => {
  const {
    isLoading, currentPage, data, previewDriver,
  } = useSelector((state: AppState) => state.driverManagement);
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ query: `(max-width: ${SCREEN_BREAKPOINT.MOBILE}px)` });

  const translateDriverStyle = useMemo(() => { // object variable for carousel pagination
    if (!isMobile) {
      return {
        transform: `translateX(-${currentPage * 100}%)`,
      };
    }
    return null;
  }, [currentPage]);
  const driverData = useMemo(() => {
    const offset = currentPage * MAX_DRIVER_PER_PAGE;
    if (isMobile) {
      return previewDriver.slice(offset, offset + MAX_DRIVER_PER_PAGE);
    }
    return previewDriver;
  }, [isMobile, currentPage, previewDriver]);

  useEffect(() => {
    dispatch(getDriverData());
  }, []);

  const getSearchInput = useCallback((value: string) => {
    const filteredDriver = filterData<TDriverManagementData[]>(
      value,
      previewDriver,
      data,
      ['name', 'first'],
    );
    batch(() => {
      // every search set current page to 0
      dispatch(setCurrPage(0));
      // update previewDriver
      dispatch(setPreview(filteredDriver));
    });
  }, [data, previewDriver]);

  const renderDriver = useCallback(() => {
    if (driverData.length === 0) {
      return (
        <NotFoundData
          headerText="Not Found"
          subHeaderText="Please try with another driver first name"
          icon="close"
        />
      );
    }

    return driverData.map((driver) => {
      const driverId = driver.login.uuid.split('-')[0];
      let driverData: ICardDataField[] = [
        { label: 'Nama Driver', value: `${driver.name.first} ${driver.name.last}` },
        { label: 'Telepon', value: driver.phone },
        { label: 'Email', value: driver.email },
        { label: 'Tanggal Lahir', value: reformatDate(driver.dob.date) },
      ];

      if (isMobile) {
        driverData = [
          { label: 'Nama Driver', value: `${driver.name.first} ${driver.name.last}` },
          { label: 'Telepon', value: driver.phone },
        ];
        return (
          <GridColumn key={driver.login.uuid} mobile={16}>
            <CardItem
              userId={driverId}
              headerText="Driver Id"
              icon="user circle"
              CardDataField={driverData}
            />
          </GridColumn>
        );
      }
      return (
        <GridColumn key={driver.login.uuid}>
          <CardItem
            userId={driverId}
            headerText="Driver Id"
            icon="user circle"
            CardDataField={driverData}
          />
        </GridColumn>
      );
    });
  }, [driverData, isMobile]);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <Container data-testid="driver-container">
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <HeaderSegment
              title="driver management"
              subtitle="Data driver yang bekerja dengan Anda."
              useSearchBox
              searchPlaceholder="Cari Driver"
              addBtnText="tambah driver"
              setSearchData={getSearchInput}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid columns={MAX_DRIVER_PER_PAGE}>
        <Grid.Row className={styles['driver-carousel']} style={translateDriverStyle} data-testid="card-inner">
          {renderDriver()}
        </Grid.Row>
      </Grid>

      <Grid columns={1}>
        <Grid.Row>
          <Grid.Column>
            <PaginationBtn
              currentPage={currentPage}
              dataLength={previewDriver.length}
              setCurrentPage={(page) => dispatch(setCurrPage(page))}
              maxPerPage={MAX_DRIVER_PER_PAGE}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default DriverManagement;
