# Combinational Circuits

> This guide will teach you how to make different combinational circuits using Combinational Analysis on CircuitVerse.

Contributing Authors:
[@ritabandatta](https://github.com/Reetoo)

## Half Adder

Half adder is a combinational logic circuit with two inputs and two outputs. The half adder circuit is designed to add two single bit binary number A and B. It is the basic building block for addition of two single bit numbers. This circuit has two outputs carry and sum.

The truth table is given below:

|  A  |  B  |   S   C   |
|-----|-----|-----------|
|  0  |  0  |   0   0   |
|  0  |  1  |   1   0   |
|  1  |  0  |   1   0   |
|  1  |  1  |   0   1   |

The live circuit is embedded below:

<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/edit/12122" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>


## Full adder

Full adder is developed to overcome the drawback of Half Adder circuit. It can add two one-bit numbers A and B, and carry c. The full adder is a three input and two output combinational circuit.

The truth table is given below:

|  A  |  B  |  C1  |   S   C0   |
|-----|-----|------|------------|
|  0  |  0  |  0   |   0   0    |
|  0  |  0  |  1   |   1   0    |
|  0  |  1  |  0   |   1   0    |
|  0  |  1  |  1   |   0   1    |
|  1  |  0  |  0   |   0   0    |
|  1  |  0  |  1   |   1   0    |
|  1  |  1  |  0   |   1   0    |
|  1  |  1  |  1   |   0   1    |

The live circuit is embedded below:

<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/edit/12121" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>


## Half Subtractor

Half subtractor is a combination circuit with two inputs and two outputs (difference and borrow). It produces the difference between the two binary bits D at the input and also produces an output B0 (Borrow) to indicate if a 1 has been borrowed. In the subtraction (A-B), A is called as Minuend bit and B is called as Subtrahend bit.

The truth table is given below:

|  A  |  B1  |   D  B0   |
|-----|------|-----------|
|  0  |  0   |   0   0   |
|  0  |  1   |   1   1   |
|  1  |  0   |   1   0   |
|  1  |  1   |   0   0   |

The live circuit is embedded below:

<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/edit/12120" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>


## Full Subtractor

The disadvantage of a half subtractor is overcome by full subtractor. The full subtractor is a combinational circuit with three inputs A,B,C and two output D and C'. A is the 'minuend', B is 'subtrahend', C is the 'borrow' produced by the previous stage, D is the difference output and C' is the borrow output.

The truth table is given below:

|  A  |  B  |  C1  |   D   C0   |
|-----|-----|------|------------|
|  0  |  0  |  0   |   0   0    |
|  0  |  0  |  1   |   1   1    |
|  0  |  1  |  0   |   1   1    |
|  0  |  1  |  1   |   0   1    |
|  1  |  0  |  0   |   1   0    |
|  1  |  0  |  1   |   0   0    |
|  1  |  1  |  0   |   0   0    |
|  1  |  1  |  1   |   1   1    |

The live circuit is embedded below:

<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/edit/12119" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>
