// svgo.config.js
export default {
    multipass: true,
    js2svg: { indent: 2, pretty: true },
    plugins: [
      // --- Core cleanup ---
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
  
      // --- Keep viewBox but remove width/height ---
      {
        name: "removeDimensions",
        active: true,
      },
  
      // --- Remove baked stroke / fill / stroke-width values ---
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
  
      // --- Normalize attributes for token control ---
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
  
      // --- Optional: tidy up IDs / precision ---
      {
        name: "cleanupNumericValues",
        params: {
          floatPrecision: 3,
        },
      },
      {
        name: "prefixIds",
        params: { prefix: false },
      },
    ],
  };
  