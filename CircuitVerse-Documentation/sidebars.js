// @ts-check

/**
 * Creating a sidebar enables you to:
 * - Create an ordered group of docs
 * - Render a sidebar for each doc of that group
 * - Provide next/previous navigation
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Chapter 1: Introduction',
      items: [
        'chapter1/chapter1-introduction',
        'chapter1/chapter1-keyfeatures',
        'chapter1/chapter1-systemrequirments',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 2: Getting Started with CircuitVerse',
      items: [
        'chapter2/chapter2-gettingstarted',
        'chapter2/chapter2-cvforeducators',
        'chapter2/chapter2-lmsintegration',
        'chapter2/chapter2-ssointegration',
        'chapter2/chapter2-bestpracticescv',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 3: Simulator Interface',
      items: [
        'chapter3/chapter3-introduction',
        'chapter3/chapter3-understandingcvsimulator',
        'chapter3/chapter3-quickaccesspanel',
        'chapter3/chapter3-circuitelements',
        'chapter3/chapter3-canvas',
        'chapter3/chapter3-wires',
        'chapter3/chapter3-properties',
        'chapter3/chapter3-circuittabs',
        'chapter3/chapter3-menubar',
        'chapter3/chapter3-reportsystem',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 4: Circuit Elements Library',
      items: [
        'chapter4/chapter4-introduction',
        'chapter4/chapter4-input',
        'chapter4/chapter4-output',
        'chapter4/chapter4-gates',
        'chapter4/chapter4-muxandplex',
        'chapter4/chapter4-sequentialelements',
        'chapter4/chapter4-annotation',
        'chapter4/chapter4-misc',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 5: Subcircuits and Edit Layout',
      items: [
        'chapter5/chapter5-usingsubcircuits',
        'chapter5/chapter5-usingeditlayout',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 6: Timing Diagrams and Delay',
      items: [
        'chapter6/chapter6-delayvsclock',
        'chapter6/chapter6-timingdiagram',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 7: Building Circuit Simulations within CircuitVerse',
      items: [
        'chapter7/chapter7-cvdesignprocess',
        'chapter7/chapter7-buildwithcv',
        'chapter7/chapter7-testcircuits',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 8: Support Resources',
      items: [
        'chapter8/chapter8-onlineforums',
        'chapter8/chapter8-cvfaq',
        'chapter8/chapter8-cverrormessages',
        'chapter8/chapter8-shortcuts',
      ],
    },
  ],
};

export default sidebars;
