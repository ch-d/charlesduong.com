import Card from "./card";
import Background from "../Background";

export default () => (
  <Background title="design work">
    <Card
      subtitle="2018 – 2019"
      title="Forbes Fintech 50 company"
      desc={[
        "A company that helps you put a few dollars aside to make loan payments and allocate funds efficiently to get you out of debt faster."
      ]}
      img="../static/finance/hero.png"
      url="/finance"
      color="green"
      cta="View Case Study 👉"
    />
    <Card
      subtitle="2016 – 2018"
      title="Lawyer Exchange"
      desc={[
        "A new venture from the founder of VisaNow set out to answer the question: why are most people who need legal work not able to access affordable services?"
      ]}
      img="../static/lawyer-exchange/hero.png"
      url="/lawyer-exchange"
      color="neutral"
      cta="View Case Study 👉"
    />
    <Card
      subtitle="LATE 2017"
      title="Talent Sonar"
      desc={[
        "A platform that addresses unconscious bias in the hiring process and provides a model for hiring teams to source and select the right fit for job requisitions."
      ]}
      img="../static/talent-sonar/hero.png"
      url="/talent-sonar"
      color="blue"
      cta="View Case Study 👉"
    />
  </Background>
);
