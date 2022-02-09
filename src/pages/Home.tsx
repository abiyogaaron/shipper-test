import React, { FC, memo } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import HeaderSegment from '../components/HeaderSegment';

const Home: FC = () => (
  <Container>
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <HeaderSegment
            title="Beranda"
            subtitle="Data dashboard utama"
            useSearchBox={false}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

export default memo(Home);
