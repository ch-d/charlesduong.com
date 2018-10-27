import styled from 'styled-components';
import Background from './background';
import Listitem from './listitem';
import { Flex, Box } from 'grid-styled';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  @media (max-width: 40rem) {
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

export default ({ isMain }) => (
  <div>
    <Divider h="4" mb={1} />
    <Divider h="1" />
    <Background list={1} title="more work" >
      <Container>
        <Listitem 
          title="Savings Account"
          tag="2018" 
          cta="Case Study Coming Soon" 
          subtitle="UI Design, Design System"
          url=""
          customStyle={isMain ? hide : {}}
        />
        <Listitem 
          title="Talent Sonar"
          tag="Late 2017" 
          cta="View Case Study" 
          subtitle="Mobile Interaction Design, Design System, Marketing Design"
          url="/talent-sonar"
          customStyle={isMain ? hide : {}}
        />
        <Listitem 
          title="Lawyer Exchange"
          tag="Late 2016 –" 
          cta="View Case Study" 
          subtitle="Marketing & Development, User Research, Design System"
          url="/lawyer-exchange"
          customStyle={isMain ? hide : {}}
        />
        <External href="https://www.peoplism.com/">
          <Listitem 
            title="Peoplism"
            tag="Late 2018" 
            cta="View Website" 
            subtitle="Marketing Development" 
            url="https://www.peoplism.com/"
          />
        </External>
        <External href="https://www.alliebot.com/">
          <Listitem 
            title="Allie Bot"
            tag="Early 2018" 
            cta="View Website" 
            subtitle="Marketing Development"
            url="https://www.alliebot.com/"
          />
        </External>
        <Listitem 
          title="Koeo Travel"
          tag="Late 2017" 
          cta="View Case Study" 
          subtitle="Front-End Development, User Research"
          url="/koeo"
        />
        <Listitem 
          title="BallotReady"
          tag="Late 2016" 
          cta="View Case Study" 
          subtitle="Marketing Design, Data Visualization"
          url="ballot-ready"
        />
        <Listitem 
          title="Luna Lights"
          tag="Early 2016" 
          cta="View Case Study" 
          subtitle="User Interface Design, Data Visualization"
          url="luna-lights"
        />
      </Container>
    </Background>
  </div>
)
