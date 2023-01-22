import { FC, useState } from 'react';
import { ISearchResponse } from 'shared/models/ISearch';
import DashboardItems from './DashboardItems';
import LocationSearch from './LocationSearch';

const Dashboard: FC = () => {
  const [searchedLocation, setSearchedLocation] =
    useState<ISearchResponse | null>(null);

  return (
    <div>
      <LocationSearch setItemSubmit={setSearchedLocation} />
      <DashboardItems searchResult={searchedLocation} />
    </div>
  );
};

export default Dashboard;
