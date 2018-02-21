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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  height: 36rem;
  @media (max-width: 40rem) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    height: 48rem;
  };
  @media (max-width: 30rem) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.5rem;
  };
  max-width: 100%;
  width: 100%;
  margin-bottom: 2rem;
`

const GridImage = styled.div `
  border-radius: 0.25rem;
  background-image: ${props => props.image};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  grid-column: ${props => props.column_l};
  grid-row: ${props => props.row_l};
  @media (max-width: 40rem) {
    grid-column: ${props => props.column_m};
    grid-row: ${props => props.row_m};
  };
  @media (max-width: 30rem) {
    grid-column: ${props => props.column};
    grid-row: ${props => props.row};
  };
`

export default () => (
  <Layout
    title='Talent Sonar'
    date='Late 2017'
    disp1="none"
    titleCase="/talent-sonar"
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
    <Image img = "../static/talent-sonar/003.png" cap="Mobile Interview Planning Flow (2 of 2)"/>
    <Textbox>
      <Para>Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam id dolor id nibh ultricies vehicula ut id elit.</Para>
    </Textbox>
    <Image img = "../static/talent-sonar/004-1.png" cap="Add New Job + Job Criteria Flow"/>
    <Image img = "../static/talent-sonar/004-2.png" cap="Job Candidates + Job Team Members"/>
    <Image img = "../static/talent-sonar/004-3.png" cap="Round Candidates + Round Team Members"/>

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

    <Grid>
      <GridImage
        column_l="1 / 2" row_l="1 / 2"
        column_m="3 / 4" row_m="1 / 2"
        column="2 / 3" row="1 / 2"
        image="url('../static/talent-sonar/008.png')"
      />
      <GridImage
        column_l="2 / 3" row_l="2 / 3"
        column_m="2 / 3" row_m="2 / 3"
        column="1 / 2" row="2 / 3"
        image="url('../static/talent-sonar/009.png')"
      />
      <GridImage
        column_l="3 / 4" row_l="1 / 2"
        column_m="3 / 4" row_m="3 / 4"
        column="2 / 3" row="2 / 3"
        image="url('../static/talent-sonar/010.png')"
      />
      <GridImage
        column_l="3 / 4" row_l="3 / 4"
        column_m="1 / 2" row_m="3 / 4"
        column="1 / 2" row="3 / 4"
        image="url('../static/talent-sonar/011.png')"
      />
      <GridImage
        column_l="4 / 5" row_l="2 / 3"
        column_m="2 / 3" row_m="4 / 5"
        column="2 / 3" row="3 / 4"
        image="url('../static/talent-sonar/012.png')"
      />
      <GridImage
        column_l="2 / 3" row_l="1 / 2"
        column_m="3 / 4" row_m="2 / 3"
        column="1 / 2" row="1 / 2"
        image="url('../static/talent-sonar/017.png')"
      />
      <GridImage
        column_l="4 / 5" row_l="3 / 4"
        column_m="1 / 2" row_m="4 / 5"
        column="2 / 3" row="5 / 6"
        image="url('../static/talent-sonar/018.png')"
      />
      <GridImage
        column_l="1 / 2" row_l="2 / 3"
        column_m="2 / 3" row_m="1 / 2"
        column="1 / 2" row="4 / 5"
        image="url('../static/talent-sonar/013.png')"
      />
      <GridImage
        column_l="2 / 3" row_l="3 / 4"
        column_m="1 / 2" row_m="2 / 3"
        column="2 / 3" row="4 / 5"
        image="url('../static/talent-sonar/014.png')"
      />
      <GridImage
        column_l="3 / 4" row_l="2 / 3"
        column_m="2 / 3" row_m="3 / 4"
        column="1 / 2" row="5 / 6"
        image="url('../static/talent-sonar/015.png')"
      />
    </Grid>
    <Image img = "../static/talent-sonar/016.png" cap="Talent Sonar Platform Overview"/>

  </Layout>
)
