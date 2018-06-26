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
