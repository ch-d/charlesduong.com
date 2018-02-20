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

const Framer = styled.iframe`
  max-width:100%;
  width:100%;
  height: 100vh;
  border:0;
  margin-bottom: 2rem;
`;

export default () => (
  <Layout
    title='Talent Sonar'
    date='2017'
    disp1="none"
    titleCase="/lawyer-exchange"
    desc="Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."
  >

    <Textbox>
      <Para>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</Para>
    </Textbox>
    <Image img = "../static/talent-sonar/hero.png"/>

    <Textbox>
      <H2>Mobile Resume Review</H2>
      <Para>Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam id dolor id nibh ultricies vehicula ut id elit.</Para>
    </Textbox>

    <Image img = "../static/talent-sonar/001.png" cap="Mobile Interview Planning Flow (1 of 2)"/>

    <Textbox>
      <Para>Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam id dolor id nibh ultricies vehicula ut id elit.</Para>
    </Textbox>

    <Framer src="https://framer.cloud/gRnDc/" frameborder="0"/>

    <Textbox>
      <H2>Mobile Interview Planning</H2>
      <Para>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus eget urna mollis ornare vel eu leo. Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna.</Para>
    </Textbox>
    <Image img = "../static/talent-sonar/002.png" cap="Mobile Interview Planning Flow (1 of 2)"/>
    <Image img = "../static/talent-sonar/002.png" cap="Mobile Interview Planning Flow (2 of 2)"/>
    <Textbox>
      <Para>Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam id dolor id nibh ultricies vehicula ut id elit.</Para>
    </Textbox>
    <Image img = "../static/talent-sonar/001.png" cap="Mobile Interview Planning Flow (1 of 2)"/>

    <Textbox>
      <H2>Component System</H2>
      <Para>Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Para>
    </Textbox>
    <Image img = "../static/talent-sonar/005.png" cap="Sketch Component System"/>
    <Imagegrid img1 = "../static/talent-sonar/006.png" cap1="Abstract Version Control (1 of 2)" img2="../static/talent-sonar/007.png" cap2="Abstract Version Control (2 of 2)"/>

    <Textbox>
      <H2>Marketing / Sales</H2>
      <Para>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</Para>
    </Textbox>
    <Imagegrid img1 = "../static/lawyer-exchange/012.png" cap1="Profile Wizard" img2="../static/lawyer-exchange/011.png" cap2="Profile Editor"/>
    <Image img = "../static/lawyer-exchange/013.gif" cap="Project Lawyer Profile"/>

  </Layout>
)
