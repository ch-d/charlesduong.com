import Card from './carditem';

export default () => (
  <div>
    <Card
      title = "Talent Sonar"
      sub1 = "Mobile Interaction Design"
      sub2 = "Design System"
      sub3 = "Marketing Design"
      img = "../static/talent-sonar/hero.png"
      url = "/talent-sonar"
      date = "Talent Acquisition"
      cta = "View Case Study 👉"
    />
    <Card
      title = "Lawyer Exchange"
      sub1 = "Marketing & Development"
      sub2 = "User Research"
      sub3 = "Design System"
      img = "../static/lawyer-exchange/hero.png"
      url = "/lawyer-exchange"
      date = "Legal Marketplace"
      cta = "View Case Study 👉"
    />
    <Card
      title = "Savings Account"
      sub1 = "UI Design"
      sub2 = "User Research"
      img = "../static/koeo/hero.png"
      url = "#"
      date = "Financial Services"
      cta = "Case Study Coming Soon 👀"
    />
  </div>
)