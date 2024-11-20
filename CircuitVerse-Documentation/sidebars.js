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
        { type: 'doc', id: 'chapter1/chapter1-introduction', label: 'Introduction' },
        { type: 'doc', id: 'chapter1/chapter1-keyfeatures', label: 'Key Features' },
        { type: 'doc', id: 'chapter1/chapter1-systemrequirments', label: 'System Requirements' },
      ],
    },
    {
      type: 'category',
      label: 'Chapter 2: Getting Started with CircuitVerse',
      items: [
        { type: 'doc', id: 'chapter2/chapter2-gettingstarted', label: 'Getting Started' },
        { type: 'doc', id: 'chapter2/chapter2-cvforeducators', label: 'CircuitVerse For Educators' },
        { type: 'doc', id: 'chapter2/chapter2-lmsintegration', label: 'Integrate CircuitVerse with LMS' },
        { type: 'doc', id: 'chapter2/chapter2-ssointegration', label: 'Single Sign-On Configurations' },
        { type: 'doc', id: 'chapter2/chapter2-bestpracticescv', label: 'Best Practices For Working With CircuitVerse' },
      ],
    },
    {
      type: 'category',
      label: 'Chapter 3: Simulator Interface',
      items: [
        { type: 'doc', id: 'chapter3/chapter3-introduction', label: 'Introduction' },
        { type: 'doc', id: 'chapter3/chapter3-understandingcvsimulator', label: 'Understanding CircuitVerse Simulator' },
      ],
    },
    {
      type: 'category',
      label: 'Chapter 4: Circuit Elements Library',
      items: [
        { type: 'doc', id: 'chapter4/chapter4-introduction', label: 'Introduction' },
        { type: 'doc', id: 'chapter4/chapter4-input', label: 'Input' },
        { type: 'doc', id: 'chapter4/chapter4-output', label: 'Output' },
        { type: 'doc', id: 'chapter4/chapter4-gates', label: 'Gates' },
        { type: 'doc', id: 'chapter4/chapter4-muxandplex', label: 'Decoders & Plexers' },
        { type: 'doc', id: 'chapter4/chapter4-sequentialelements', label: 'Sequential Elements' },
        { type: 'doc', id: 'chapter4/chapter4-annotation', label: 'Annotation' },
        { type: 'doc', id: 'chapter4/chapter4-misc', label: 'Miscellaneous' },
      ],
    },
    {
      type: 'category',
      label: 'Chapter 5: Subcircuits and Edit Layout',
      items: [
        { type: 'doc', id: 'chapter5/chapter5-usingsubcircuits', label: 'Using Subcircuits' },
        { type: 'doc', id: 'chapter5/chapter5-usingeditlayout', label: 'Using Edit Layout' },
      ],
    },
    {
      type: 'category',
      label: 'Chapter 6: Timing Diagrams and Delay',
      items: [
        { type: 'doc', id: 'chapter6/chapter6-delayvsclock', label: 'Clock Time vs Delay' },
        { type: 'doc', id: 'chapter6/chapter6-timingdiagram', label: 'Timing Diagram' },
      ],
    },
    {
      type: 'category',
      label: 'Chapter 7: Building Circuit Simulations within CircuitVerse',
      items: [
        { type: 'doc', id: 'chapter7/chapter7-cvdesignprocess', label: 'CircuitVerse Design Process' },
        { type: 'doc', id: 'chapter7/chapter7-buildwithcv', label: 'Building Circuit Simulations within CircuitVerse' },
        { type: 'doc', id: 'chapter7/chapter7-testcircuits', label: 'Testing Circuits' },
      ],
    },
    {
      type: 'category',
      label: 'Chapter 8: Support Resources',
      items: [
        { type: 'doc', id: 'chapter8/chapter8-onlineforums', label: 'Online Forums' },
        { type: 'doc', id: 'chapter8/chapter8-cvfaq', label: 'FAQ' },
        { type: 'doc', id: 'chapter8/chapter8-cverrormessages', label: 'Understanding Error Messages' },
        { type: 'doc', id: 'chapter8/chapter8-shortcuts', label: 'Keyboard Shortcuts' },
      ],
    },
  ],
};

export default sidebars;