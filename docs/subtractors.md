# Subtractors

>This guide will teach you how to create half and full subtractor in CircuitVerse.

## Half subtractor

Half subtractor is tone of the most important combinational logic circuit used to perform subtraction of two binary digits.
The circuit takes two binary numbers 0 and 1 as input and gives two elements BORROW and DIFFERENCE as output.

**DIFFERENCE = A xor B**

**BORROW = A' xor B**

#### Half subtractor truth table

| X  | Y  | D  | B  |
|----|----|----|----|
| 0  | 0  | 0  | 0  |
| 0  | 1  | 1  | 1  |
| 1  | 0  | 1  | 0  |
| 1  | 1  | 0  | 0  |

#### Half subtractor circuit

<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/12628" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## Full subtractor

Full subtractor is a combinational logic circuit used to perform subtraction of two binary digits.
It is performed by two half subtractors, which involves three inputs such as minuend, subtrahend and borrow.
The borrow bit among the inputs is obtained from subtraction of two binary digits and is subtracted from next higher order pair of bits, outputs as difference and borrow. 

**DIFFERENCE = A xor B xor Bin**

**Bout = (A’B) + (A xor B)' Bin**

#### Full subtractor truth table


| X  | Y  | Bin| D  | Bout |
|----|----|----|----|---|
| 0  | 0  | 0  | 0  |  0 |
| 0  | 0  | 1  | 1  |  1  |
| 0  | 1  | 0  | 1  |  1 |
| 0  | 1  | 1  | 0  |  1 |
| 1  | 0  | 0  | 1  |  0 |
| 1  | 0  | 1  | 0  |  0 |
| 1  | 1  | 0  | 0  |  0 |
| 1  | 1  | 1  | 1  |  1 |

### Full subtractor circuit

<iframe width="600px" height="600px" src="https://circuitverse.org/simulator/embed/12629" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

### Full subtractor from two half subtractors

 <iframe width="800px" height="400px" src="https://circuitverse.org/simulator/embed/12630" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>




