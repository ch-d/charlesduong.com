import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';

// Layout Components
import Layout, { Divider, Description, Details, CategoryLabel, CategoryItem } from '../components/case-study/layout';
import Textbox from '../components/case-study/textbox';
import Image from '../components/case-study/image';
import Imagegrid from '../components/case-study/imagegrid';
import Twocolumn from '../components/case-study/twocolumn';

// Layout constants
import baseStyles from '../constants/baseStyles';
import colors from '../constants/colors';
import {H1, H2, Para } from '../constants/typography';

export default () => (
  <Layout
    title='Lawyer Exchange'
    date='Late 2016 &ndash; Early 2017'
    disp2="none"
    titleCase="/lawyer-exchange"
    desc="The Lawyer Exchange is a new venture from the founder of VisaNow set out to answer the question: why are most people who need legal work not able to access affordable services?"
  >

    <Flex wrap py={4}>
      <Description>
        <H1>Providing Small / Solo Firms with BigLaw Resources</H1>
        <Para>The Lawyer Exchange is a new venture from the founder of VisaNow to answer the question: why are most people who need legal work not able to access affordable services? Through initial research, he determined the first step should be to help small / solo firm lawyers grow their practice by introducing them to freelance lawyers looking for meaningful legal experiences.</Para>
        <Para>The immediate goal was to facilitate the bringing together of these legal professionals in similar ways Thumbtack and UpWork provide service professionals to consumers. Our assumption was that the increased efficiency and flexibility for smaller firms should in turn decrease the average cost to access legal services.</Para>
        <Para>I was the first person to work full-time with the founder when it was only an idea in the Fall of 2016. Together, we collaborated with emerging lawyers and a development team to ship the initial MVP a year later.</Para>
      </Description>
      <Divider w="1"/>
      <Details>
        <CategoryLabel>Company</CategoryLabel>
          <CategoryItem>Lawyer Exchange</CategoryItem>
        <CategoryLabel>Team Members</CategoryLabel>
          <CategoryItem>Robert Meltzer, CEO, Founder</CategoryItem>
          <CategoryItem>Britney McDonald, Counsel</CategoryItem>
          <CategoryItem>Josh Turk, Counsel</CategoryItem>
          <CategoryItem>Leo Fedorov, Lead Developer</CategoryItem>
        <CategoryLabel>Projects</CategoryLabel>
          <CategoryItem>UI Design</CategoryItem>
          <CategoryItem>User Research</CategoryItem>
          <CategoryItem>Product Management</CategoryItem>
          <CategoryItem>Marketing Design</CategoryItem>
      </Details>
    </Flex>
    <Image img = "../static/lawyer-exchange/hero.png"/>
    
    <H2>Legal Research</H2>
    <Twocolumn>
      <Para>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</Para>
      <Para>Nulla vitae elit libero, a pharetra augue. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</Para>
      <Para>Etiam porta sem malesuada magna mollis euismod. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Sed posuere consectetur est at lobortis. Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui.</Para>
      <Para>Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at lobortis. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</Para>
    </Twocolumn>
    <Image img = "../static/lawyer-exchange/006.png" cap="Early Whiteboard Brainstorm"/>

    <H2>User Research</H2>
    <Twocolumn>
      <Para>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</Para>
      <Para>Nulla vitae elit libero, a pharetra augue. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</Para>
      <Para>Etiam porta sem malesuada magna mollis euismod. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Sed posuere consectetur est at lobortis. Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui.</Para>
      <Para>Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at lobortis. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</Para>
    </Twocolumn>
    <Image img = "../static/lawyer-exchange/001.gif" cap="Early Whiteboard Brainstorm"/>
    
    <H2>Profile and Project Onboarding</H2>
    <Twocolumn>
      <Para>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</Para>
      <Para>Nulla vitae elit libero, a pharetra augue. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</Para>
      <Para>Etiam porta sem malesuada magna mollis euismod. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Sed posuere consectetur est at lobortis. Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui.</Para>
      <Para>Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at lobortis. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</Para>
    </Twocolumn>
    <Image img = "../static/lawyer-exchange/013.gif" cap="Project Lawyer Profile"/>
    {/* <Imagegrid img1 = "../static/lawyer-exchange/018.png" cap1="Wireframe Exploration (1 of 2)" img2="../static/lawyer-exchange/019.png" cap2="Wireframe Exploration (2 of 2)"/>
    <Imagegrid img1 = "../static/lawyer-exchange/007.png" cap1="Proposal Screen v1" img2="../static/lawyer-exchange/008.png" cap2="Profile Wizard Screen v1"/>
    <Imagegrid img1 = "../static/lawyer-exchange/009.png" cap1="In-Person User Testing" img2="../static/lawyer-exchange/010.png" cap2="Remote User Testing"/>
    <Imagegrid img1 = "../static/lawyer-exchange/012.png" cap1="Profile Wizard" img2="../static/lawyer-exchange/011.png" cap2="Profile Editor"/> */}
    <Imagegrid img1 = "../static/lawyer-exchange/004.png" cap1="Sign Up Flow" img2="../static/lawyer-exchange/005.png" cap2="Settings Flow"/>

    <H2>Project Proposals and Messaging</H2>
    <Twocolumn>
      <Para>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</Para>
      <Para>Nulla vitae elit libero, a pharetra augue. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</Para>
      <Para>Etiam porta sem malesuada magna mollis euismod. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Sed posuere consectetur est at lobortis. Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui.</Para>
      <Para>Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at lobortis. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</Para>
    </Twocolumn>
    <Image img = "../static/lawyer-exchange/013.gif" cap="Project Lawyer Profile"/>
    <Imagegrid img1 = "../static/lawyer-exchange/004.png" cap1="Sign Up Flow" img2="../static/lawyer-exchange/005.png" cap2="Settings Flow"/>

    <Textbox>
    <H2>Increasing Internal Company Efficiency</H2>
      <Para>To work through designs quicker, I worked on a component style guide to assemble a cohesive visual language. Sketch’s extensive symbols function made it incredibly simple to switch the style of a component found on multiple pages, in one central location.</Para>
    </Textbox>
    <Imagegrid img1 = "../static/lawyer-exchange/002.png" cap1="Style Guide v1" img2="../static/lawyer-exchange/003.png" cap2="Style Guide v2"/>
    
    <Textbox>
      <H2>Results</H2>
      <Para>Another important moment in the application was the interaction between a Hiring Lawyer and a Project Lawyer. With the Hiring Lawyer persona we had in mind, it was still important to keep the flow as simple as possible. We decided to be as hands off as possible when Hiring Lawyers posted a Project Brief and deciding on Project Lawyers to hire. On the other side, because the concept of an independent "freelance" lawyer is not widely adopted compared to "contract" lawyers working at a temp law firm, it was important to design empowerment to remind Project Lawyers to take initiative in the conversation.
      </Para>
    </Textbox>
    <Imagegrid img1 = "../static/lawyer-exchange/015.png" cap1="Hiring Lawyer Project Brief" img2="../static/lawyer-exchange/016.png" cap2="Project Lawyer Available Projects"/>

    <Textbox>
      <H2>Further Considerations</H2>
      <Para>Another important moment in the application was the interaction between a Hiring Lawyer and a Project Lawyer. With the Hiring Lawyer persona we had in mind, it was still important to keep the flow as simple as possible. We decided to be as hands off as possible when Hiring Lawyers posted a Project Brief and deciding on Project Lawyers to hire. On the other side, because the concept of an independent "freelance" lawyer is not widely adopted compared to "contract" lawyers working at a temp law firm, it was important to design empowerment to remind Project Lawyers to take initiative in the conversation.
      </Para>
    </Textbox>
    <Imagegrid img1 = "../static/lawyer-exchange/017.png" cap1="Project Lawyer Send Proposal" img2="../static/lawyer-exchange/014.png" cap2="Hiring Lawyer Select Proposal" />

  </Layout>
)
