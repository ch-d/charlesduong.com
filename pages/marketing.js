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
  <Layout title='Marketing Design' img_url='../static/lawyer-exchange/hero.png' disp3="none">
    <Textbox>
      <Para>Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur.</Para>
      <H2>BallotReady</H2>
      <Para>Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur.</Para>
    </Textbox>

    <Imagegrid img1 = "../static/marketing/dont-guess.png" img2="../static/marketing/map.png"/>
    <Image img = "../static/marketing/blue-bar.png"/>
    <Imagegrid img1 = "../static/marketing/water.png" img2="../static/marketing/pink-bar.png"/>
    <Imagegrid img1 = "../static/marketing/did-you.png" img2="../static/marketing/elected-officials.png"/>

    <Textbox>
      <H2>Women Tech Founders</H2>
      <Para>Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur.</Para>
    </Textbox>

    <Imagegrid img1 = "../static/marketing/dont-guess.png" img2="../static/marketing/map.png"/>
    <Image img = "../static/marketing.jpg"/>

    <Textbox>
      <H2>Conduit Labs</H2>
      <Para>Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur.</Para>
    </Textbox>

    <Imagegrid img1 = "../static/marketing/dont-guess.png" img2="../static/marketing/map.png"/>
    <Image img = "../static/marketing.jpg"/>

  </Layout>
)
