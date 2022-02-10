import React, { FC, memo } from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

const PageLoader: FC = () => (
  <Segment className="maximizeHeight">
    <Dimmer active>
      <Loader size="big" content="Loading" role="heading" />
    </Dimmer>
  </Segment>
);

export default memo(PageLoader);
