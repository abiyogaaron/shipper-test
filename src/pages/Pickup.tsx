import React, { FC, memo } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import HeaderSegment from '../components/HeaderSegment';

const Pickup: FC = () => (
  <Container>
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <HeaderSegment
            title="Pickup"
            subtitle="Data jadwal jemput dan kirim paket anda"
            useSearchBox={false}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

export default memo(Pickup);
