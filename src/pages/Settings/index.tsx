import { Grid, Card, Radio } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { FC } from 'react';

const Settings: FC = () => {
  const [value, setValue] = useLocalStorage({
    key: 'celsius-or-farenheit',
    defaultValue: 'celsius',
  });

  return (
    <Grid columns={1}>
      <Grid.Col span={1} p='md'>
        <Card>
          <Radio.Group
            label='C or F'
            value={value}
            description='Chooses if you want to swap between farenheit and celsius'
            offset='xl'
            onChange={setValue}
          >
            <Radio value='celsius' label='Celsius' />
            <Radio value='farenheit' label='Farenheit' />
          </Radio.Group>
        </Card>
      </Grid.Col>
    </Grid>
  );
};

export default Settings;
