import Layout from "../components/case-study/Layout";
import ImagesThree from "../components/case-study/ImagesThree";

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
      { type: "item", text: "Cris, Product Manager" },
      { type: "item", text: "Scott, Back-End Developer" },
      { type: "item", text: "Ethan, User Researcher" },
      { type: "item", text: "Taylor, Communications Designer" },
      { type: "item", text: "Monica, Content Strategist" },
      { type: "label", text: "Roles" },
      { type: "item", text: "React Native Front-End Developer" },
      { type: "item", text: "iOS Mobile Designer" },
      { type: "item", text: "Android Mobile Designer" }
    ]}
    hasContainer
  >
    <ImagesThree
      color="orange"
      images={[
        {
          src: "https://player.vimeo.com/video/345118772",
          caption: "Sterotype Recognition Game"
        },
        {
          src: "https://player.vimeo.com/video/345118765",
          caption: "Timed Association Game"
        },
        {
          src: "https://player.vimeo.com/video/345118755",
          caption: "Multiple Choice Questions + Videos"
        },
        {
          src: "../static/bemore/002.png",
          caption: "Likert Scale Survey Questions"
        },
        { src: "../static/bemore/001.png", caption: "Card Matching Game" }
      ]}
    />
  </Layout>
);
