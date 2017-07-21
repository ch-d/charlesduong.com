import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';

// Layout Components
import Layout from '../components/layout';
import Textbox from '../components/textbox';
import Image from '../components/image';
import Imagegrid from '../components/imagegrid';

// Layout constants
import baseStyles from '../constants/baseStyles';
import colors from '../constants/colors';
import {H1, H2, Para } from '../constants/typography';

export default () => (
  <Layout title='Ballot Ready' disp3="none">
    <Textbox>
      <Para>Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur.</Para>
    </Textbox>
      <Image img = "../static/ballot-ready/hero.jpg"/>

    <Textbox>
      <H2>BallotReady</H2>
      <Para>Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur.</Para>
    </Textbox>

    <Imagegrid img1 = "../static/ballot-ready/001.png" cap1="Facebook Ad" img2="../static/ballot-ready/002.gif" cap2="Twitter Graphic"/>

    <Imagegrid img1 = "../static/ballot-ready/008.png" cap1="Election Week Facebook Ad (1 of 2)" img2="../static/ballot-ready/009.png" cap2="Election Week Facebook Ad (2 of 2)"/>

    <Textbox>
      <Para>Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur.</Para>
    </Textbox>
    <Image img = "../static/ballot-ready/006.png" cap="Newsletter Graphic"/>
    <Imagegrid img1 = "../static/ballot-ready/005.png" cap1="Blog Post Graphic" img2="../static/ballot-ready/004.png" cap2="Blog Post Pie Chart"/>
    <Image img = "../static/ballot-ready/003.png" cap="Blog Post Bar Graph"/>

  </Layout>
)
