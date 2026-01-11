---
id: chapter4-input
title: "Input"
description: "Input page in Chapter4 of CircuitVerse documentation."
---

# Input

CircuitVerse features different input elements listed below:

1. [Input](#input)
2. [Button](#button)
3. [Power](#power)
4. [Ground](#ground)
5. [ConstantVal](#constantval)
6. [Stepper](#stepper)
8. [Random](#random)
7. [Counter](#counter)
9. [Pull Resistor](#pull-resistor)

## Input

The **Input** circuit element can have two input states - HIGH or LOW.

Property attributes that can be customized within the **PROPERTIES** panel include **BitWidth**.

You can verify the behavior of the **Input** circuit element (by clicking on the circuit element once) in the live circuit embedded below:

<iframe
  width="500px"
  height="400px"
  src="https://circuitverse.org/simulator/embed/11920"
  id="projectPreview"
  scrolling="no"
  webkitAllowFullScreen
  mozAllowFullScreen
  allowFullScreen
></iframe>

## Button

The **Button** circuit element is a simple push button mechanism for controlling the output of the circuit.

- HIGH when pressed
- LOW when released

You can verify the behavior of the **Button** circuit element in the live circuit embedded below:

<div>
  <iframe
    src="https://circuitverse.org/simulator/embed/untitled-184db5e7-689f-4ce3-9221-467d1830bf16?theme=default&display_title=false&clock_time=true&fullscreen=true&zoom_in_out=true"
    style={{
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "#000",
    }}
    id="projectPreview"
    scrolling="no"
    frameborder="1"
    height="500"
    width="500"
    allowFullScreen
  ></iframe>
</div>

## Power

The **Power** circuit element in the circuit design is always in a HIGH state. This component should be used when there is a need for the input to be always HIGH.

In the live circuit embedded below, multiple LEDs are arranged in the form of "HI". As the LEDs are all connected to the **Power** circuit element, they will always glow.

<iframe
  width="500px"
  height="400px"
  src="https://circuitverse.org/simulator/embed/9554"
  id="projectPreview"
  scrolling="no"
  webkitAllowFullScreen
  mozAllowFullScreen
  allowFullScreen
></iframe>

## Ground

The **Ground** circuit element in the circuit design is always in a LOW state.

While in AC power distribution and some radio antenna systems the “ground” implies a connection to the earth, in digital logic design "ground" is a point in the circuit that the user calls as zero volts. The ground in the circuit is used as a reference for measuring voltages across different points in the circuit.

## ConstantVal

The **ConstantVal** circuit element allows the user to input a constant value (instead of 0 and 1).

<iframe
  width="500px"
  height="400px"
  src="https://www.youtube.com/embed/DON063zxYmcc"
  id="projectPreview"
  scrolling="no"
  webkitAllowFullScreen
  mozAllowFullScreen
  allowFullScreen
></iframe>

As the above example explains, the value of the **ConstantVal** circuit element can be changed by double-clicking the component and entering the value in the prompt.

## Stepper

The value of the **Stepper** circuit element can either be increased or decreased by pressing the "+" key or "-" key on the keyboard to increase or decrease the value.

You can verify the behavior of the **Stepper** circuit element in the live circuit embedded below:

<iframe
  width="600px"
  height="400px"
  src="https://circuitverse.org/simulator/embed/107525"
  id="projectPreview"
  scrolling="no"
  webkitAllowFullScreen
  mozAllowFullScreen
  allowFullScreen
></iframe>

## Random

The **Random** circuit element generates a random value in the range (0, maxvalue) every time it receives a HIGH signal from the clock. It has 3 ports in total:

- **Max Value**: input, maximum value generated.
- **Clock**: input clock element. Every time the clock receives a HIGH input, the random element generates a number.
- **Random Value**: output, the number generated.

The value is also displayed in decimal notation on the random element.

You can verify the behavior of the **Random** circuit element in the live circuit embedded below:

<iframe
  width="600px"
  height="400px"
  src="https://circuitverse.org/simulator/embed/12041"
  id="projectPreview"
  scrolling="no"
  webkitAllowFullScreen
  mozAllowFullScreen
  allowFullScreen
></iframe>

## Counter

The **Counter** circuit element is a binary counter that runs from zero to a specified maximum value. It has five ports in total:

- **Max Value**: input, maximum value that the counter will reach.
- **Clock**: input clock element, every time the clock gets HIGH the counter increments by one.
- **Reset**: input, when HIGH it resets the counter to zero.
- **Zero**: output, it's HIGH when the counter is zero.
- **Value**: output, value of the counter in binary.

The value is also displayed in decimal notation on the counter element.

You can verify the behavior of the Counter circuit element in the live circuit embedded below:

<iframe
  width="500px"
  height="400px"
  src="https://circuitverse.org/simulator/embed/12036"
  id="projectPreview"
  scrolling="no"
  webkitAllowFullScreen
  mozAllowFullScreen
  allowFullScreen
></iframe>



## Pull Resistor

A **Pull Resistor** is a passive circuit element used to stabilize floating inputs by forcing them to a known logic level — either logic high (`1`) or logic low (`0`) — when no active signal is driving the line.

In digital circuits, floating inputs can cause unpredictable behavior. A pull-up or pull-down resistor ensures consistent logic values for such undriven nodes.

> Properties that can be customized in the **PROPERTIES** panel include: `pullDirection`, `Direction`

---

### Pull Resistor Ports

| **Name** | **Description** |
|----------|-----------------|
| `inp`   | The single pin that both receives input and applies the pull logic when the signal is floating (`undefined`) |


---

![Pull Resistor Circuit](/img/img_chapter4/4.27.png)  

---

The Pull Resistor component only activates when the connected input is **floating** (i.e., its value is `undefined`). It does **not override** actively driven signals.

The `pullDirection` property allows users to choose between:
- `Pull-Up` (sets floating input to `1`)
- `Pull-Down` (sets floating input to `0`)

The **Direction** property lets users rotate the component using the **PROPERTIES** panel or the arrow keys.

---

### Example

Consider the following setup:

- An **Input** component is set to logic `1`.
- This input is connected to the **input pin** of a **Tri-State Buffer**.
- A **Button** controls the **enable pin** of the Tri-State Buffer.
- A **Pull Resistor** is connected between the **output** of the Tri-State Buffer and the final **output node**.

| **State**                      | **Output Value** |
|-------------------------------|------------------|
| Button **pressed**            | `1` (from Input via Tri-State Buffer) |
| Button **not pressed**        | Pull Resistor sets output to `0` (Pull-Down) or `1` (Pull-Up), depending on configuration |

This example illustrates how the Pull Resistor provides a **default logic value** when the Tri-State Buffer is **disabled** (output is high-impedance).

This is especially important in circuits where a component may temporarily disconnect from a line, and you still need that line to remain at a defined logic level.


---

<!-- ### Embedded Circuit

An example project demonstrating the Pull Resistor can be viewed using the link below: -->

<!-- **[Pull Resistor Simulation](https://circuitverse.org/simulator/embed/TODO)** -->

