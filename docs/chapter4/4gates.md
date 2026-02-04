---
id: chapter4-gates
title: "Gates"
description: "Gates page in Chapter4 of CircuitVerse documentation."
---

# Gates

CircuitVerse features the following gates in the circuit elements library:

- [Gates](#gates)
  - [AND Gate](#and-gate)
  - [OR Gate](#or-gate)
  - [NOT Gate](#not-gate)
  - [XOR Gate](#xor-gate)
  - [NAND Gate](#nand-gate)
  - [NOR Gate](#nor-gate)
  - [XNOR Gate](#xnor-gate)

> Properties that can be customized in the **PROPERTIES** panel include: **Bit Width, Input Size, Direction**

> TIP: Direction of any gate can be changed within the CircuitVerse simulator by either using the up, down, right, left arrow keys or by changing the **Direction** property parameter in the **PROPERTIES** panel.

Each of the gates included in the CircuitVerse library can be customized for multiple input size and multiple bitwidth. Users can create:

- Multi-input gate by changing the **Input Size** property parameter in the **PROPERTIES** panel. You can verify the behavior of a multi-input **AND gate** in the live circuit embedded below:

<iframe
  width="300px"
  height="200px"
  src="https://circuitverse.org/simulator/embed/735"
  id="projectPreview"
  scrolling="no"
  webkitAllowFullScreen
  mozAllowFullScreen
  allowFullScreen
>
  {" "}
</iframe>

- Multi-bitwidth AND gate by changing the **BitWidth** property parameter in the **PROPERTIES** panel. You can verify the behavior of a multi-bitwidth **AND gate** in the live circuit embedded below:

<iframe
  width="300px"
  height="200px"
  src="https://circuitverse.org/simulator/embed/736"
  id="projectPreview"
  scrolling="no"
  webkitAllowFullScreen
  mozAllowFullScreen
  allowFullScreen
>
  {" "}
</iframe>

## AND Gate

AND gate gives a HIGH output only if all input values are HIGH.  
**Boolean Expression:** `Y = A · B`  

Table 4.25: Two-input AND gate truth table
| A (Input 1) | B (Input 2) | Y = (A · B) |
| ----------- | ----------- | ----------- |
| 0           | 0           | 0           |
| 0           | 1           | 0           |
| 1           | 0           | 0           |
| 1           | 1           | 1           |


You can verify the behavior of the **AND gate** circuit element in the live circuit of a two-input AND gate embedded below:

<iframe
  width="300px"
  height="200px"
  src="https://circuitverse.org/simulator/embed/734"
  id="projectPreview"
  scrolling="no"
  webkitAllowFullScreen
  mozAllowFullScreen
  allowFullScreen
>
  {" "}
</iframe>

## OR Gate

OR gate produces a HIGH output only if any of the input values are HIGH.  
**Boolean Expression:** `Y = A + B`

Table 4.26: Two-input OR gate truth table

| A (Input 1) | B (Input 2) | Y = (A + B) |
| ----------- | ----------- | ----------- |
| 0           | 0           | 0           |
| 0           | 1           | 1           |
| 1           | 0           | 1           |
| 1           | 1           | 1           |

You can verify the behavior of an **OR gate** circuit element in the live circuit embedded below:

<iframe
  width="300px"
  height="200px"
  src="https://circuitverse.org/simulator/embed/737"
  id="projectPreview"
  scrolling="no"
  webkitAllowFullScreen
  mozAllowFullScreen
  allowFullScreen
>
  {" "}
</iframe>

## NOT Gate

NOT gate inverts the input as an output. It is also known as an inverter.  
**Boolean Expression:** `Y = ¬A`

Table 4.27: NOT gate truth table

| A (Input) | Y = (¬A) |
| --------- | -------- |
| 0         | 1        |
| 1         | 0        |

You can verify the behavior of an **NOT gate** circuit element in the live circuit embedded below:

<iframe
  width="300px"
  height="200px"
  src="https://circuitverse.org/simulator/embed/738"
  id="projectPreview"
  scrolling="no"
  webkitAllowFullScreen
  mozAllowFullScreen
  allowFullScreen
>
  {" "}
</iframe>

## XOR Gate

XOR gate produces a HIGH output only if both inputs aren't the same.  
**Boolean Expression:** `Y = A ⊕ B`

Table 4.28: Two-input XOR gate truth table

| A (Input 1) | B (Input 2) | Y = (A ⊕ B) |
| ----------- | ----------- | ------------ |
| 0           | 0           | 0            |
| 0           | 1           | 1            |
| 1           | 0           | 1            |
| 1           | 1           | 0            |

You can verify the behavior of an **XOR gate** circuit element in the live circuit embedded below:

<iframe
  width="300px"
  height="200px"
  src="https://circuitverse.org/simulator/embed/740"
  id="projectPreview"
  scrolling="no"
  webkitAllowFullScreen
  mozAllowFullScreen
  allowFullScreen
></iframe>

## NAND Gate

NAND gate, a combination of an AND gate and a NOT gate connected together in series, produces the inverted output of an AND gate––produces a LOW output when all the inputs are HIGH.  
**Boolean Expression:** `Y = ¬(A · B)`

Table 4.29: Two-input NAND gate truth table

| A (Input 1) | B (Input 2) | Y = (¬(A · B)) |
| ----------- | ----------- | -------------- |
| 0           | 0           | 1              |
| 0           | 1           | 1              |
| 1           | 0           | 1              |
| 1           | 1           | 0              |

You can verify the behavior of an **NAND gate** circuit element in the live circuit embedded below:

<iframe
  width="300px"
  height="200px"
  src="https://circuitverse.org/simulator/embed/simple-nand-gate"
  id="projectPreview"
  scrolling="no"
  webkitAllowFullScreen
  mozAllowFullScreen
  allowFullScreen
>
  {" "}
</iframe>

## NOR Gate

NOR gate inverts the output of an OR gate. In other words, it only goes HIGH when all the inputs are LOW.  
**Boolean Expression:** `Y = ¬(A + B)` 

Table 4.30: Two-input NOR gate truth table

| A (Input 1) | B (Input 2) | Y = (¬(A + B)) |
| ----------- | ----------- | -------------- |
| 0           | 0           | 1              |
| 0           | 1           | 0              |
| 1           | 0           | 0              |
| 1           | 1           | 0              |

You can verify the behavior of an **NOR gate** circuit element in the live circuit embedded below:

<iframe
  width="300px"
  height="200px"
  src="https://circuitverse.org/simulator/embed/742"
  id="projectPreview"
  scrolling="no"
  webkitAllowFullScreen
  mozAllowFullScreen
  allowFullScreen
>
  {" "}
</iframe>

## XNOR Gate

XNOR gate inverts the output of an XOR gate––it only goes HIGH if both the inputs are the same.  
**Boolean Expression:** `Y = ¬(A ⊕ B)`

Table 4.31: Two-input XNOR gate truth table

| A (Input 1) | B (Input 2) | Y = (¬(A ⊕ B)) |
| ----------- | ----------- | -------------- |
| 0           | 0           | 1              |
| 0           | 1           | 0              |
| 1           | 0           | 0              |
| 1           | 1           | 1              |

You can verify the behavior of an **XNOR gate** circuit element in the live circuit embedded below:

<iframe
  width="300px"
  height="200px"
  src="https://circuitverse.org/simulator/embed/743"
  id="projectPreview"
  scrolling="no"
  webkitAllowFullScreen
  mozAllowFullScreen
  allowFullScreen
>
  {" "}
</iframe>
