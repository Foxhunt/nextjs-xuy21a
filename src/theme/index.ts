import { createSystem, defaultConfig } from "@chakra-ui/react";

export default createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: "sans-serif" },
        body: { value: "sans-serif" },
      },
    },
  },
});
