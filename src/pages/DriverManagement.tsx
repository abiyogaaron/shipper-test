import React, {
  FC, memo, useCallback, useEffect,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Grid, GridColumn } from 'semantic-ui-react';
import { useMediaQuery } from 'react-responsive';

import CardItem from '../components/CardItem';
import HeaderSegment from '../components/HeaderSegment';
import PageLoader from '../components/PageLoader';

import { MAX_DRIVER_PER_PAGE } from '../constants';
import { AppState } from '../redux';
import { getDriverData } from '../services/driverManagement';
import { SCREEN_BREAKPOINT } from '../type';

const DriverManagement: FC = () => {
  const { isLoading, previewDriver } = useSelector((state: AppState) => state.driverManagement);
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ query: `(max-width: ${SCREEN_BREAKPOINT.MOBILE}px)` });

  useEffect(() => {
    dispatch(getDriverData());
  }, []);

  const renderDriver = useCallback(() => previewDriver.map((driver) => {
    if (isMobile) {
      return (
        <GridColumn key={driver.login.uuid} mobile={16}>
          <CardItem />
        </GridColumn>
      );
    }
    return (
      <GridColumn key={driver.login.uuid}>
        <CardItem />
      </GridColumn>
    );
  }), [previewDriver]);

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
        <Grid.Row>
          {renderDriver()}
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default memo(DriverManagement);
