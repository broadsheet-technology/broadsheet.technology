import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

export const config: Config = {
  namespace: "broadsheet",
  outputTargets: [
    {
      type: "www",
      serviceWorker: null, // disable service workers,
      buildDir: "app",
      dir: "bin/wp-content/themes/broadsheet.technology/",
      copy: [
        { src: "style.css" },
        { src: "index.php" },
        { src: "theme-definition.json" },
        {
          src: "../node_modules/@webpress/core/dist/collection/theme-overlay/functions.php",
          dest: "functions.php",
        },
        {
          src: "../node_modules/@webpress/core/dist/collection/theme-overlay/etc",
          dest: "etc",
        },
      ],
    },
  ],
  plugins: [sass({})],
};
