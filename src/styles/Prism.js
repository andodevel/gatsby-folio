import { css } from 'styled-components';
import Theme from './Theme';
const { colors, fontSizes, fonts } = Theme;

// TODO: Create new scheme for Prism in Colors.js
const prismColors = {
  bg: `#112340`,
  lineHighlight: `#1d2d50`,
  blue: `#5ccfe6`,
  purple: `#c3a6ff`,
  green: `#bae67e`,
  yellow: `#ffd580`,
  orange: `#ffae57`,
  red: `#ef6b73`,
  grey: `#a2aabc`,
  comment: `#8695b799`,
};

const Prism = css`
  .gatsby-highlight {
    background-color: ${prismColors.bg};
    color: ${prismColors.variable};
    border-radius: ${Theme.borderRadius};
    margin: 2rem 0rem;
    padding: 1.25rem;
    overflow: auto;
    position: relative;
    font-family: ${fonts.SFMono};
    font-size: ${fontSizes.md};
  }

  .gatsby-highlight code[class*="language-"],
  .gatsby-highlight pre[class*="language-"] {
    height: auto !important;
    font-size: ${fontSizes.sm};
    line-height: 1.5;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    tab-size: 2;
    hyphens: none;
  }

  .gatsby-highlight pre[class*="language-"] {
    background-color: transparent;
    margin: 0;
    padding: 0;
    overflow: initial;
    float: left;
    min-width: 100%;
    padding-top: 2rem;
  }

  /* File names */
  .gatsby-code-title {
    padding: 1rem 1.5rem;
    font-family: ${fonts.SFMono};
    font-size: ${fontSizes.smish};
    background-color: ${prismColors.bg};
    color: ${prismColors.grey};
    border-top-left-radius: ${Theme.borderRadius};
    border-top-right-radius: ${Theme.borderRadius};
    border-bottom: 0.1rem solid ${prismColors.lineHighlight};

    & + .gatsby-highlight {
      margin-top: 0;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }

  /* Line highlighting */
  .gatsby-highlight-code-line {
    display: block;
    background-color: ${prismColors.lineHighlight};
    border-left: 0.2rem solid ${colors.green};
    padding-left: calc(1rem + 0.2rem);
    padding-right: 1rem;
    margin-right: -1.35rem;
    margin-left: -1.35rem;
  }

  /* Language badges */
  .gatsby-highlight pre[class*="language-"]::before {
    background: ${colors.mediumGrey};
    color: ${colors.offWhite};
    font-size: ${fontSizes.xs};
    font-family: ${fonts.SFMono};
    line-height: 1.5;
    letter-spacing: 0.1;
    text-transform: uppercase;
    border-radius: 0 0 0.3rem 0.3rem;
    position: absolute;
    top: 0;
    left: 1.25rem;
    padding: 0.25rem 0.5rem;
  }
  .gatsby-highlight pre[class="language-javascript"]::before {
    content: "js";
  }
  .gatsby-highlight pre[class="language-js"]::before {
    content: "js";
  }
  .gatsby-highlight pre[class="language-jsx"]::before {
    content: "jsx";
  }
  .gatsby-highlight pre[class="language-graphql"]::before {
    content: "GraphQL";
  }
  .gatsby-highlight pre[class="language-html"]::before {
    content: "html";
  }
  .gatsby-highlight pre[class="language-css"]::before {
    content: "css";
  }
  .gatsby-highlight pre[class="language-mdx"]::before {
    content: "mdx";
  }
  .gatsby-highlight pre[class="language-shell"]::before {
    content: "shell";
  }
  .gatsby-highlight pre[class="language-sh"]::before {
    content: "sh";
  }
  .gatsby-highlight pre[class="language-bash"]::before {
    content: "bash";
  }
  .gatsby-highlight pre[class="language-yaml"]::before {
    content: "yaml";
  }
  .gatsby-highlight pre[class="language-markdown"]::before {
    content: "md";
  }
  .gatsby-highlight pre[class="language-json"]::before,
  .gatsby-highlight pre[class="language-json5"]::before {
    content: "json";
  }
  .gatsby-highlight pre[class="language-diff"]::before {
    content: "diff";
  }
  .gatsby-highlight pre[class="language-text"]::before {
    content: "text";
  }
  .gatsby-highlight pre[class="language-flow"]::before {
    content: "flow";
  }

  /* Prism Styles */
  .token {
    display: inline;
  }
  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: ${prismColors.comment};
  }
  .token.punctuation {
    color: ${prismColors.grey};
  }
  .token.namespace,
  .token.deleted {
    color: ${prismColors.red};
  }
  .token.function-name,
  .token.function,
  .token.class-name,
  .token.constant,
  .token.symbol {
    color: ${prismColors.yellow};
  }
  .token.attr-name,
  .token.operator,
  .token.rule {
    color: ${prismColors.orange};
  }
  .token.keyword,
  .token.boolean,
  .token.number,
  .token.property {
    color: ${prismColors.purple};
  }
  .token.tag,
  .token.selector,
  .token.important,
  .token.atrule,
  .token.builtin,
  .token.entity,
  .token.url {
    color: ${prismColors.blue};
  }
  .token.string,
  .token.char,
  .token.attr-value,
  .token.regex,
  .token.variable,
  .token.inserted {
    color: ${prismColors.green};
  }
  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }
  .token.entity {
    cursor: help;
  }
  .namespace {
    opacity: 0.7;
  }
`;

export default Prism;
