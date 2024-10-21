//

// next.config.js
import nextra from "nextra";


const nextConfig = {
  images: {
    unoptimized: true // mandatory, otherwise won't export
  },
  distDir: 'build',
}

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
});

export default withNextra(nextConfig);
