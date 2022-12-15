import React, { FC } from 'react';

import { TabContainer } from '../../containers';
import InDevelopment from '../../components/ordinary/InDevelopment';

const Marketplace: FC = () => {
  return (
    <TabContainer>
      <InDevelopment />
    </TabContainer>
  );
};

export default Marketplace;
