import {
  Flex,
  Group,
  Autocomplete,
  Text,
  AutocompleteItem,
  Loader,
} from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons';
import { FC, forwardRef, useEffect, useState } from 'react';
import { ISearchResponse } from 'shared/models/ISearch';
import { useLazySearchQuery } from '../../shared/store/search.service';

interface IProps {
  setItemSubmit: (item: ISearchResponse | null) => void;
}

const LocationSearch: FC<IProps> = ({ setItemSubmit }) => {
  const [value, setValue] = useState<string>('');
  const [debounce] = useDebouncedValue(value, 300);
  const [call, { data, isLoading }] = useLazySearchQuery();

  useEffect(() => {
    if (!debounce) {
      setItemSubmit(null);
      return;
    }

    call(debounce);
  }, [debounce]);

  const createLatAndLongString = (item: Partial<ISearchResponse>) =>
    `lat=${item.lat}&lon=${item.lon}`;

  const Item = forwardRef<HTMLDivElement, ISearchResponse>(
    ({ country, name, ...others }: ISearchResponse, ref) => (
      <div ref={ref} {...others} key={createLatAndLongString(others)}>
        <Group noWrap>
          <Text size='sm'>{name}</Text>
          <Text size='xs' opacity={0.65}>
            {country}
          </Text>
        </Group>
      </div>
    )
  );

  const dataHelper =
    data?.map((item) => ({
      ...item,
      value: item.name,
    })) || [];

  const Icon = isLoading ? <Loader size={16} /> : <IconSearch size={16} />;

  return (
    <Flex align='flex-start' w='100%'>
      <Autocomplete
        w={400}
        maw={400}
        value={value}
        icon={Icon}
        itemComponent={Item}
        data={dataHelper}
        variant='unstyled'
        placeholder='Search a location'
        nothingFound={debounce && 'Location not found'}
        transition='pop-top-left'
        transitionDuration={80}
        transitionTimingFunction='ease'
        onChange={(event) => setValue(event)}
        onItemSubmit={(item) => {
          const submitted = item as unknown as ISearchResponse;

          setItemSubmit(submitted);
        }}
      />
    </Flex>
  );
};

export default LocationSearch;
