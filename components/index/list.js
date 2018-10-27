import styled from 'styled-components';
import Background from './background';
import Listitem from './listitem';

const Container = styled.div`
  margin: auto;
  max-width: 960px;
  display: flex;
  flex-wrap: wrap;
`;

export default () => (
  <Background list={1} title="more work">
    <Container>
      <a href="https://www.peoplism.com/">
        <Listitem 
          title="Peoplism"
          tag="Late 2018" 
          cta="View Website" 
          subtitle="Marketing Development" 
          url="https://www.peoplism.com/"
        />
      </a>
      <a href="https://www.alliebot.com/">
        <Listitem 
          title="Allie Bot"
          tag="Early 2018" 
          cta="View Website" 
          subtitle="Marketing Development"
          url=""
        />
      </a>
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
)
