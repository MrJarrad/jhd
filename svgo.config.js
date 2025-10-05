// svgo.config.js
export default {
    multipass: true,
    js2svg: { indent: 2, pretty: true },
    plugins: [
      // Remove extra metadata / editors' cruft
      "cleanupAttrs",
      "removeDoctype",
      "removeXMLProcInst",
      "removeComments",
      "removeMetadata",
      "removeTitle",
      "removeDesc",
      "removeUselessDefs",
      "removeEditorsNSData",
      "removeHiddenElems",
      "removeEmptyText",
      "removeEmptyContainers",
      // Keep viewBox but remove explicit width/height
      {
        name: "removeDimensions",
        active: true,
      },
      // Remove baked fill / stroke attributes
      {
        name: "removeAttrs",
        params: {
          attrs: [
            "stroke",
            "fill",
            "stroke-width",
            "stroke-linecap",
            "stroke-linejoin",
            "color",
          ],
        },
      },
      // Ensure rounded caps / joins and consistent viewBox
      {
        name: "addAttributesToSVGElement",
        params: {
          attributes: [
            { stroke: "currentColor" },
            { fill: "none" },
            { "stroke-linecap": "round" },
            { "stroke-linejoin": "round" },
            { viewBox: "0 0 32 32" },
          ],
        },
      },
    ],
  };
  