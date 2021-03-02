import React from 'react';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';

import { Button } from '@material-ui/core';
// importing components
import { Head } from '@components/core';

// importing libraries
import fetchSampledata from '@lib/fetchSampleData';

const Root = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Home: React.FC = () => {
  // set data as a state with type Data(which is declaired in global.d.ts).
  const [data, setData] = React.useState<Data>({ hello: '' });
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleFetch = async () => {
    try {
      setLoading(true);
      const data = await fetchSampledata();

      setData(data as Data);
    } catch (err) {
      // error handling
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>My Home Page</title>
      </Head>
      <Root>
        <Box component="span" clone>
          <Button variant="contained" color="primary">
            test
          </Button>
        </Box>
      </Root>
    </>
  );
};

export default Home;
