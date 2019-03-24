# Adders

> This guide will teach you how to create the adders in CircuitVerse. The guide will explain how to create half and full adder in details.

## Half Adders
A Half Adder is a simple digital circuit used to add two binary bits 0 and 1. The half adder outputs a sum of the two inputs and a carry value.

S = A XOR B
C = A AND B

Half Adder Truth Table

| A  | B  | S  | C  |
| :- | :- | :- | :- |
| 0  | 0  | 0  | 0  |
| 0  | 1  | 1  | 0  |
| 1  | 0  | 1  | 0  |
| 1  | 1  | 0  | 1  |

Half Adder Circuit

<iframe width="300px" height="200px" src="https://circuitverse.org/simulator/embed/11369" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## Full Adders
A Full Adder is a digital circuit used to perform binary operations on three one-bit binary numbers. The full adder produces a sum of the three inputs and carry value.

S = (A XOR B) XOR Cin
Cout = (A AND B) OR (Cin AND (A XOR B))

Full Adder Truth Table

| A  | B   | Cin  | Cout  | S |
| :- | :- | :--- | :---- |:--|
| 0  | 0  | 0    | 0     | 0 |
| 0  | 0  | 1    | 0     | 1 |
| 0  | 1  | 0    | 0     | 1 |
| 0  | 1  | 1    | 1     | 0 |
| 1  | 0  | 0    | 0     | 1 |
| 1  | 0  | 1    | 1     | 0 |
| 1  | 1  | 0    | 1     | 0 |
| 1  | 1  | 1    | 1     | 1 |

Full Adder Circuit

<iframe width="300px" height="200px" src="https://circuitverse.org/simulator/embed/12188" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

Full Adder from Two Half Adder Circuit

<iframe width="300px" height="200px" src="https://circuitverse.org/simulator/embed/11370" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>
