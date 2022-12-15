import React, { FC } from 'react';

import { TabContainer } from '../../containers';
import InDevelopment from '../../components/ordinary/InDevelopment';

const Subscription: FC = () => {
  return (
    <TabContainer>
      <InDevelopment />
    </TabContainer>
  );
};

export default Subscription;
