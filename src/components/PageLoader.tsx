import React, { FC } from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

const PageLoader: FC = () => (
  <Segment className="maximizeHeight">
    <Dimmer active>
      <Loader size="big" content="Loading" />
    </Dimmer>
  </Segment>
);

export default PageLoader;