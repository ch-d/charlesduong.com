import styled from "styled-components";
import Background from "./background";
import Listitem from "./listitem";
import { space } from "styled-system";
import { ExternalLink, ChevronsRight } from "react-feather";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  @media (max-width: 52rem) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 0.5rem;
  }
`;

const External = styled.a`
  text-decoration: none;
`;

const Divider = styled.div`
  height: ${props => props.h}px;
  margin-left: 20%;
  @media (min-width: 40rem) {
    margin-left: 37.5%;
    width: 60%;
  }
  width: 80%;
  background: linear-gradient(
    to left,
    ${props => props.theme.colors.gradient.purple},
    ${props => props.theme.colors.gradient.green}
  );
  transform: translateY(280px);
  position: relative;
  z-index: 1;
  ${space};
`;

const hide = {
  display: "none"
};

export default ({ isMain }) => (
  <div>
    <Divider h="4" mb={1} />
    <Divider h="1" />
    <Background list={1} title="more work">
      <Container>
        <Listitem
          title="Finance App"
          tag="2018 – 2019"
          cta="View Case Study"
          subtitle="Web Interaction Design, Design System"
          url="/finance"
          customStyle={isMain ? hide : {}}
        >
          <ChevronsRight color="#5A8A97" />
        </Listitem>
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
          tag="2016 – 2017"
          cta="View Case Study"
          subtitle="Web Interaction Design, Design System"
          url="/lawyer-exchange"
          customStyle={isMain ? hide : {}}
        >
          <ChevronsRight color="#5A8A97" />
        </Listitem>
        <div style={{ flex: 1, display: isMain ? "none" : "inherit" }} />
        <Listitem
          title="BE MORE"
          tag="Spring 2019"
          cta="View Case Study"
          subtitle="React Native Development, Mobile Interaction Design"
          url="/mobile-dev"
        >
          <ChevronsRight color="#5A8A97" />
        </Listitem>
        <Listitem
          title="ROC United"
          tag="Winter 2019"
          cta="View Case Study"
          subtitle="React Native Development, Mobile Interaction Design"
          url="/mobile-dev"
        >
          <ChevronsRight color="#5A8A97" />
        </Listitem>
        <External href="https://www.peoplism.com/">
          <Listitem
            title="Peoplism"
            tag="Late 2018"
            cta="View Website"
            subtitle="Marketing Design, Diversity+Inclusion"
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
            subtitle="Marketing Design, Diversity+Inclusion"
            url="https://www.alliebot.com/"
          >
            <ExternalLink color="#5A8A97" />
          </Listitem>
        </External>
      </Container>
    </Background>
  </div>
);
