import meta from "../../../pages/_meta.js";
import documentation_meta from "../../../pages/documentation/_meta.js";
import documentation_hooks_meta from "../../../pages/documentation/hooks/_meta.js";
export const pageMap = [{
  data: meta
}, {
  name: "documentation",
  route: "/documentation",
  children: [{
    data: documentation_meta
  }, {
    name: "hooks",
    route: "/documentation/hooks",
    children: [{
      data: documentation_hooks_meta
    }, {
      name: "use-local-storage",
      route: "/documentation/hooks/use-local-storage",
      frontMatter: {
        "sidebarTitle": "Use Local Storage"
      }
    }, {
      name: "use-online-status",
      route: "/documentation/hooks/use-online-status",
      frontMatter: {
        "sidebarTitle": "Use Online Status"
      }
    }]
  }, {
    name: "installation",
    route: "/documentation/installation",
    frontMatter: {
      "sidebarTitle": "Installation"
    }
  }, {
    name: "introduction",
    route: "/documentation/introduction",
    frontMatter: {
      "sidebarTitle": "Introduction"
    }
  }]
}, {
  name: "index",
  route: "/",
  frontMatter: {
    "sidebarTitle": "Index"
  }
}];