//

import { useConfig } from 'nextra-theme-docs'

// theme.config.js
export default {
  logo: <b>React Enhanced Hooks</b>,
  project: {
    link: "https://github.com/deep-vadukiya/react-enhanced-hooks",
  },
  docsRepositoryBase:
    "https://github.com/deep-vadukiya/react-enhanced-hooks",
  editLink: { component: null },
  feedback: { content: null },
  footer: {
    component: false
  },
  head() {
    const { frontMatter } = useConfig();

    return (
      <>
        <meta property="og:title" content={frontMatter.title || 'React Enhanced Hooks'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'A collection of useful custom hooks for React web applications.'}
        />
      </>
    )
  }
};
