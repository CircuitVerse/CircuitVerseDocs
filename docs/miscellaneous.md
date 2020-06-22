# Miscellaneous Elements

Contributing Author(s): [@iamNamanKhare](https://github.com/iamNamanKhare), [@NavonilDas](https://github.com/NavonilDas)

>This Section contains Documentation of various miscellaneous elements.

**List of Elements :**

- [ALU](#ALU)
- [Adder](#Adder)
- [Buffer](#Buffer)
- [Tri State Buffer](#tri-state-buffer)
- [Tunnel](#tunnel)
- [Two's Complement](#two39s-complement)

## ALU

An arithmetic logic unit (ALU) is a combinational digital electronic circuit that performs arithmetic and bitwise operations
on integer binary numbers.

There are Different ports in an ALU :

- A : Integer Operand (Input 1)
- B : Integer Operand (Input 2)
- ctr : This port takes up an Input(opcode) with BitWidth of 3 Bits.

>Input Values ( Opcodes ) for **ctr** are discussed in the later section.

- Cout (status output) : This is an OUTPUT port for getting **carry** after the operation on given operands.
- Ans : As the name suggests, Output of **Result** after the operation on given operands.

**STEPS FOR USAGE** :
> Location of ALU : Under the **Misc** section.

- Drop the ALU on Canvas
- Place the Operand Inputs
- Take an input with BitWidth of 3 Bits for ctr input (ALU opcode)
- Take the outputs using output tool for different opcodes and values of operands.

<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/12141" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

**Opcodes For Different functionalities of ALU ( values for ctr) :**

> A and B  are two Operands.<br/>
> SLT (Set Less Than) : If A is less than B Output = 1, Otherwise 0.

|    Opcode    |    Opcode Value   |     Operation   |
|--------------|-------------------|-----------------|
|    0 0 0     |         0         |      A & B      |
|    0 0 1     |         1         |      A &#124; B |
|    0 1 0     |         2         |      A + B      |
|    1 0 0     |         4         |      A & ~B     |
|    1 0 1     |         5         |      A &#124; ~B|
|    1 1 0     |         6         |      A - B      |
|    1 1 1     |         7         |       SLT       |

## ADDER

An Adder is a logical circuit that performs an addition operation on binary numbers and
produces a **sum of the Three inputs** and a **carry value** (Cout).

>Note : This is Full Adder.

The three inputs to Adder are :
<br/>&nbsp;&nbsp;&nbsp;&nbsp; A : Operand 1
<br/>&nbsp;&nbsp;&nbsp;&nbsp; B : Operand 2
<br/>&nbsp;&nbsp;&nbsp;&nbsp; Cin : Previous Carry value

Two Output Values are :
<br/>&nbsp;&nbsp;&nbsp;&nbsp; Output : Sum of A + B + Cin :&nbsp; (A XOR B) XOR Cin
<br/>&nbsp;&nbsp;&nbsp;&nbsp; Cout : Carry Left after Operation :&nbsp; (A AND B) OR (Cin AND (A XOR B) )

**STEPS FOR USAGE**
> Location of Adder : Under the **Misc** section.

- Drop the Adder from Misc section of Circuit Elements on canvas
- Place the inputs (operands) and Cin as well
<br/>
Now,
- Using Output tool, we can check for the different values of A,B and Cin.

<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/12140" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

**Truth Table for Different values in adder :**

| A | B | Cin |  SUM   | Cout |
|---|---|-----|--------|------|
| 0 | 0 |  0  |   0    |  0   |
| 0 | 0 |  1  |   1    |  0   |
| 0 | 1 |  0  |   1    |  0   |
| 0 | 1 |  1  |   0    |  1   |
| 1 | 0 |  0  |   1    |  0   |
| 1 | 0 |  1  |   0    |  1   |
| 1 | 1 |  0  |   0    |  1   |
| 1 | 1 |  1  |   1    |  1   |

## Buffer
A buffer has only a single input and a single output with behavior that is the opposite of a NOT gate. It simply passes its input, unchanged, to its output.

| Input | Output |
|-------|--------|
| 0     | 0      |
| 1     | 1      |

**Simple Buffer Example**

Drag and Drop the Buffer from Misc Section. Connect input and output to the buffer.

<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/13250" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## Tri-State Buffer
A tri-state buffer is similar to a buffer, but it adds an additional "enable" input that controls whether the primary input is passed to its output or not. If the "enable" inputs signal is High (1), the tri-state buffer behaves like a normal buffer. If the "enable" input signal is LOW (0), the tri-state buffer passes a high impedance (Z) signal, which effectively disconnects its output from the circuit.

| Enable | Input | Output |
|--------|-------|--------|
|   0    |   0   |   Z    |
|   0    |   1   |   Z    |
|   1    |   0   |   0    |
|   1    |   1   |   1    |


**Simple Tristate Buffer Example**

Drag and Drop a TriState from Misc Section. Connect input, output and enable pins.

<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/13252" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## Tunnel
A tunnel acts like a hidden wire that binds points together, but unlike a wire, the connection is not drawn. All tunnel with same " Debug Flag identifier " are effectively connected together.

**Simple Example of a Tunnel**

Drag and Drop a two Tunnels from Misc section. Check whether both the tunnel have same " Debug Flag identifier ". Connect one as input and other one as output.

<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/12642" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## Two's Complement

This element calculates the two's complement of any binary number. Two's complement is widely used to represent signed integers in computers. Calculating the two's complement of a binary number involves two operations: inverting all the bits and adding 1 to the number obtained.

**Simple Example of Two's Complement**

 Drag and drop the element on the canvas and connect it with an input and an output. Ensure that the input, output and the two's complement element have the same bitwidth. You can also make your own two's complement circuit using some NOT gates and an adder.  

Here's an example:
```
Given number        1  1  1  1  0           \\ Input bits
1's complement      0  0  0  0  1           \\ Connect NOT Gates to all input bits
add 1               +           1           \\ Add 1 using an adder
                   ---------------
2's complement      0  0  0  1  0
                   ---------------
```
<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/110615" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen></iframe>
