import { ExternalLink, ChevronsRight } from "react-feather";
import Background from "../Background";
import Item from "./item";
import { Divider, Container, External } from "./style";
import { theme } from "../../../theme";

const hide = {
  display: "none"
};

export default ({ isMain, color }) => (
  <div>
    <Divider h="4" mb={2} color={color} />
    <Divider h="1" color={color} />
    <Background list={1} title="more work" color={color}>
      <Container>
        <Item
          title="Finance App"
          tag="2018 – 2019"
          cta="View Case Study"
          subtitle="Web Interaction Design, Design System"
          url="/finance"
          customStyle={isMain ? hide : {}}
        >
          <ChevronsRight color={theme.colors.neutral[200]} />
        </Item>
        <Item
          title="Talent Sonar"
          tag="Late 2017"
          cta="View Case Study"
          subtitle="Mobile Interaction Design, Design System"
          url="/talent-sonar"
          customStyle={isMain ? hide : {}}
        >
          <ChevronsRight color={theme.colors.neutral[200]} />
        </Item>
        <Item
          title="Lawyer Exchange"
          tag="2016 – 2018"
          cta="View Case Study"
          subtitle="Web Interaction Design, Design System"
          url="/lawyer-exchange"
          customStyle={isMain ? hide : {}}
        >
          <ChevronsRight color={theme.colors.neutral[200]} />
        </Item>
        <div style={{ flex: 1, display: isMain ? "none" : "inherit" }} />
        <Item
          title="BE MORE"
          tag="Spring 2019"
          cta="View Case Study"
          subtitle="React Native Development, Mobile Interaction Design"
          url="/bemore"
        >
          <ChevronsRight color={theme.colors.neutral[200]} />
        </Item>
        <Item
          title="ROC United"
          tag="Winter 2019"
          cta="View Case Study"
          subtitle="React Native Development, Mobile Interaction Design"
          url="/roc"
        >
          <ChevronsRight color={theme.colors.neutral[200]} />
        </Item>
        <External href="https://www.peoplism.com/">
          <Item
            title="Peoplism"
            tag="Late 2018"
            cta="View Website"
            subtitle="Marketing Design, Diversity+Inclusion"
            url="https://www.peoplism.com/"
          >
            <ExternalLink color={theme.colors.neutral[200]} />
          </Item>
        </External>
        <External href="https://www.alliebot.com/">
          <Item
            title="Allie Bot"
            tag="Early 2018"
            cta="View Website"
            subtitle="Marketing Design, Diversity+Inclusion"
            url="https://www.alliebot.com/"
          >
            <ExternalLink color={theme.colors.neutral[200]} />
          </Item>
        </External>
      </Container>
    </Background>
  </div>
);
