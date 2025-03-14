---
id: chapter4-input
title: "Input"
description: "Input page in Chapter4 of CircuitVerse documentation."
---

# Input

Circuitverse features different input elements listed below:

1. [Input](#input)
2. [Button](#button)
3. [Power](#power)
4. [Ground](#ground)
5. [ConstantVal](#constantval)
6. [Stepper](#stepper)
7. [Counter](#counter)

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

<br />
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
