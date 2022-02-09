import React, {
  FC, useCallback, useEffect, useMemo,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Grid, GridColumn } from 'semantic-ui-react';
import { useMediaQuery } from 'react-responsive';

import CardItem from '../components/CardItem';
import HeaderSegment from '../components/HeaderSegment';
import PageLoader from '../components/PageLoader';
import PaginationBtn from '../components/PaginationBtn';

import { MAX_DRIVER_PER_PAGE } from '../constants';
import { AppState } from '../redux';
import { getDriverData } from '../services/driverManagement';
import { SCREEN_BREAKPOINT, ICardDataField } from '../type';
import { reformatDate } from '../utils';

import styles from '../styles/DriverManagement.module.scss';

const DriverManagement: FC = () => {
  const {
    isLoading, previewDriver, data, currentPage,
  } = useSelector((state: AppState) => state.driverManagement);
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ query: `(max-width: ${SCREEN_BREAKPOINT.MOBILE}px)` });

  const translateDriverStyle = useMemo(() => {
    if (!isMobile) {
      return {
        transform: `translateX(-${currentPage * 100}%)`,
      };
    }
    return null;
  }, [currentPage]);

  useEffect(() => {
    dispatch(getDriverData());
  }, []);

  const renderDriver = useCallback(() => {
    const driverData = isMobile ? previewDriver : data;

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
  }, [previewDriver, isMobile]);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <HeaderSegment
              title="driver management"
              subtitle="Data driver yang bekerja dengan Anda."
              useSearchBox
              searchPlaceholder="Cari Driver"
              addBtnText="tambah driver"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid columns={MAX_DRIVER_PER_PAGE}>
        <Grid.Row className={styles['driver-carousel']} style={translateDriverStyle}>
          {renderDriver()}
        </Grid.Row>
      </Grid>

      <Grid columns={1}>
        <Grid.Row>
          <Grid.Column>
            <PaginationBtn />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default DriverManagement;
