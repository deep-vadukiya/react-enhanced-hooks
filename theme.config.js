//

import { useConfig } from "nextra-theme-docs";
import {
  GITHUB_PLATFORM_LINK,
  GITHUB_PROFILE_LINK,
  GITHUB_REPOSITORY_LINK,
  VERCEL_PLATFORM_LINK,
} from "./globalLinks";

// theme.config.js
export default {
  logo: <b>React Enhanced Hooks</b>,
  project: {
    link: GITHUB_REPOSITORY_LINK,
  },
  docsRepositoryBase: GITHUB_REPOSITORY_LINK,
  editLink: { component: null },
  feedback: { content: null },
  footer: {
    content: (
      <div>
        <p className="text-sm">
          <span>Powered by&nbsp;</span>
          <a href={GITHUB_PLATFORM_LINK} target="_blank">
            <u>GitHub</u>
          </a>
          &nbsp;and&nbsp;
          <a href={VERCEL_PLATFORM_LINK} target="_blank">
            <u>Vercel.</u>
          </a>
        </p>

        <p className="text-sm">
          <span>Developed and Crafter with 💜 by &nbsp;</span>
          <a href={GITHUB_PROFILE_LINK} target="_blank">
            <u>@deep-vadukiya</u>
          </a>
        </p>
      </div>
    ),
  },
  head() {
    const { frontMatter } = useConfig();

    return (
      <>
        <meta
          property="og:title"
          content={frontMatter.title || "React Enhanced Hooks"}
        />
        <meta
          property="og:description"
          content={
            frontMatter.description ||
            "A collection of useful custom hooks for React web applications."
          }
        />
      </>
    );
  },
};
