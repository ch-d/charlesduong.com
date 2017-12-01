import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';
import { space } from 'styled-system';

// Layout Components
import Layout from '../components/layout';
import Textbox from '../components/textbox';
import Image from '../components/image';
import Imagegrid from '../components/imagegrid';
import NavScapes from '../components/navScapes';

// Layout constants
import baseStyles from '../constants/baseStyles';
import colors from '../constants/colors';
import {H1, H2, Para } from '../constants/typography';

const Center = styled.div`
  text-align:center;
  ${space}
`

// 2017 = Chicago, San Francisco
// 2016 = Chicago
// 2015 = Chicago, DC, New York, Bike Trip, Japan, Vietnam
// 2014 = San Luis Obispo
// 2013 = London, Netherlands, Ireland, Switzerland, Italy,


export default () => (
  <div>
    <NavScapes />
    <Layout
      title='photography'
      titleCase="/photography"
      desc=""
    >
      <Center pb={[2,3]} pt={[2,3]} id="2017">
        <H2>2017</H2>
      </Center>
      <Image hero img = "../static/scapes/001.jpg"/>
      <Imagegrid img1 = "../static/scapes/002.jpg" img2="../static/scapes/003.jpg"/>
      <Imagegrid img1 = "../static/scapes/004.jpg" img2="../static/scapes/005.jpg"/>
      <Image img = "../static/scapes/006.jpg"/>
      <Image img = "../static/scapes/007.jpg"/>
      <Center pb={[2,3]} pt={[2,3]} id="2016">
        <H2>2016</H2>
      </Center>
      <Imagegrid img1 = "../static/scapes/008.jpg" img2="../static/scapes/009.jpg"/>
      <Imagegrid img1 = "../static/scapes/010.jpg" img2="../static/scapes/011.jpg"/>
      <Image img = "../static/scapes/012.jpg"/>
      <Imagegrid img1 = "../static/scapes/013.jpg" img2="../static/scapes/014.jpg"/>
      <Imagegrid img1 = "../static/scapes/015.jpg" img2="../static/scapes/016.jpg"/>
      <Image img = "../static/scapes/022.jpg"/>
      <Center pb={[2,3]} pt={[2,3]} id="2015">
        <H2>2015</H2>
      </Center>
      <Image hero img = "../static/scapes/001.jpg"/>
      <Imagegrid img1 = "../static/scapes/002.jpg" img2="../static/scapes/003.jpg"/>
      <Imagegrid img1 = "../static/scapes/004.jpg" img2="../static/scapes/005.jpg"/>
      <Image img = "../static/scapes/006.jpg"/>
      <Image img = "../static/scapes/007.jpg"/>
    </Layout>
  </div>
)
