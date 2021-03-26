# Building Circuit Simulations within CircuitVerse

In this section, we will build a circuit of a full adder exploring the different stages of building a live circuit within the CircuitVerse simulator. We will start off by creating a circuit of a half adder and insert it as a subcircuit to create a 4-bit full adder. 

- [Building Circuit Simulations within CircuitVerse](#building-circuit-simulations-within-circuitverse)
  - [Create and Save New Project](#create-and-save-new-project)
  - [Create Circuit Using CircuitVerse Simulation](#create-circuit-using-circuitverse-simulation)
  - [Edit Circuit Layout](#edit-circuit-layout)
  - [Insert Subcircuit](#insert-subcircuit)
    - [a. Insert Subcircuit as a CircuitVerse Simulation](#a-insert-subcircuit-as-a-circuitverse-simulation)
    - [b. Insert Circuit Using Verilog Module](#b-insert-circuit-using-verilog-module)
  - [Annotate Circuit](#annotate-circuit)

## Create and Save New Project 

Although the CircuitVerse simulator saves the circuit periodically and any unsaved circuits may be recovered from the browsers memory, the user must create an account and save the CircuitVerse project online for future reference. 

Follow the below steps to create a new project and save the circuit online: 

1. Navigate to [https://circuitverse.org/](https://circuitverse.org/).

2. Click on the **Launch Simulator** button to launch the simulator. Refer Figure 7.1.

    ![drawing](../images/img_chapter7/7.1.png)

    <div align="center"><em>Figure 7.1</em></div>

3. Navigate to the **Quick Access Panel**. Click on either **Save Online**  icon or **Save Offline** icon to receive the** Enter Project Name**: pop-up window for saving the circuit. Refer Figure 7.2. 

    > NOTE: If a project file is saved online,  it is available on the dashboard. Alternatively, any project file that is saved offline, is downloaded to your browser’s local storage.

    ![drawing](../images/img_chapter7/7.2.png)

    <div align="center"><em>Figure 7.2</em></div>

4. If the project is saved online, you will be directed to the **Edit Project** details page for sharing more information about the project (refer Figure 7.3).  

    ![drawing](../images/img_chapter7/7.3.png)

    <div align="center"><em>Figure 7.3</em></div>

    Watch this video for more information on the different fields that can be used for sharing more information about the project.

    <div><iframe>insert saving project video link</iframe></div>.

5. Click **Update Project** to save the project details and return back to the CV simulator window. Refer Figure 7.4.

    ![drawing](../images/img_chapter7/7.4.png)

    <div align="center"><em>Figure 7.4</em></div>

## Create Circuit Using CircuitVerse Simulation 

After successfully creating a CircuitVerse user account, follow the below steps for creating a circuit of a half adder within the CircuitVerse simulator:

6. Navigate to the **CIRCUITS ELEMENTS** panel. Identify the relevant circuit elements and drop them on the canvas. If required, you may search for an element in the search bar. Refer Figure 7.5.

    ![drawing](../images/img_chapter7/7.5.png)

    <div align="center"><em>Figure 7.5</em></div>
  
7. Connect the circuit elements by clicking on one node and dragging the mouse to the other node. Refer to Figure 7.6 for the final circuit connection. 

    > TIP: Hold down Ctrl key. Click on a node and simply move the cursor to the final node to which it needs to be attached. Clicking on the wire will insert a node at that position. Upon reaching the final node, leave the Ctrl key and click on the node to end the wire.

    ![drawing](../images/img_chapter7/7.6.png)

    <div align="center"><em>Figure 7.6</em></div>

8. Select a circuit element. It will be highlighted in yellow as shown in Figure 7.7.

9. Navigate to the **PROPERTIES** panel. Edit the **Label** parameter to add a label for the selected circuit element. Refer Figure 7.7.

    ![drawing](../images/img_chapter7/7.7.png)
    <div align="center"><em>Figure 7.7</em></div>
    
10. Repeat steps 3 and 4 to add labels for the remaining circuit elements as shown in Figure 7.7.

## Edit Circuit Layout

Before inserting a circuit as a subcircuit, the circuit layout must be edited to prevent any loss of wiring connections across different nodes or ports in the integrated circuit schematic may be lost. 

Follow the below steps to view and edit the circuit layout of the half-adder circuit:

11. Navigate to the **PROPERTIES** panel.

12. Click on the **Edit Layout** button to display the circuit layout for the built circuit (refer Figure 7.8).

    ![drawing](../images/img_chapter7/7.8.png)

    <div align="center"><em>Figure 7.8</em></div>

13. The **Edit Layout** screen displays the page as shown in Figure 7.9. The circuit is placed inside a back box. The **LAYOUT** panel displays different options for editing the layout of the circuit. 

    ![drawing](../images/img_chapter7/7.9.png)

    <div align="center"><em>Figure 7.9</em></div>

14. Change the desired settings of the **LAYOUT** panel.

15. Click **Save** to save the layout settings as shown in Figure 7.10.

    ![drawing](../images/img_chapter7/7.10.png)

    <div align="center"><em>Figure 7.10</em></div>

## Insert Subcircuit 
Subcircuits can be nested across other circuit tabs as a CV simulation or as a Verilog module. This section lists the different steps for inserting subcircuits generated as a CV simulation or as a Verilog code.
### a. Insert Subcircuit as a CircuitVerse Simulation
Follow the below steps for building a full adder circuit using two half-adder subcircuits:

16. Click on the add tab icon (refer Figure 7.11) displayed in the circuit tab section. Alternatively, you may also click on **NewCircuit+** selection in the **Circuit** drop-down menu. As shown in Figure 7.11, the **Enter circuit name:** pop up window is displayed.

    ![drawing](../images/img_chapter7/7.11.png)

    <div align="center"><em>Figure 7.11</em></div>

17. Enter a circuit name in the text field as shown in Figure 7.11.

18. Click **OK** to save the circuit name. Refer Figure 7.12.

    ![drawing](../images/img_chapter7/7.12.png)

    <div align="center"><em>Figure 7.12</em></div>

19. Navigate to **Circuit** drop-down menu to select **Insert SubCircuit** from the drop down menu. As shown in Figure 7.13, the **Insert SubCircuit** pop up window is displayed.

   ![drawing](../images/img_chapter7/7.13.png)

   <div align="center"><em>Figure 7.13</em></div>

20. Select the circuit that you wish to insert. Refer Figure 7.14.

   ![drawing](../images/img_chapter7/7.14.png)

   <div align="center"><em>Figure 7.14</em></div>

21. Click the **Insert SubCircuit** button to insert the subcircuit within the **Full Adder** tab (refer Figure 7.14).

22. Repeat the steps from 15 to 20 to add more sub-circuits to your circuit.

    > TIP: Duplicate any circuit by selecting the circuit (CTRL + A), copy the circuit (CTRL + C) and paste the circuit (CTRL + V) in the desired tab or another project file.

23. Refer to Figure 7.15 and complete the wiring connections of the full adder circuit.

    ![drawing](../images/img_chapter7/7.15.png)

     <div align="center"><em>Figure 7.15</em></div>


### b. Insert Circuit Using Verilog Module

If required, a user can also insert a Verilog module as a subcircuit. Follow the below steps to insert a circuit layout constructed using a verilog module:

1. Navigate to **Circuit** drop-down menu to select **New Verilog Module** from the drop down menu. As shown in Figure 7.16, the **Enter circuit name** pop up window is displayed.

    ![drawing](../images/img_chapter7/7.16.png)

    <div align="center"><em>Figure 7.16</em></div>

2. Enter a circuit tab name in the text field. Refer Figure 7.16.

3. Click **OK **to launch the Verilog code interface window as shown in Figure 7.17.

    ![drawing](../images/img_chapter7/7.17.png)

    <div align="center"><em>Figure 7.17</em></div>

4. Enter the desired Verilog code in the module interface. Refer Figure 7.18.

   ![drawing](../images/img_chapter7/7.18.png)

   <div align="center"><em>Figure 7.18</em></div>

5. Click on the **Save Code** button to receive the message that the code has been saved successfully. Refer Figure 7.19.

   ![drawing](../images/img_chapter7/7.19.png)

   <div align="center"><em>Figure 7.19</em></div>

## Annotate Circuit

Follow the below steps to annotate the final circuit diagram:

24. Navigate to the **Misc** section of the **CIRCUIT ELEMENTS** panel as shown in Figure 7.20.

    ![drawing](../images/img_chapter7/7.20.png)

    <div align="center"><em>Figure 7.20</em></div>

25. Drag the **Text Tool** element on the canvas as shown in Figure 7.21.

    ![drawing](../images/img_chapter7/7.21.png)

    <div align="center"><em>Figure 7.21</em></div>

26. Navigate to the **PROPERTIES** panel to edit the **Label:** text field as shown in Figure 7.21. 

27. Repeat steps 24 to 26 to add more annotation elements. In Figure 7.22, a **Rectangle Tool** element has been added to highlight the structural relationship across different elements .

    ![drawing](../images/img_chapter7/7.22.png)

    <div align="center"><em>Figure 7.22</em></div>