import Layout from "../components/case-study/Layout";
import Image from "../components/case-study/Image";

export default () => (
  <Layout
    title="BE MORE: Breaking Bias Lite"
    titleCase="/bemore"
    desc="BE MORE Lite is a gateway to breaking bias with emotional intelligence. It’s an interactive way to learn about unconscious bias and develop the skills to reduce it in your personal and professional life."
    color="orange"
    introTitle="BE MORE: Breaking Bias Lite"
    subTitleLabel="Project Timeline"
    subTitleItem="12 weeks"
    intro={[
      "BE MORE Lite is a gateway to breaking bias with emotional intelligence. It’s an interactive way to learn about unconscious bias and develop the skills to reduce it in your personal and professional life.",
      "Using micro-videos, playful games, and guided meditations, the app allows participants to learn and apply the science-based tools to break bias."
    ]}
    categories={[
      { type: "label", text: "Company" },
      { type: "item", text: "BE MORE, Inc." },
      { type: "label", text: "Team Members" },
      { type: "item", text: "Cris Nelson, Product Manager" },
      { type: "item", text: "Scott Nelson, Back-End Developer" },
      { type: "item", text: "Ethan Winn, User Researcher" },
      { type: "item", text: "Taylor Sokolowski, Communications Designer" },
      { type: "item", text: "Monica Gragg, Content Strategist" },
      { type: "label", text: "Roles" },
      { type: "item", text: "React Native Front-End Developer" },
      { type: "item", text: "iOS Mobile Designer" },
      { type: "item", text: "Android Mobile Designer" }
    ]}
  >
    <Image src="../static/lawyer-exchange/hero.png" />
  </Layout>
);
