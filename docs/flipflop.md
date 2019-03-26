# Flip Flop Circuits

> A flip flop is an electronic circuit with two stable states that can be used to store binary data. The stored data can be changed by applying varying inputs. Flip-flops and latches are fundamental building blocks of digital electronics systems used in computers, communications, and many other types of systems.

Contributing Authors:
[@ritabandatta](https://github.com/Reetoo)

## Clocked SR Flip Flop

SR flip-flop is a one-bit memory bistable device that has two inputs, one which will “SET” the device (meaning the output = “1”), and is labelled S and one which will “RESET” the device (meaning the output = “0”), labelled R. The clocked SR Flip Flop consists of consists of 4 NAND gates. The circuit is connected to a clock pulse and the output changes only if a clock pulse is applied.

The truth table is given below:

|  Q    S    R  |Q(t+1)|
|---------------|------|
|  0    0    0  |  0   |
|  0    0    1  |  0   |
|  0    1    0  |  1   |
|  0    1    1  |  ?   |
|  1    0    0  |  1   |
|  1    0    1  |  0   |
|  1    1    0  |  1   |
|  1    1    1  |  ?   |

Note: ? refers to invalid combination

The live circuit is embedded below:

<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/edit/12497" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>


## Clocked D Flip Flop

Clocked D flipflop is a modification of the clocked RS flipflop with an inverter at the R input. The D input goes directly to the S input while its complement goes to the R input thus reducing the number of inputs to one.

The truth table is given below:

|  Q    D  | Q(t+1) |
|----------|--------|
|  0    0  |   0    |
|  0    1  |   1    |
|  1    0  |   0    |
|  1    1  |   1    |

The live circuit is embedded below:

<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/edit/12500" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>
