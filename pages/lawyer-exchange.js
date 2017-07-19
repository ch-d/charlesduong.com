import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';

// Layout Components
import Layout from '../components/layout';
import Textbox from '../components/textbox';
import Image from '../components/image';

// Layout constants
import baseStyles from '../constants/baseStyles';
import colors from '../constants/colors';
import {H1, H2, Para } from '../constants/typography';

export default () => (
  <Layout title='Lawyer Exchange' img_url='../static/lawyer-exchange/hero.png'>
    <Textbox>
      <Para>Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur.</Para>
    </Textbox>
    <Image img = "../static/user-interface.jpg"/>
    <Image img = "../static/marketing.jpg"/>
    <Textbox>
      <H2>Something</H2>
      <Para>Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur.</Para>
    </Textbox>
    <Image img = "../static/user-interface.jpg"/>
    <Image img = "../static/marketing.jpg"/>
  </Layout>
)
