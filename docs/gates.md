# Standard Gates

> This guide will teach you how to use the standard gates in CircuitVerse. It will also explain the way the gates work. The guide will explain how to customize an 'And' gate in detail. Other gates have a similar customization.

Contributing Authors: [@satu0king](https://github.com/satu0king/)
                      [@brahmakulkarni](https://github.com/brahmakulkarni)

## And Gate
This gate gives a HIGH output only if all input values are HIGH.

Two-input And Gate Truth Table

| Input 1 | Input 2 | Output |
|---------|---------|--------|
| 0       | 0       | 0      |
| 0       | 1       | 0      |
| 1       | 0       | 0      |
| 1       | 1       | 1      |

Simple two-input And Gate
<iframe width="300px" height="200px" src="https://circuitverse.org/simulator/embed/734" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

Multi Input And Gate
You can change the number of inputs in the Property Menu.

<iframe width="300px" height="200px" src="https://circuitverse.org/simulator/embed/735" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

Multi-bitwidth And Gate
You can change the bitwidth in the Property Menu.

<iframe width="300px" height="200px" src="https://circuitverse.org/simulator/embed/736" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## Or Gate
This gate gives a HIGH output only if any of the input values are HIGH.

Two-input Or Gate Truth Table

| Input 1 | Input 2 | Output |
|---------|---------|--------|
| 0       | 0       | 0      |
| 0       | 1       | 1      |
| 1       | 0       | 1      |
| 1       | 1       | 1      |

Simple two-input Or Gate
<iframe width="300px" height="200px" src="https://circuitverse.org/simulator/embed/737" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## Not Gate
This gate simply inverts the input. It is also known as an inverter.

Not Gate Truth Table

| Input   | Output |
|---------|--------|
| 0       | 1      |
| 1       | 0      |


Simple Not Gate
<iframe width="300px" height="200px" src="https://circuitverse.org/simulator/embed/738" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## Xor Gate
This gate gives a HIGH output only if both inputs aren't the same.

Two-input Xor Gate Truth Table

| Input 1 | Input 2 | Output |
|---------|---------|--------|
| 0       | 0       | 0      |
| 0       | 1       | 1      |
| 1       | 0       | 1      |
| 1       | 1       | 0      |

Simple two-input Xor Gate
<iframe width="300px" height="200px" src="https://circuitverse.org/simulator/embed/740" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## Nand Gate
This gate gives the inverted output of an And gate. In other words, it only gives a LOW output when all inputs are HIGH.

Two-input Nand Gate Truth table

| Input 1 | Input 2 | Output |
|---------|---------|--------|
| 0       | 0       | 1      |
| 0       | 1       | 1      |
| 1       | 0       | 1      |
| 1       | 1       | 0      |

Simple two-input Nand Gate
<iframe width="300px" height="200px" src="https://circuitverse.org/simulator/embed/741" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## Nor Gate
This gate gives the inverted output of an Or gate. In other words, it only gives a HIGH output when all the inputs are LOW.

Two-input Nor Gate Truth Table

| Input 1 | Input 2 | Output |
|---------|---------|--------|
| 0       | 0       | 1      |
| 0       | 1       | 0      |
| 1       | 0       | 0      |
| 1       | 1       | 0      |

Simple two-input Nor Gate
<iframe width="300px" height="200px" src="https://circuitverse.org/simulator/embed/742" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## XNor Gate
This gate gives the inverted output of an Xor gate. In other words, it only gives a HIGH output if both the inputs are the same.

Two-input XNor Gate Truth Table

| Input 1 | Input 2 | Output |
|---------|---------|--------|
| 0       | 0       | 1      |
| 0       | 1       | 0      |
| 1       | 0       | 0      |
| 1       | 1       | 1      |

Simple two-input XNor Gate
<iframe width="300px" height="200px" src="https://circuitverse.org/simulator/embed/743" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>
