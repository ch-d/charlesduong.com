import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';

// Layout Components
import Layout from '../components/layout';
import Textbox from '../components/textbox';
import Image from '../components/image';
import Imagegrid from '../components/imagegrid';

// Layout constants
import baseStyles from '../constants/baseStyles';
import colors from '../constants/colors';
import {H1, H2, Para } from '../constants/typography';

export default () => (
  <Layout
    title='Lawyer Exchange'
    date='Late 2016 - Early 2017'
    disp1="none"
    titleCase="/lawyer-exchange"
    desc="The Lawyer Exchange is a new venture from the founder of VisaNow set out to answer the question: why are most people who need legal work not able to access affordable services? Through his own research, he determined that the first step to correct this would be a community to connect lawyers to other lawyers with contract project opportunities. It became our goal to increase efficiency between established attorneys looking to grow their practice and emerging lawyers looking for meaningful legal experiences, which would in turn decrease the cost to access legal services for consumers."
  >

    <Textbox>
      <Para>The Lawyer Exchange is a new venture from the founder of VisaNow set out to answer the question: <strong>why are most people who need legal work not able to access affordable services?</strong> Through his own research, he determined that the first step to answer this would be a community to connect lawyers to other lawyers with contract project opportunities. It became our goal to increase efficiency between established attorneys looking to grow their practice and emerging lawyers looking for meaningful legal experiences, which would in turn decrease the cost to access legal services for consumers.</Para>
    </Textbox>
    <Image img = "../static/lawyer-exchange/hero.png"/>

    <Textbox>
      <H2>Marketing Page</H2>
      <Para>Although the idea of contract work has made its rounds in other industries, this concept was not widely adopted in the legal profession. This even goes against formal opinions that state <strong>“...by reducing the cost of legal services, outsourcing can improve access to justice by making legal services more affordable.”</strong> To test if there was actually demand for a platform like this we developed a marketing site that captured emails from potential lawyers. We hoped to engage professional attorneys with resources to help them understand how this could be a feasible and ethical model to work together.</Para>
    </Textbox>
    <Image img = "../static/lawyer-exchange/001.gif" cap="Responsive Website Development"/>

    <Textbox>
      <H2>Discovery Phase</H2>
      <Para>Once we found proficient need for the product, we worked through a high level flow of what the app would look like. We defined our users as established Solo / Small Firm Lawyers and emerging Recent Law School Grads. It became our main priority to provide as much of a frictionless experience for the established lawyers who are pressed for time, and an extensive toolkit for the emerging lawyers looking to grow their career. With a high-level flow established, I then focused on wireframing key moments in the flow before diving into <a href="https://www.sketchapp.com/">Sketch</a> for higher fidelity mockups.</Para>
    </Textbox>
    <Image img = "../static/lawyer-exchange/006.png" cap="Early Whiteboard Brainstorm"/>
    <Imagegrid img1 = "../static/lawyer-exchange/018.png" cap1="Wireframe Exploration (1 of 2)" img2="../static/lawyer-exchange/019.png" cap2="Wireframe Exploration (2 of 2)"/>

    <Textbox>
      <H2>User Research</H2>
      <Para>Before we fully jumped into development, I hacked a prototype using <a href="https://facebook.github.io/react/">React</a> and <a href="https://www.invisionapp.com/">InVision</a>. I wanted to ensure we tested our assumptions to identify important or unnecessary features before spending precious time developing them. I facilitated both remote user studies and in-person user studies with several legal professionals using <a href="https://lookback.io/">Lookback</a>. The exercise not only helped me understand some potential roadblocks with the UI, but also gave me some insight into the mental models lawyers use.</Para>
    </Textbox>
    <Imagegrid img1 = "../static/lawyer-exchange/007.png" cap1="Proposal Screen v1" img2="../static/lawyer-exchange/008.png" cap2="Profile Wizard Screen v1"/>
    <Imagegrid img1 = "../static/lawyer-exchange/009.png" cap1="In-Person User Testing" img2="../static/lawyer-exchange/010.png" cap2="Remote User Testing"/>

    {/* REMOVE THE EXTRA N AND H IN FUCNTION & SWITCH RESPECTIVELY -- IT MESSES WITH CODE HIGHLIGHT */}
    <Textbox>
      <H2>Component Style Guide</H2>
      <Para>To work through designs quicker, I worked on a component style guide to assemble a cohesive visual language. Sketch’s extensive symbols function made it incredibly simple to switch the style of a component found on multiple pages, in one central location.</Para>

      <Para>I also used Sketch’s symbols to create information architecture maps of the product to ensure we were all on the same page. Based on a mix of methods from <a href="https://www.youtube.com/watch?v=YrtPH9OWtPE">Joel Buekelman</a> and <a href="https://signalvnoise.com/posts/1926-a-shorthand-for-designing-ui-flows">Ryan Singer</a>, I developed maps of different moments within the UI. This wasn’t meant to be a source of truth, rather used to communicate interactions on a page and unite the developers and myself around a more common language.</Para>
    </Textbox>
    <Imagegrid img1 = "../static/lawyer-exchange/002.png" cap1="Style Guide v1" img2="../static/lawyer-exchange/003.png" cap2="Style Guide v2"/>
    <Imagegrid img1 = "../static/lawyer-exchange/004.png" cap1="Sign Up Flow" img2="../static/lawyer-exchange/005.png" cap2="Settings Flow"/>

    <Textbox>
      <H2>Design Revisions - Profile</H2>
      <Para>An important arc for the application was the profile page flow. For Hiring Lawyers, it was important to identify quality Project Lawyers at a quick glance. For Project Lawyers, it was important for us to help guide them towards making a quality profile. Based on research from the <a href="http://iaals.du.edu/foundations/reports/whole-lawyer-and-character-quotient/foundations-practice">IAALS Foundations for Practice</a> study, we wanted to highlight a lawyer’s character over superficial qualities like GPA and class rank. By identifying a lawyer’s "Character Quotient", it was our hope to facilitate longer lasting relationships between both parties.</Para>
    </Textbox>
    <Imagegrid img1 = "../static/lawyer-exchange/012.png" cap1="Profile Wizard" img2="../static/lawyer-exchange/011.png" cap2="Profile Editor"/>
    <Image img = "../static/lawyer-exchange/013.gif" cap="Project Lawyer Profile"/>

    <Textbox>
      <H2>Design Revisions - Project Briefs</H2>
      <Para>Another important moment in the application was the interaction between a Hiring Lawyer and a Project Lawyer. With the Hiring Lawyer persona we had in mind, it was still important to keep the flow as simple as possible. We decided to be as hands off as possible when Hiring Lawyers posted a Project Brief and deciding on Project Lawyers to hire. On the other side, because the concept of an independent "freelance" lawyer is not widely adopted compared to "contract" lawyers working at a temp law firm, it was important to design empowerment to remind Project Lawyers to take initiative in the conversation.
      </Para>
    </Textbox>
    <Imagegrid img1 = "../static/lawyer-exchange/015.png" cap1="Hiring Lawyer Project Brief" img2="../static/lawyer-exchange/016.png" cap2="Project Lawyer Available Projects"/>
    <Imagegrid img1 = "../static/lawyer-exchange/017.png" cap1="Project Lawyer Send Proposal" img2="../static/lawyer-exchange/014.png" cap2="Hiring Lawyer Select Proposal" />

  </Layout>
)
// <a href="https://www.americanbar.org/content/dam/aba/administrative/ethics_2020/20120508_ethics_20_20_final_resolution_and_report_outsourcing_posting.authcheckdam.pdf"></a>
