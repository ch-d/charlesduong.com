import Layout from "../../components/case-study/Layout";
import Image from "../../components/case-study/Image";
import ImagesTwo from "../../components/case-study/ImagesTwo";
import { H2, Para } from "../../components/case-study/Typography";
import TextBox from "../../components/case-study/TextBox";

export default () => (
  <Layout
    title="Past Media"
    titleCase="/past-media"
    desc="Prior to 2015, while taking Mechanical Engineering courses, I was missing an outlet for my creativity. I ended up teaching myself VFX techniques, film post-production, and graphic design, while working on several side projects. These projects satisfied my need to build things and tell stories, before I began settling down with a more agile medium of web design."
    color="turquoise"
    introTitle="Past Media"
    subTitleLabel="2011 - 2014"
    subTitleItem=""
    intro={[
      "Prior to 2015, while taking Mechanical Engineering courses, I was missing an outlet for my creativity. I ended up teaching myself VFX techniques, film post-production, and graphic design, while working on several side projects. These projects satisfied my need to build things and tell stories, before I began settling down with a more agile medium of web design."
    ]}
    categories={[""]}
    hasContainer
  >
    <Image src="../static/past-media/hero.png" />

    <TextBox>
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
    </TextBox>
    <ImagesTwo
      images={[
        { src: "../static/past-media/001.gif" },
        { src: "../static/past-media/002.gif" }
      ]}
    />
    <ImagesTwo
      images={[
        { src: "../static/past-media/003.gif" },
        { src: "../static/past-media/004.gif" }
      ]}
    />

    <TextBox>
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
    </TextBox>
    <ImagesTwo
      images={[
        { src: "../static/past-media/005.gif" },
        { src: "../static/past-media/006.gif" }
      ]}
    />
    <ImagesTwo
      images={[
        { src: "../static/past-media/007.gif" },
        { src: "../static/past-media/008.gif" }
      ]}
    />

    <TextBox>
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
    </TextBox>
    <ImagesTwo
      images={[
        { src: "../static/past-media/009.gif" },
        { src: "../static/past-media/010.gif" }
      ]}
    />

    <TextBox>
      <H2>Binoculars</H2>
      <Para>
        Binoculars was a student film made by{" "}
        <a href="https://vimeo.com/krfall">Kamryn Fall</a>. I came on board to
        help out with minor Visual Effects plates. The main deliverable was a
        comp for the binoculars that would be a lens for the protagonist to see
        the people around her.
      </Para>
    </TextBox>
    <Image src="../static/past-media/011.gif" />
  </Layout>
);
