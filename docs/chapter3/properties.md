---
id: chapter3-properties
title: "Properties"
description: "Properties page in Chapter3 of CircuitVerse documentation."
---

# Properties Panel

Each circuit element has some properties associated with itself which are displayed in the **PROPERTIES** panel. Besides including different parameters for creating multi-bit circuits, it also includes parameters for annotation. the circuit schematic can be annotated by:

- Adding labels across different nodes.
- Including text boxes for displaying the version number, date, amendments and different group members involved.
- Adding rectangular boxes for highlighting different sections for complex designs.

While Figure 3.13 displays the properties associated with an AND gate, Table 3.7 lists the different properties available within the CircuitVerse simulator for different circuit elements.

![drawing](/img/img_chapter3/3.13.png)

<div align="center">
  <em>Figure 3.13</em>
</div>

Table 3.7: Brief description of the different properties available for different circuit elements

<table>
  <tr>
    <td>
      <strong>Property Parameter</strong>
    </td>
    <td>
      <strong>Description</strong>
    </td>
  </tr>
  <tr>
    <td>Project</td>
    <td>Defines the project name that will be displayed in the menu bar</td>
  </tr>
  <tr>
    <td>Circuit</td>
    <td>Identifies the circuit tab that the user is currently working on.</td>
  </tr>
  <tr>
    <td>Clock Time</td>
    <td>
      Toggles the output value at a regular interval. While the default value is
      500 ms, the clock interval can be increased or decreased using the
      stepper.
    </td>
  </tr>
  <tr>
    <td>BitWidth</td>
    <td>
      Specifies the bit width associated with the selected input or output
      circuit element. The bit width numeric stepper changes the bit width size
      from 1 to 32.
    </td>
  </tr>
  <tr>
    <td>Delay</td>
    <td>
      Displays a delay slider to add propagation delays.The delays are
      simulated; but they are virtual and therefore not rendered.
    </td>
  </tr>
  <tr>
    <td>Font Size</td>
    <td>
      Displays a stepper to increase or decrease the font size. The default
      value is 14.
    </td>
  </tr>
  <tr>
    <td>Input Size</td>
    <td>Specifies the input size of the selected circuit element.</td>
  </tr>
  <tr>
    <td>Label</td>
    <td>
      Adds a label for the selected element. For most of the circuit elements,
      the label can be further positioned using the
      <strong> Label Direction</strong> property.
    </td>
  </tr>
  <tr>
    <td>Label Direction</td>
    <td>
      Sets the position of the label for the relevant circuit element. Users can
      choose the desired label direction value from the drop-down menu.
    </td>
  </tr>
  <tr>
    <td>Pin Length</td>
    <td>Displays a slider to set the pin length of the selected element.</td>
  </tr>
  <tr>
    <td>Direction</td>
    <td>
      Sets the direction of the selected element.<sup>*</sup>
    </td>
  </tr>
  <tr>
    <td>Orientation</td>
    <td>
      Sets the pin direction of the selected element.<sup>*</sup>
    </td>
  </tr>
  <tr>
    <td>Buffer Size</td>
    <td>Displays a slider to set the buffer size. Minimum value is 20.</td>
  </tr>
  <tr>
    <td>Columns</td>
    <td>
      Displays a slider to set the number of columns for the selected element.
    </td>
  </tr>
  <tr>
    <td>Rows</td>
    <td>
      Displays a slider to set the number of rows for the selected element.
    </td>
  </tr>
  <tr>
    <td>TestBench Name</td>
    <td>Displays the name of the test bench for the selected element.</td>
  </tr>
</table>

> TIP<sup>\*</sup>: The direction/orientation of the circuit element can be changed using the arrow keys.

## Edit Circuit Layout

As shown in Figure 3.14, the **Edit Layout** button available on the **PROPERTIES** panel converts the circuit into a black box. The circuit elements and the relevant connections are hidden whereas the input and output pins are displayed (in the same order as displayed in the main circuit ).

![drawing](/img/img_chapter3/3.14.png)

<div align="center">
  <em>Figure 3.14</em>
</div>

As required, a user can use the **LAYOUT ELEMENTS** panel to add any circuit elements inside the subcircuit (black box), and the **LAYOUT** panel to edit the layout of the circuit. Refer Figure 3.15. Table 8 provides a brief description of the different settings available on the **LAYOUT** panel.

> NOTE: Circuit layout must be edited before inserting a circuit or completing the wiring connections. If the node positions within the circuit layout are edited after making the wiring connections, then some of the wiring connections across different nodes or ports in the integrated circuit schematic may be lost.

> TIP: Make all the necessary changes within the circuit layout prior to the wiring connections.

![drawing](/img/img_chapter3/3.15.png)

<div align="center">
  <em>Figure 3.15</em>
</div>

Table 3.8: Brief description of the different settings available on the **LAYOUT** panel

<table>
  <tr>
    <td>
      <strong>Setting</strong>
    </td>
    <td>
      <strong>Description</strong>
    </td>
  </tr>
  <tr>
    <td>Width</td>
    <td>
      Displays a numeric stepper to manage the width of the circuit layout.
    </td>
  </tr>
  <tr>
    <td>Height</td>
    <td>
      Displays a numeric stepper to manage the height of the circuit layout.
    </td>
  </tr>
  <tr>
    <td>Reset all nodes</td>
    <td>Resets the nodes to their default position.</td>
  </tr>
  <tr>
    <td>Title Enabled</td>
    <td>
      Displays or hides the title of the subcircuit. By default, the title is
      displayed for each circuit layout.
    </td>
  </tr>
  <tr>
    <td>Title Position</td>
    <td>
      Positions the title at a desired location using the up, down, right and
      left arrows.
    </td>
  </tr>
</table>
