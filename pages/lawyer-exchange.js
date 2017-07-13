import Layout from '../components/layout';
import {H1, H2, H3, Para, Image } from '../constants/layout';
import { Flex, Box } from 'grid-styled';

const Bottom = Box.extend`
  align-self: flex-end;
`

export default () => (
  <Layout title='About us'>
    <Image />
    <Flex wrap pt={2}>
      <Box w={[1,1/2]} order={2}>
        <Para>Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur.</Para>
      </Box>
      <Bottom w={[1,1/2]} order={1} pl={[0,2]}>
        <H1>Lawyer Exchange</H1>
        <H2>Marketing + Development</H2>
        <H2>User Research</H2>
        <H2>Design System</H2>
      </Bottom>

    </Flex>
  </Layout>
)
