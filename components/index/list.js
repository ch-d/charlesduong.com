import styled from 'styled-components';
import Background from './background';
import Listitem from './listitem';
import { Flex, Box } from 'grid-styled';
import { ExternalLink, ChevronsRight, Clock } from 'react-feather'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  @media (max-width: 52rem) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 0.5rem;
  };
`;

const External = styled.a`
  text-decoration: none;
`

const Divider = Box.extend`
  height: ${props => props.h}px;
  margin-left: 20%;
  @media (min-width: 40rem) {
    margin-left: 37.5%;
    width: 60%;
  }
  width: 80%;
  background: linear-gradient(to left, ${props => props.theme.colors.gradient.purple}, ${props => props.theme.colors.gradient.green});
  transform: translateY(280px);
  position: relative;
  z-index: 1;
`

const hide = {
  display: 'none'
};

const ComingSoon = styled(Listitem)`
  cursor: default;
`

export default ({ isMain }) => (
  <div>
    <Divider h="4" mb={1} />
    <Divider h="1" />
    <Background list={1} title="more work" >
      <Container>
        <ComingSoon 
          title="Savings Account"
          tag="2018" 
          cta="Case Study Coming Soon" 
          subtitle="UI Design, Design System"
          url="#"
          customStyle={isMain ? hide : {}}
        >
          <Clock color="#5A8A97" />
        </ComingSoon>
        <Listitem 
          title="Talent Sonar"
          tag="Late 2017" 
          cta="View Case Study" 
          subtitle="Mobile Interaction Design, Design System"
          url="/talent-sonar"
          customStyle={isMain ? hide : {}}
        >
          <ChevronsRight color="#5A8A97" />
        </Listitem>
        <Listitem 
          title="Lawyer Exchange"
          tag="Late 2016 –" 
          cta="View Case Study" 
          subtitle="User Research, Design System"
          url="/lawyer-exchange"
          customStyle={isMain ? hide : {}}
        >
          <ChevronsRight color="#5A8A97" />
        </Listitem>
        <External href="https://www.peoplism.com/">
          <Listitem 
            title="Peoplism"
            tag="Late 2018" 
            cta="View Website" 
            subtitle="End-to-End D&I+ Consultancy" 
            url="https://www.peoplism.com/"
          >
            <ExternalLink color="#5A8A97" />
          </Listitem>
        </External>
        <External href="https://www.alliebot.com/">
          <Listitem 
            title="Allie Bot"
            tag="Early 2018" 
            cta="View Website" 
            subtitle="Slack Bot for Inclusion at Work"
            url="https://www.alliebot.com/"
          >
            <ExternalLink color="#5A8A97" />
          </Listitem>
        </External>
        <Listitem 
          title="Koeo Travel"
          tag="Late 2017" 
          cta="View Case Study" 
          subtitle="Front-End Development, User Research"
          url="/koeo"
          customStyle={isMain ? hide : {}}
        >
          <ChevronsRight color="#5A8A97" />
        </Listitem>
        <Listitem 
          title="BallotReady"
          tag="Late 2016" 
          cta="View Case Study" 
          subtitle="Marketing Design, Data Visualization"
          url="/ballot-ready"
        >
          <ChevronsRight color="#5A8A97" />
        </Listitem>
        <Listitem 
          title="Luna Lights"
          tag="Early 2016" 
          cta="View Case Study" 
          subtitle="User Interface Design, Data Visualization"
          url="/luna-lights"
        >
          <ChevronsRight color="#5A8A97" />
        </Listitem>
      </Container>
    </Background>
  </div>
)
