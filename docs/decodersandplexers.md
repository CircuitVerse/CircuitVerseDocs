# Decoders and Plexers

> This guide will teach you how to use the decoders and plexers available on Circuitverse.

Contributing Authors: [@brahmakulkarni](https://github.com/brahmakulkarni)

## Multiplexer
A multiplexer is used to selectively pass only one of the inputs provided to it. This is done using a control signal. The number of inputs are always a power of 2. If there are N control bits, then there can be a maximum of 2^N inputs.

Consider a simple multiplexer that takes two single-bit inputs (T1 and T2), a single-bit control signal (S) and has an output (Out). This Type of multiplexer is known as a 2 to 1 multiplexer. The truth table is given below:

|    S    |   Out   |
|---------|---------|
|    0    |   T1    |
|    1    |   T2    |

<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/746" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

Using the property menu (as shown in the getting started section) we can pass multi-bit inputs and also increase or decrease the number of inputs that can be given to the multiplexer.

Here is example where there are 4 three-bit inputs and a two-bit control signal or a 4 to 1 multiplexer. The truth table is given below:

|    S1   |    S0   |    Out    |
|---------|---------|-----------|
|    0    |    0    |    T1     |
|    0    |    1    |    T2     |
|    1    |    0    |    T3     |
|    1    |    1    |    T4     |
<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/747" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## Demultiplexer
A demultiplexer takes an input and passes it to only one of outputs. This is done using a control signal. The number of outputs is always a power of 2. If there are N control bits, we can choose to pass the output to any one of the 2^N output lines.

Consider a simple demultiplexer that takes a single-bit input (T), a single-bit control signal (S) and two single-bit outputs (O1 and O2).This type of demultiplexer is called a 1 to 2 demultiplexer. The truth table is given below:

|    S    |    O1   |    O2   |
|---------|---------|---------|
|    0    |    T    |    0    |
|    1    |    0    |    T    |

<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/756" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

Using the property menu (as shown in the getting started section) we can pass multi-bit inputs and also increase or decrease the number of outputs by changing the number of bits we want the control signal to have.

Here is another example of demultiplexer where a 3 bit input is taken and a two-bit control signal or a 1 to 4 demultiplexer. The truth table is given below:

|    S1   |    S0   |    O1   |    O2   |    O3   |    O4   |   
|---------|---------|---------|---------|---------|---------|
|    0    |    0    |    T    |    0    |    0    |    0    |
|    0    |    1    |    0    |    T    |    0    |    0    |
|    1    |    0    |    0    |    0    |    T    |    0    |
|    1    |    1    |    0    |    0    |    0    |    T    |

<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/757" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## Bit-selector
A bit-selector's function is self-explanatory. It takes a single or multi-bit input and gives the bit we desire to isolate as output. This is done using a single or multi-bit select line. The select line value indicates the specific bit we wish to isolate. An added feature is the bit-selctor shows the bit we want to isolate (as chosen using the select line) within it's body in decimal form.

Consider a bit selector with a four-bit input. Let each of it's bits be addressed separately as T3, T2, T1, T0 (from most significant to least significant). Let it have a two-bit select line (S1 and S0) and a single-bit output (Out). The truth table is given below:

|    S1   |    S0   |   Out   |   
|---------|---------|---------|
|    0    |    0    |    T0   |
|    0    |    1    |    T1   |
|    1    |    0    |    T2   |
|    1    |    1    |    T3   |

<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/758" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## Most Significant Bit (MSB) Delector
The MSB delector gives as output the bit position of the most-significant-bit of the input. In other words, it tells us at which bit position the right-most one is located. An enable input is also provided to activate/deactivate the MSB delector. The bit position of the MSB is also shown in decimal form within the body of the MSB delector.

Consider an MSB delector with a four-bit input. It's live circuit is embeded below:
<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/759" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## Least Significant Bit (LSB) Delector
The LSB delector gives as output the bit position of the least-significant-bit of the input. In other words, it tells us at which bit position the left-most one is located. An enable input is also provided to activate/deactivate the LSB delector. The bit position of the LSB is also shown in decimal form within the body of the LSB delector.

Consider an LSB delector with a four-bit input. It's live circuit is embeded below:
<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/761" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## Priority Encoder
The priority encoder provided by Circuitverse works in a simmilar fashion to the MSB detector (in practise it can work like the LSB detector also). There is a specific output based on the bit position of the MSB, irrespective of the lesser significant bits. AN enable input is also provided to activate/deactivate the priority encoder. If there are N outputs, there will be 2^N inputs.

Consider a priority encoder with four single-bit inputs (T3, T2, T1 and T0 from most to least-significant bit) and two single-bit outputs (O2 and O1 from most to least-significant bit). The truth table is given below:

|   T3    |   T2    |   T1    |   T0    |   O2    |   O1    |
|---------|---------|---------|---------|---------|---------|
|    0    |    0    |    0    |    1    |    0    |    0    |     
|    0    |    0    |    1    |    X    |    0    |    1    |
|    0    |    1    |    X    |    X    |    1    |    0    |
|    1    |    X    |    X    |    X    |    1    |    1    |

<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/762" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## Decoder
The decoder with N input bits has 2^N output lines. Suppose the value of the input is X, the Xth output line is made high.

Consider a decoder with a single two-bit input (T1 and T0 from most to least-significant bit) and four single-bit output lines (O4, O3, O2 and O1 from most to least-significant bit). The truth table is given below:

|   T1    |   T0    |   O4    |   O3    |   O2    |   O1    |
|---------|---------|---------|---------|---------|---------|
|    0    |    0    |    0    |    0    |    0    |    1    |
|    0    |    1    |    0    |    0    |    1    |    0    |
|    1    |    0    |    0    |    1    |    0    |    0    |
|    1    |    1    |    1    |    0    |    0    |    0    |

<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/763" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>
