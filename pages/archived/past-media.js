import { Flex, Box } from "grid-styled";
import styled from "styled-components";

// Layout Components
import Layout, { Divider } from "../../components/case-study/layout";
import Textbox from "../../components/case-study/textbox";
import Image from "../../components/case-study/image";
import Imagegrid from "../../components/case-study/imagegrid";

// Layout constants
import baseStyles from "../../constants/baseStyles";
import colors from "../../constants/colors";
import { H1, H2, Para } from "../../constants/typography";

export default () => (
  <Layout
    titleCase="/past-media"
    desc="Prior to 2015, while taking Mechanical Engineering courses, I was missing an outlet for my creativity. I ended up teaching myself VFX techniques, film post-production, and graphic design, while working on several side projects. These projects satisfied my need to build things and tell stories, before I began settling down with a more agile medium of web design."
  >
    <Flex wrap pt={2} mx={[0, 4]} px={[0, 4]}>
      <H1>Past Media</H1>
      <Divider h="1" />
    </Flex>
    <Textbox>
      <Para>
        Prior to 2015, while taking Mechanical Engineering courses, I was
        missing an outlet for my creativity. I ended up teaching myself VFX
        techniques, film post-production, and graphic design, while working on
        several side projects. These projects satisfied my need to build things
        and tell stories, before I began settling down with a more agile medium
        of web design.
      </Para>
    </Textbox>
    <Image hero img="../static/past-media/hero.png" />

    <Textbox>
      <H2>Senior Project</H2>
      <Para>
        In partial fufillment of my Bachelor of Arts degree at Cal Poly, I spent
        time exploring ways to create a Lean workflow in Visual Effects /
        Animation pipelines. After modeling and rigging a vehicle in Autodesk
        Maya, I used MATLAB and Python scripts to analyze terrain coordinates
        for animated vehicle suspension tests. This project taught me that there
        can be a marriage between technology and art.
      </Para>
      <script
        src="https://fast.wistia.com/embed/medias/oe34m0pqpk.jsonp"
        async
      />
      <script src="https://fast.wistia.com/assets/external/E-v1.js" async />
      <span
        className="wistia_embed wistia_async_oe34m0pqpk popover=true popoverAnimateThumbnail=true"
        style={{ display: "inline-block", height: "31px", width: "48px" }}
      >
        &nbsp;
      </span>
    </Textbox>
    <Imagegrid
      img1="../static/past-media/001.gif"
      img2="../static/past-media/002.gif"
    />
    <Imagegrid
      img1="../static/past-media/003.gif"
      img2="../static/past-media/004.gif"
    />

    <Textbox>
      <H2>Info Booth</H2>
      <Para>
        Info Booth came out of a weekend charrette, exploring the creative
        process with several Architecture and Film majors. The goal was to
        ideate a portable booth concept that allowed community members to come
        together, see the future planned for the land around them, and have a
        say in its construction.
      </Para>
      <script
        src="https://fast.wistia.com/embed/medias/mqcw4fsrd2.jsonp"
        async
      />
      <script src="https://fast.wistia.com/assets/external/E-v1.js" async />
      <span
        className="wistia_embed wistia_async_mqcw4fsrd2 popover=true popoverAnimateThumbnail=true"
        style={{ display: "inline-block", height: "31px", width: "48px" }}
      >
        &nbsp;
      </span>
    </Textbox>
    <Imagegrid
      img1="../static/past-media/005.gif"
      img2="../static/past-media/006.gif"
    />
    <Imagegrid
      img1="../static/past-media/007.gif"
      img2="../static/past-media/008.gif"
    />

    <Textbox>
      <H2>Poly Xpress</H2>
      <Para>
        Poly Xpress was an interactive web app that delivered a location-based
        interactive story. We began marketing it with a video that shared the
        concept of creating, sharing and telling. While working on this project,
        I delved into understanding animation language and rotoscoping for
        composition plates.
      </Para>
      <script
        src="https://fast.wistia.com/embed/medias/u9cifdr53r.jsonp"
        async
      />
      <script src="https://fast.wistia.com/assets/external/E-v1.js" async />
      <span
        className="wistia_embed wistia_async_u9cifdr53r popover=true popoverAnimateThumbnail=true"
        style={{ display: "inline-block", height: "31px", width: "48px" }}
      >
        &nbsp;
      </span>
    </Textbox>
    <Imagegrid
      img1="../static/past-media/009.gif"
      img2="../static/past-media/010.gif"
    />

    <Textbox>
      <H2>Binoculars</H2>
      <Para>
        Binoculars was a student film made by{" "}
        <a href="https://vimeo.com/krfall">Kamryn Fall</a>. I came on board to
        help out with minor Visual Effects plates. The main deliverable was a
        comp for the binoculars that would be a lens for the protagonist to see
        the people around her.
      </Para>
    </Textbox>
    <Image img="../static/past-media/011.gif" />
  </Layout>
);
