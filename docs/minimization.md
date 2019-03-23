# How to Use

> The process of simplifying the algebraic expression of a boolean function is called minimization. Minimization is important as it reduces the cost and complexity of the circuit. This guide will teach you.

Contributing Authors:
[@ritabandatta](https://github.com/Reetoo)

## Combinational Circuit

Combinational circuit is a circuit in which we combine the different gates in the circuit, for example encoder, decoder, multiplexer and demultiplexer. Some of the characteristics of combinational circuits are following −

    The output of combinational circuit at any instant of time, depends only on the levels present at input terminals.

    The combinational circuit do not use any memory. The previous state of input does not have any effect on the present state of the circuit.

    A combinational circuit can have an n number of inputs and m number of outputs


Using the Combinational Analysis of CircuitVerse, we can easily find out the circuit for any given boolean combinational analysis truth table.

Steps:
1. Goto Tools -> Combinational Analysis.

![Alt text](https://cdn1.imggmi.com/uploads/2019/3/23/62a413a525a46266a5b14e4392cd0919-full.png)

2. Enter the input gates and the output gates. Then press Next.  For example, take input gates as A, B, C and output gates as X, Y, Z.

![Alt text](https://cdn1.imggmi.com/uploads/2019/3/23/9723ddaa9385110923f93259353edd10-full.png)

3. Fill up the truth table mentioning the required output for a particular input combination. The valid datas are 0, 1 and x where x represents don't-care combination. Then press Generate Circuit. In the given example, the truth table has been taken as below:

|  A  |  B  |  C  |  X  |  Y  |  Z  |
|-----|-----|-----|-----|-----|-----|
|  0  |  0  |  0  |  0  |  0  |  X  |
|  0  |  0  |  1  |  0  |  1  |  X  |
|  0  |  1  |  0  |  1  |  X  |  0  |
|  0  |  1  |  1  |  X  |  X  |  1  |
|  1  |  0  |  0  |  0  |  1  |  1  |
|  1  |  0  |  1  |  1  |  0  |  X  |
|  1  |  1  |  0  |  1  |  0  |  0  |
|  1  |  1  |  1  |  0  |  X  |  1  |

![Alt text](https://cdn1.imggmi.com/uploads/2019/3/23/5c64d0c7ed0655f7e7ecd468da833398-full.png)

The live circuit is given here:

<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/edit/12117" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

Now go and try out some other input combinations in www.circuitverse.org

In the later sections we will be looking at some important combinational circuits.
