# Sequential Elements
> This guide will teach you how to use the various sequential elements available in CircuitVerse.

Contributing Authors: [@theredcap](https://github.com/theredcap)

## D Flip Flop

A delay or D Flip Flop is used to delay the input. It has a single data input in addition to the clock input. The output of D Flip Flop is same as the input data.

Truth Table for D Flip Flop is given below.

| Clk  | D    | Q     | Q Inverse |
| ---- | ---- | ----- | --------- |
| 0    | X    | Latch | Latch     |
| 1    | 1    | 1     | 0         |
| 1    | 0    | 0     | 1         |

#### Preset and Asynchronous Reset

The preset and asynchronous reset work in conjunction to change the default behavior of the flip flops. If the asynchronous reset is high, then the output of the flip flop is equal to the value of preset.

> When the Asynchronous Reset is high the value of the flip-flop is independent of the input or the clock. 
>
> Reset =  1 then output = Preset 

#### Enable:

This is used to enable the Flip Flop.

You can play with the circuit here:

<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/12254" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## D Latch

D Latch is essentially a D Flip Flop. Here you do not get an option to configure the Preset, Asynchronous and Enable signals. The truth table is similar to that of the D Flip Flop.

## T Flip Flop

T or 'toggle' Flip Flop is used to toggle the output. It has a single data input along with the clock input. If the value of input is 1, then the output of the next state is the complement of the previous state.

The truth table for T Flip is given below:

| Input (T) | Previous State | Next State |
| --------- | -------------- | ---------- |
| 0         | 0              | 0          |
| 0         | 1              | 1          |
| 1         | 0              | 1          |
| 1         | 1              | 0          |

You can play with the circuit here:

<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/12258" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## SR Flip Flop

SR Flip Flops is one of the most simplest sequential circuit.  It has two inputs S and R along with the clock.  S here stands for 'Set' and R stands for 'Reset'. Thus when S is high the output is high, when R is high the output is low.

The truth table is given below.

| S    | R    | Q         |
| ---- | ---- | --------- |
| 0    | 0    | No change |
| 1    | 0    | 1         |
| 0    | 1    | 0         |
| 1    | 1    | Invalid   |

You can play with the circuit here:

<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/12264" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>





## JK Flip Flop

JK Flip Flops are basically the improvements of SR Flip Flops. It has two inputs J and K along with the clock.  If J and K are different then the output Q takes the value of J at the next clock edge.

The truth table is given below.

| J    | K    | Q         |
| ---- | ---- | --------- |
| 1    | 1    | No change |
| 1    | 0    | 1         |
| 0    | 1    | 0         |
| 1    | 1    | Toggle    |

You can play with the circuit here:

<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/12263" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

