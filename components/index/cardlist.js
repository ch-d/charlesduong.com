import Card from './carditem';
import Background from './background';

export default () => (
  <Background title="design work">
    <Card
      title = "Talent Sonar"
      desc = {["Mobile Interaction Design", "Design System", "Marketing Design"]}
      img = "../static/talent-sonar/hero.png"
      url = "/talent-sonar"
      date = "Talent Acquisition"
      cta = "View Case Study 👉"
    />
    <Card
      title = "Lawyer Exchange"
      desc = {["Marketing & Development", "User Research", "Design System"]}
      img = "../static/lawyer-exchange/hero.png"
      url = "/lawyer-exchange"
      date = "Legal Marketplace"
      cta = "View Case Study 👉"
    />
    <Card
      title = "Savings Account"
      desc = {["UI Design", "Design System", "Marketing & Sales Design"]}
      img = "../static/finance/hero.png"
      url = "#"
      date = "Financial Services"
      cta = "Case Study Coming Soon ⏳"
    />
  </Background>
)