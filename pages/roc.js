import Layout from "../components/case-study/Layout";
import Image from "../components/case-study/Image";

export default () => (
  <Layout
    title="ROC National Diners' Guide"
    titleCase="/roc"
    desc="The Diners’ Guide showcases food establishments who take the “high road” to profitability, providing livable wages, paid time off, racial equity, an environment free of sexual harassment, and opportunities for advancement."
    color="turquoise"
    introTitle="ROC National Diners' Guide"
    subTitleLabel="Project Timeline"
    subTitleItem="8 weeks"
    intro={[
      "The Diners’ Guide showcases food establishments who take the “high road” to profitability, providing livable wages, paid time off, racial equity, an environment free of sexual harassment, and opportunities for advancement. The 2019 version of the Diners’ Guide allows you to create an account, check-in to restaurants, and earn consumer loyalty rewards."
    ]}
    categories={[
      { type: "label", text: "Company" },
      { type: "item", text: "Restaurant Opportunities Center United" },
      { type: "label", text: "Team Members" },
      { type: "item", text: "Cris Nelson, Product Manager" },
      { type: "item", text: "Scott Nelson, Back-End Developer" },
      { type: "label", text: "Roles" },
      { type: "item", text: "React Native Front-End Developer" },
      { type: "item", text: "iOS Mobile Designer" },
      { type: "item", text: "Android Mobile Designer" }
    ]}
  >
    <Image src="../static/lawyer-exchange/hero.png" />
  </Layout>
);
