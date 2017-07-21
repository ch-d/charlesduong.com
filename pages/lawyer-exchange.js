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
  <Layout title='Lawyer Exchange' disp1="none">

    <Textbox>
      <Para>Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur.</Para>
    </Textbox>
    <Image img = "../static/lawyer-exchange/hero.png"/>

    <Textbox>
      <H2>Marketing Page</H2>
      <Para>Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur.</Para>
    </Textbox>
    <Image img = "../static/lawyer-exchange/001.gif" cap="Responsive Website Design"/>

    <Textbox>
      <H2>Discovery Phase</H2>
      <Para>Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur.</Para>
    </Textbox>
    <Image img = "../static/lawyer-exchange/006.png" cap="Early Whiteboard Brainstorm"/>

    <Textbox>
      <H2>User Research</H2>
      <Para>Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur.</Para>
    </Textbox>
    <Imagegrid img1 = "../static/lawyer-exchange/007.png" cap1="Proposal Screen v1" img2="../static/lawyer-exchange/008.png" cap2="Profile Wizard Screen v1"/>
    <Imagegrid img1 = "../static/lawyer-exchange/009.png" cap1="In-Person User Testing" img2="../static/lawyer-exchange/010.png" cap2="Remote User Testing"/>

    <Textbox>
      <H2>Component Style Guide</H2>
      <Para>Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur.</Para>
    </Textbox>
    <Imagegrid img1 = "../static/lawyer-exchange/002.png" cap1="Style Guide v1" img2="../static/lawyer-exchange/003.png" cap2="Style Guide v2"/>
    <Imagegrid img1 = "../static/lawyer-exchange/004.png" cap1="Sign Up Flow" img2="../static/lawyer-exchange/005.png" cap2="Settings Flow"/>

    <Textbox>
      <H2>Design Revisions</H2>
      <Para>Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur.</Para>
    </Textbox>
    <Imagegrid img1 = "../static/lawyer-exchange/012.png" cap1="Profile Wizard" img2="../static/lawyer-exchange/011.png" cap2="Profile Editor"/>
    <Image img = "../static/lawyer-exchange/013.gif" cap="Project Lawyer Profile"/>

    <Textbox>
      <Para>Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur.</Para>
    </Textbox>
    <Imagegrid img1 = "../static/lawyer-exchange/015.png" cap1="Hiring Lawyer Project Brief" img2="../static/lawyer-exchange/016.png" cap2="Project Lawyer Available Projects"/>
    <Imagegrid img1 = "../static/lawyer-exchange/017.png" cap1="Project Lawyer Send Proposal" img2="../static/lawyer-exchange/014.png" cap2="Hiring Lawyer Withdraw Project" />

  </Layout>
)
