# Decoders and Plexers

> This guide will teach you how to use the decoders and plexers available on Circuitverse.

Contributing Authors: [@brahmakulkarni](https://github.com/brahmakulkarni)

## Multiplexer
A multiplexer is used to selectively pass only one of the inputs provided to it. This is done using a control signal. The number of inputs are always a power of 2. If there are 'N' control bits, then there can be a maximum of 2^N inputs.

Consider a simple multiplexer that takes two single-bit inputs (T1 and T2), a single-bit control signal (S) and has an output (Out). The truth table is given below:

|    S    |   Out   |
|---------|---------|
|    0    |   T1    |
|    1    |   T2    |

<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/746" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

Using the property menu (as shown in the getting started section) we can pass multi-bit inputs and also increase or decrease the number of inputs that can be given to the multiplexer.

Here is another example where there are 4 three-bit inputs and a two-bit control signal:
<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/747" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## Demultiplexer
A demultiplexer takes an input and passes it to only one of outputs. This is done using a control signal. The number of outputs is always a power of 2. If there are 'N' control bits, we can choose to pass the output to any one of the 2^N output lines.

Consider a simple demultiplexer that takes a single-bit input (T), a single-bit control signal (S) and two single-bit outputs (O1 and O2). The truth table is given below:

|    S    |    O1   |    O2   |
|---------|---------|---------|
|    0    |    T    |    0    |
|    1    |    0    |    T    |

<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/756" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

Using the property menu (as shown in the getting started section) we can pass multi-bit inputs and also increase or decrease the number of outputs by changing the number of bits we want the control signal to have.

Here is another example where a 3 bit input is taken and a two-bit control signal:
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

## Most Significant Bit (MSB) Selector
The MSB selector gives as output the bit position of the most-significant-bit of the input. In other words, it tells us at which bit position the right-most one is located. An enable input is also provided to activate/deactivate the MSB selector. The bit position of the MSB is also shown in decimal form within the body of the MSB selector

Consider an MSB selector with a four-bit input. It's live circuit is embeded below.
<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/759" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>
