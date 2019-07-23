import Head from "next/head";
import Script from "./script";

export default ({
  meta = "product designer",
  titleCase,
  desc = "Product designer available for full-time or contract opportunities."
}) => (
  <Head>
    <meta charSet="utf-8" />
    <title>charles duong | {meta}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <base target="_blank" />
    <meta name="description" content={desc} />
    <meta name="author" content="Charles Duong" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:domain" content="charlesduong.com" />
    <meta name="twitter:site" content="@hicharlesd" />
    <meta
      name="twitter:url"
      content={"http://work.charlesduong.com" + titleCase}
    />
    <meta name="twitter:title" content={"charles duong | " + meta} />
    <meta name="twitter:description" content={desc} />
    <meta
      name="twitter:image:src"
      content={"http://work.charlesduong.com/static" + titleCase + "/hero.png"}
    />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={"charles duong | " + meta} />
    <meta property="og:description" content={desc} />
    <meta
      property="og:url"
      content={"http://work.charlesduong.com" + titleCase}
    />
    <meta property="og:site_name" content="duong.charles" />
    <meta
      property="og:image"
      content={"http://work.charlesduong.com/static" + titleCase + "/hero.png"}
    />
    <link
      rel="apple-touch-icon-precomposed"
      sizes="57x57"
      href="/static/favicon/apple-touch-icon-57x57.png"
    />
    <link
      rel="apple-touch-icon-precomposed"
      sizes="114x114"
      href="/static/favicon/apple-touch-icon-114x114.png"
    />
    <link
      rel="apple-touch-icon-precomposed"
      sizes="72x72"
      href="/static/favicon/apple-touch-icon-72x72.png"
    />
    <link
      rel="apple-touch-icon-precomposed"
      sizes="144x144"
      href="/static/favicon/apple-touch-icon-144x144.png"
    />
    <link
      rel="apple-touch-icon-precomposed"
      sizes="60x60"
      href="/static/favicon/apple-touch-icon-60x60.png"
    />
    <link
      rel="apple-touch-icon-precomposed"
      sizes="120x120"
      href="/static/favicon/apple-touch-icon-120x120.png"
    />
    <link
      rel="apple-touch-icon-precomposed"
      sizes="76x76"
      href="/static/favicon/apple-touch-icon-76x76.png"
    />
    <link
      rel="apple-touch-icon-precomposed"
      sizes="152x152"
      href="/static/favicon/apple-touch-icon-152x152.png"
    />
    <link
      rel="icon"
      type="image/png"
      href="/static/favicon/favicon-196x196.png"
      sizes="favicon/196x196"
    />
    <link
      rel="icon"
      type="image/png"
      href="/static/favicon/favicon-96x96.png"
      sizes="favicon/96x96"
    />
    <link
      rel="icon"
      type="image/png"
      href="/static/favicon/favicon-32x32.png"
      sizes="favicon/32x32"
    />
    <link
      rel="icon"
      type="image/png"
      href="/static/favicon/favicon-16x16.png"
      sizes="favicon/16x16"
    />
    <link
      rel="icon"
      type="image/png"
      href="/static/favicon/favicon-128.png"
      sizes="favicon/128x128"
    />
    <meta name="application-name" content="&nbsp;" />
    <meta name="msapplication-TileColor" content="#FFFFFF" />
    <meta
      name="msapplication-TileImage"
      content="/static/favicon/mstile-144x144.png"
    />
    <meta
      name="msapplication-square70x70logo"
      content="/static/favicon/mstile-70x70.png"
    />
    <meta
      name="msapplication-square150x150logo"
      content="/static/favicon/mstile-150x150.png"
    />
    <meta
      name="msapplication-wide310x150logo"
      content="/static/favicon/mstile-310x150.png"
    />
    <meta
      name="msapplication-square310x310logo"
      content="/static/favicon/mstile-310x310.png"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
    />
    <style>@import "../../static/alice-carousel.css";</style>

    <Script>
      {() => {
        !(function() {
          var analytics = (window.analytics = window.analytics || []);
          if (!analytics.initialize)
            if (analytics.invoked)
              window.console &&
                console.error &&
                console.error("Segment snippet included twice.");
            else {
              analytics.invoked = !0;
              analytics.methods = [
                "trackSubmit",
                "trackClick",
                "trackLink",
                "trackForm",
                "pageview",
                "identify",
                "reset",
                "group",
                "track",
                "ready",
                "alias",
                "debug",
                "page",
                "once",
                "off",
                "on"
              ];
              analytics.factory = function(t) {
                return function() {
                  var e = Array.prototype.slice.call(arguments);
                  e.unshift(t);
                  analytics.push(e);
                  return analytics;
                };
              };
              for (var t = 0; t < analytics.methods.length; t++) {
                var e = analytics.methods[t];
                analytics[e] = analytics.factory(e);
              }
              analytics.load = function(t, e) {
                var n = document.createElement("script");
                n.type = "text/javascript";
                n.async = !0;
                n.src =
                  ("https:" === document.location.protocol
                    ? "https://"
                    : "http://") +
                  "cdn.segment.com/analytics.js/v1/" +
                  t +
                  "/analytics.min.js";
                var o = document.getElementsByTagName("script")[0];
                o.parentNode.insertBefore(n, o);
                analytics.integrationOptions = e;
              };
              analytics.SNIPPET_VERSION = "4.0.1";
              analytics.load("MJ4Uf2u10qVigV7tPzIF0bzGxpK70ZdN");
              analytics.page();
            }
        })();
      }}
    </Script>
  </Head>
);
