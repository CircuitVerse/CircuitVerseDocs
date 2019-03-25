# Miscellaneous Elements

Contributing Author(s): [@iamNamanKhare](https://github.com/iamNamanKhare)

>This Section contains Documentation of various miscellaneous elements.

**List of Elements :**

- [ALU](#ALU)
- [Adder](#Adder)

## ALU

An arithmetic logic unit (ALU) is a combinational digital electronic circuit that performs arithmetic and bitwise operations
on integer binary numbers.

There are Different ports in an ALU : 

- A : Integer Operand (Input 1)
- B : Integer Operand (Input 2)
- ctr : This port takes up an Input(opcode) with BitWidth of 3 Bits.

>Input Values ( Opcodes ) for **ctr** are discussed in the later section.

- Cout (status output) : This is an OUTPUT port for getting **carry** after the operation on given operands.
- Ans : As name suggests, Output of **Result** after the operation on given operands.

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
