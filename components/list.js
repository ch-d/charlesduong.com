import styled from 'styled-components';
import Listitem from './listitem';

const Background = styled.div`
  width:100%;
  margin:16rem 0 8rem 0;
`;

const Container = styled.div`
  margin: auto;
  max-width: 960px;
  display: flex;
  flex-wrap: wrap;
`;

export default () => (
  <Background>
    <Container>
      <Listitem 
        title="Peoplism"
        tag="Late 2018" 
        cta="View Website" 
        subtitle="Marketing Development" 
        img="http://tachyons.io/img/logo.jpg"
        url=""
      />
      <Listitem 
        title="Allie Bot"
        tag="Early 2018" 
        cta="View Website" 
        subtitle="Marketing Development" 
        img="http://tachyons.io/img/logo.jpg"
        url=""
      />
      <Listitem 
        title="Koeo Travel"
        tag="Late 2017" 
        cta="View Case Study" 
        subtitle="Front-End Development, User Research" 
        img="http://tachyons.io/img/logo.jpg"
        url=""
      />
      <Listitem 
        title="BallotReady"
        tag="Late 2016" 
        cta="View Case Study" 
        subtitle="Marketing Design, Data Visualization" 
        img="http://tachyons.io/img/logo.jpg"
        url=""
      />
      <Listitem 
        title="Luna Lights"
        tag="Early 2016" 
        cta="View Case Study" 
        subtitle="User Interface Design, Data Visualization" 
        img="http://tachyons.io/img/logo.jpg"
        url=""
      />
    </Container>
  </Background>
)
