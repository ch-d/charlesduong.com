import Card from "./carditem";
import Background from "./background";

export default () => (
  <Background title="design work">
    <Card
      subtitle="Talent Acquisition"
      title="Talent Sonar"
      desc={[
        "A platform that addresses unconscious bias in the hiring process and provides a model for hiring teams to source and select the right fit for job requisitions."
      ]}
      img="../static/talent-sonar/hero.png"
      url="/talent-sonar"
      cta="View Case Study 👉"
    />
    <Card
      subtitle="Legal Marketplace"
      title="Lawyer Exchange"
      desc={[
        "A new venture from the founder of VisaNow set out to answer the question: why are most people who need legal work not able to access affordable services?"
      ]}
      img="../static/lawyer-exchange/hero.png"
      url="/lawyer-exchange"
      cta="View Case Study 👉"
    />
    {/* <Card
      subtitle = "Travel Planner"
      title = "Koeo Travel"
      desc = {["A simple group trip planning application where travelers can collaborate with friends and family to organize future travel plans."]}
      img = "../static/koeo/hero.png"
      url = "/koeo"
      cta = "View Case Study 👉"
    /> */}
    <Card
      subtitle="Financial Services"
      title="Forbes Fintech 50 company"
      desc={[
        "A company that helps you put a few dollars aside to make loan payments and allocate funds efficiently to get you out of debt faster."
      ]}
      img="../static/finance/hero.png"
      url="#"
      cta="Case Study Coming Soon ⏳"
    />
  </Background>
);
