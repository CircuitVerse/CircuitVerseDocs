---
id: chapter4-muxandplex
title: "Muxandplex"
description: "Muxandplex page in Chapter4 of CircuitVerse documentation."
---

# Decoders & Plexers

CircuitVerse features the following circuit elements in this category:

1. [Multiplexer](#multiplexer)
2. [Demultiplexer](#demultiplexer)
3. [BitSelector](#bitselector)
4. [Most Significant Bit (MSB) Detector](#most-significant-bit-msb-detector)
5. [Least Significant Bit (LSB) Detector](#least-significant-bit-lsb-detector)
6. [Priority Encoder](#priority-encoder)
7. [Decoder](#decoder)
8. [Parity Generator & Parity Detector](#parity-generator--parity-detector)

## Multiplexer

A **Multiplexer** selectively passes only one of the inputs provided to it using a control signal. The number of inputs is always a power of 2. If there are N control bits, then there can be a maximum of 2^N inputs.

> Properties that can be customized in the **PROPERTIES** panel include: **BitWidth, Control Signal Size**

Consider a 2 to 1 multiplexer that takes two single-bit inputs (T1 and T2), a single-bit control signal (S) and has an output (Out). Using Table 4.1, you can verify the behavior of a 2 to 1 multiplexer.

Table 4.1: Truth table of a 2 to 1 multiplexer

<table>
  <tr>
    <td><strong>S</strong></td>
    <td><strong>Out</strong></td>
  </tr>
  <tr>
    <td>0</td>
    <td>T1</td>
  </tr>
  <tr>
    <td>1</td>
    <td>T2</td>
  </tr>
</table>

<iframe
  width="600px"
  height="400px"
  src="https://circuitverse.org/simulator/embed/746"
  id="projectPreview"
  scrolling="no"
  webkitAllowFullScreen
  mozAllowFullScreen
  allowFullScreen
>
  {" "}
</iframe>

Using Table 4.2, you can verify the behavior of the **Multiplexer** circuit element in the live circuit of a 4 to 1 multiplexer embedded below:

Table 4.2: Truth table of a 4 to 1 multiplexer

<table>
  <tr>
    <td><strong>S1</strong></td>
    <td><strong>S0</strong></td>
    <td><strong>Out</strong></td>
  </tr>
  <tr>
    <td>0</td>
    <td>0</td>
    <td>T1</td>
  </tr>
  <tr>
    <td>0</td>
    <td>1</td>
    <td>T2</td>
  </tr>
  <tr>
    <td>1</td>
    <td>0</td>
    <td>T3</td>
  </tr>
  <tr>
    <td>1</td>
    <td>1</td>
    <td>T4</td>
  </tr>
</table>

<iframe
  width="600px"
  height="400px"
  src="https://circuitverse.org/simulator/embed/747"
  id="projectPreview"
  scrolling="no"
  webkitAllowFullScreen
  mozAllowFullScreen
  allowFullScreen
>
  {" "}
</iframe>

## Demultiplexer

A **Demultiplexer** takes an input and passes it to only one of outputs using a control signal. The number of outputs is always a power of 2. If there are N control bits, we can choose to pass the output to any one of the 2^N output lines.

> Properties that can be customized in the **PROPERTIES** panel include: **BitWidth, Control Signal Size**

In the live circuit embedded below, a 1 to 2 demultiplexer takes in a single-bit input (T), a single-bit control signal (S) and two single-bit outputs (O1 and O2). Table 4.3 displays the truth table of a 1 to 2 demultiplexer.

Table 4.3: Truth table of a 1 to 2 demultiplexer

<table>
  <tr>
    <td><strong>S</strong></td>
    <td><strong>O1</strong></td>
    <td><strong>O2</strong></td>
  </tr>
  <tr>
    <td>0</td>
    <td>T</td>
    <td>0</td>
  </tr>
  <tr>
    <td>1</td>
    <td>0</td>
    <td>T</td>
  </tr>
</table>

<iframe
  width="600px"
  height="400px"
  src="https://circuitverse.org/simulator/embed/756"
  id="projectPreview"
  scrolling="no"
  webkitAllowFullScreen
  mozAllowFullScreen
  allowFullScreen
>
  {" "}
</iframe>

In another example of a live circuit embedded below, a 1 to 4 demultiplexer takes in a three-bit input and a two-bit control signal. Table 4.4 displays the truth table of a 1 to 4 demultiplexer.

Table 4.4: Truth table of a 1 to 4 demultiplexer

<table>
  <tr>
    <td><strong>S1</strong></td>
    <td><strong>S0</strong></td>
    <td><strong>O1</strong></td>
    <td><strong>O2</strong></td>
    <td><strong>O3</strong></td>
    <td><strong>O4</strong></td>
  </tr>
  <tr>
    <td>0</td>
    <td>0</td>
    <td>T</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>0</td>
    <td>1</td>
    <td>0</td>
    <td>T</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>1</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>T</td>
    <td>0</td>
  </tr>
  <tr>
    <td>1</td>
    <td>1</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>T</td>
  </tr>
</table>

<iframe
  width="600px"
  height="400px"
  src="https://circuitverse.org/simulator/embed/757"
  id="projectPreview"
  scrolling="no"
  webkitAllowFullScreen
  mozAllowFullScreen
  allowFullScreen
>
  {" "}
</iframe>

## BitSelector

As its name suggests, the **BitSelector** circuit element takes a single or multi-bit input and outputs the bit that must be isolated using a single or multi-bit select line. The select line value indicates the specific bit that must be isolated within its body in decimal form.

> Properties that can be customized in the **PROPERTIES** panel include: **BitWidth, Selector Bit Width**

In the live circuit embedded below, a **BitSelector** with a four-bit input is used. Each of its bits can be addressed separately as T3, T2, T1, T0 (from most significant to least significant). It also includes a two-bit select line (S1 and S0) and a single-bit output (Out). Table 4.5 displays the truth table of a four-bit BitSelector.

Table 4.5: Truth table of a four-bit bit selector

<table>
  <tr>
    <td><strong>S1</strong></td>
    <td><strong>S0</strong></td>
    <td><strong>Out</strong></td>
  </tr>
  <tr>
    <td>0</td>
    <td>0</td>
    <td>T0</td>
  </tr>
  <tr>
    <td>0</td>
    <td>1</td>
    <td>T1</td>
  </tr>
  <tr>
    <td>1</td>
    <td>0</td>
    <td>T2</td>
  </tr>
  <tr>
    <td>1</td>
    <td>1</td>
    <td>T3</td>
  </tr>
</table>

<iframe
  width="600px"
  height="400px"
  src="https://circuitverse.org/simulator/embed/758"
  id="projectPreview"
  scrolling="no"
  webkitAllowFullScreen
  mozAllowFullScreen
  allowFullScreen
>
  {" "}
</iframe>

## Most Significant Bit (MSB) Detector

The **Most Significant Bit (MSB)** detector circuit element outputs the bit position of the most significant bit of the input. In other words, it outputs the bit position of the rightmost bit. An enable output is also provided to show if the MSB detector is active. The bit position of the MSB is also shown in decimal form within the body of the MSB detector.

You can verify the behavior of the **Most Significant Bit (MSB)** detector circuit element with a four-bit input in the live circuit embedded below:

<iframe
  width="600px"
  height="400px"
  src="https://circuitverse.org/simulator/embed/11988"
  id="projectPreview"
  scrolling="no"
  webkitAllowFullScreen
  mozAllowFullScreen
  allowFullScreen
>
  {" "}
</iframe>

## Least Significant Bit (LSB) Detector

The **Least Significant Bit (LSB)** detector circuit element outputs the bit position of the least significant bit of the input. In other words, it outputs the bit position of the leftmost bit. An enable output is also provided to show if the LSB detector is active. The bit position of the LSB is also shown in decimal form within the body of the LSB detector.

You can verify the behavior of the **Least Significant Bit (LSB)** detector circuit element with a four-bit input in the live circuit embedded below:

<iframe
  width="600px"
  height="400px"
  src="https://circuitverse.org/simulator/embed/11990"
  id="projectPreview"
  scrolling="no"
  webkitAllowFullScreen
  mozAllowFullScreen
  allowFullScreen
>
  {" "}
</iframe>

## Priority Encoder

The **Priority Encoder** circuit element works similarly to the **MSB and LSB** detectors. There is a specific output based on the bit position of the MSB, irrespective of the lesser significant bits. An enable input is also provided to activate/deactivate the priority encoder. If there are N outputs, there will be 2^N inputs.

In the live circuit embedded below, a **Priority Encoder** with four single-bit inputs (T3, T2, T1, and T0 from most to least-significant bit) and two single-bit outputs (O2 and O1 from most to least-significant bit). Table 4.6 displays the truth table of the four-input priority encoder.

> Properties that can be customized in the **PROPERTIES** panel include: **BitWidth**

Table 4.6: Truth table of a four-input priority encoder

<table>
  <tr>
    <td><strong>T3</strong></td>
    <td><strong>T2</strong></td>
    <td><strong>T1</strong></td>
    <td><strong>T0</strong></td>
    <td><strong>O2</strong></td>
    <td><strong>O1</strong></td>
  </tr>
  <tr>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>1</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>0</td>
    <td>0</td>
    <td>1</td>
    <td>X</td>
    <td>0</td>
    <td>1</td>
  </tr>
  <tr>
    <td>0</td>
    <td>1</td>
    <td>X</td>
    <td>X</td>
    <td>1</td>
    <td>0</td>
  </tr>
  <tr>
    <td>1</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>1</td>
    <td>1</td>
  </tr>
</table>

<iframe
  width="600px"
  height="400px"
  src="https://circuitverse.org/simulator/embed/762"
  id="projectPreview"
  scrolling="no"
  webkitAllowFullScreen
  mozAllowFullScreen
  allowFullScreen
>
  {" "}
</iframe>

## Decoder

The **Decoder** circuit element includes N input bits and has 2^N output lines.

In the live circuit embedded below, a **Decoder** with a single two-bit input (T1 and T0 from most to least-significant bit) and four single-bit output lines (O4, O3, O2, and O1 from most to least-significant bit). For the input values set in T1 and T0, the corresponding output line (O4, O3, O2, and O1) is HIGH. Table 4.7 displays the truth table for a two-bit decoder.

> Properties that can be customized in the **PROPERTIES** panel include: **BitWidth**

Table 4.7: Truth table of a two-bit decoder

<table>
  <tr>
    <td><strong>T1</strong></td>
    <td><strong>T0</strong></td>
    <td><strong>O4</strong></td>
    <td><strong>O3</strong></td>
    <td><strong>O2</strong></td>
    <td><strong>O1</strong></td>
  </tr>
  <tr>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>1</td>
  </tr>
  <tr>
    <td>0</td>
    <td>1</td>
    <td>0</td>
    <td>0</td>
    <td>1</td>
    <td>0</td>
  </tr>
  <tr>
    <td>1</td>
    <td>0</td>
    <td>0</td>
    <td>1</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>1</td>
    <td>1</td>
    <td>1</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
</table>

<iframe
  width="600px"
  height="400px"
  src="https://circuitverse.org/simulator/embed/763"
  id="projectPreview"
  scrolling="no"
  webkitAllowFullScreen
  mozAllowFullScreen
  allowFullScreen
>
  {" "}
</iframe>

## Parity Generator & Parity Detector

The **Parity Generator** and **Parity Detector** combinational circuit elements are used together for error-tolerant data transmission. The **Parity Generator** circuit element is used by the sender, and the **Parity Detector** circuit element is used by the receiver.

### Parity Generator

The **Parity Generator** circuit element generates a parity bit which is later used by parity detectors to detect errors in data transmission. The parity bit is added to the original message that must be sent.

If the input message of an even parity generator has an even number of `1`s, the parity bit will be 0. On the other hand, if there are an odd number of `1`s, the parity bit generated will be 1. Table 4.8 displays the truth table for an even three-bit input parity generator.

Table 4.8: Truth table for an even three-bit parity generator

<table>
  <tr>
    <td><strong>A</strong></td>
    <td><strong>B</strong></td>
    <td><strong>C</strong></td>
    <td><strong>PARITY BIT (P)</strong></td>
  </tr>
  <tr>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>0</td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>0</td>
    <td>1</td>
    <td>0</td>
    <td>1</td>
  </tr>
  <tr>
    <td>0</td>
    <td>1</td>
    <td>1</td>
    <td>0</td>
  </tr>
  <tr>
    <td>1</td>
    <td>0</td>
    <td>0</td>
    <td>1</td>
  </tr>
  <tr>
    <td>1</td>
    <td>0</td>
    <td>1</td>
    <td>0</td>
  </tr>
  <tr>
    <td>1</td>
    <td>1</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>1</td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
  </tr>
</table>

If the input message of an odd parity generator has an even number of `1`s, the parity bit will be 1. Alternatively, if there are an odd number of `1`s, the parity bit generated will be 0. The parity bit generated is then added to the message to be sent. Table 4.9 displays the truth table for an odd three-bit input parity generator.

Table 4.9: Truth table for an odd three-bit parity generator

<table>
  <tr>
    <td><strong>A</strong></td>
    <td><strong>B</strong></td>
    <td><strong>C</strong></td>
    <td><strong>PARITY BIT (P)</strong></td>
  </tr>
  <tr>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>1</td>
  </tr>
  <tr>
    <td>0</td>
    <td>0</td>
    <td>1</td>
    <td>0</td>
  </tr>
  <tr>
    <td>0</td>
    <td>1</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>0</td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>1</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>1</td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>1</td>
    <td>1</td>
    <td>0</td>
    <td>1</td>
  </tr>
  <tr>
    <td>1</td>
    <td>1</td>
    <td>1</td>
    <td>0</td>
  </tr>
</table>

### Parity Detector

The **Parity Detector** circuit element receives the message and checks it for errors. If an error is detected, the parity error check bit gives `1` as output and `0` when no error is detected. Table 4.10 and Table 4.11 display the truth tables for an even and odd three-bit input parity detector, respectively.

<table>
  <tr>
    <td><strong>A</strong></td>
    <td><strong>B</strong></td>
    <td><strong>C</strong></td>
    <td><strong>P</strong></td>
    <td><strong>PARITY ERROR CHECK</strong></td>
  </tr>
  <tr>
    <td>0</td><td>0</td><td>0</td><td>1</td><td>1</td>
  </tr>
  <tr>
    <td>0</td><td>0</td><td>1</td><td>0</td><td>1</td>
  </tr>
  <tr>
    <td>0</td><td>0</td><td>1</td><td>1</td><td>0</td>
  </tr>
  <tr>
    <td>0</td><td>1</td><td>0</td><td>0</td><td>1</td>
  </tr>
  <tr>
    <td>0</td><td>1</td><td>0</td><td>1</td><td>0</td>
  </tr>
  <tr>
    <td>0</td><td>1</td><td>1</td><td>0</td><td>0</td>
  </tr>
  <tr>
    <td>0</td><td>1</td><td>1</td><td>1</td><td>1</td>
  </tr>
  <tr>
    <td>1</td><td>0</td><td>0</td><td>0</td><td>1</td>
  </tr>
  <tr>
    <td>1</td><td>0</td><td>0</td><td>1</td><td>0</td>
  </tr>
  <tr>
    <td>1</td><td>0</td><td>1</td><td>0</td><td>0</td>
  </tr>
  <tr>
    <td>1</td><td>0</td><td>1</td><td>1</td><td>1</td>
  </tr>
  <tr>
    <td>1</td><td>1</td><td>0</td><td>0</td><td>0</td>
  </tr>
  <tr>
    <td>1</td><td>1</td><td>0</td><td>1</td><td>1</td>
  </tr>
  <tr>
    <td>1</td><td>1</td><td>1</td><td>0</td><td>1</td>
  </tr>
  <tr>
    <td>1</td><td>1</td><td>1</td><td>1</td><td>0</td>
  </tr>
</table>

<br></br>
<table>
  <tr>
    <td><strong>A</strong></td>
    <td><strong>B</strong></td>
    <td><strong>C</strong></td>
    <td><strong>P</strong></td>
    <td><strong>PARITY ERROR CHECK</strong></td>
  </tr>
  <tr>
    <td>0</td><td>0</td><td>0</td><td>0</td><td>1</td>
  </tr>
  <tr>
    <td>0</td><td>0</td><td>0</td><td>1</td><td>0</td>
  </tr>
  <tr>
    <td>0</td><td>0</td><td>1</td><td>0</td><td>0</td>
  </tr>
  <tr>
    <td>0</td><td>0</td><td>1</td><td>1</td><td>1</td>
  </tr>
  <tr>
    <td>0</td><td>1</td><td>0</td><td>0</td><td>0</td>
  </tr>
  <tr>
    <td>0</td><td>1</td><td>0</td><td>1</td><td>1</td>
  </tr>
  <tr>
    <td>0</td><td>1</td><td>1</td><td>0</td><td>1</td>
  </tr>
  <tr>
    <td>0</td><td>1</td><td>1</td><td>1</td><td>0</td>
  </tr>
  <tr>
    <td>1</td><td>0</td><td>0</td><td>0</td><td>0</td>
  </tr>
  <tr>
    <td>1</td><td>0</td><td>0</td><td>1</td><td>1</td>
  </tr>
  <tr>
    <td>1</td><td>0</td><td>1</td><td>0</td><td>1</td>
  </tr>
  <tr>
    <td>1</td><td>0</td><td>1</td><td>1</td><td>0</td>
  </tr>
  <tr>
    <td>1</td><td>1</td><td>0</td><td>0</td><td>1</td>
  </tr>
  <tr>
    <td>1</td><td>1</td><td>0</td><td>1</td><td>0</td>
  </tr>
  <tr>
    <td>1</td><td>1</td><td>1</td><td>0</td><td>0</td>
  </tr>
  <tr>
    <td>1</td><td>1</td><td>1</td><td>1</td><td>1</td>
  </tr>
</table>

Although the parity detector can detect most errors, some of its limitations include:

- Error is detected only if there are an odd number of error bits.
- Error in parity bit might lead to error detection despite correct transmission.
- Parity detector will not be able to detect errors where both parity and data bits have such an error that matches the parity bit.

You can verify the same in the live circuit embedded below:

<iframe
  width="600px"
  height="400px"
  src="https://circuitverse.org/simulator/embed/109517"
  id="projectPreview"
  scrolling="no"
  webkitAllowFullScreen
  mozAllowFullScreen
  allowFullScreen
></iframe>