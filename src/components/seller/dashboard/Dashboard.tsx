import React from 'react';

const DashboardLazy = React.lazy(async () => {
  return await import('../../../components/Dashboard');
});

export default DashboardLazy;
