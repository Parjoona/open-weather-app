import { FC } from 'react';
import DashboardItems from './DashboardItems';
import LocationSearch from './LocationSearch';

const Dashboard: FC = () => {
  return (
    <div>
      <LocationSearch />
      <DashboardItems />
    </div>
  );
};

export default Dashboard;
