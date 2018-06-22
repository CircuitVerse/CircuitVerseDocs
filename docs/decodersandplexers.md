# Decoders and Plexers

> This guide will teach you how to use the decoders and plexers available on Circuitverse.

Contributing Authors: [@brahmakulkarni](https://github.com/brahmakulkarni)

## Multiplexer
A multiplexer is used to selectively pass only one of the inputs provided to it. This is done using a control signal.

Consider a simple multiplexer that takes two single-bit inputs (T1 and T2) and a single-bit select line (S). The truth table is given below:

|    S    |   Out   |
|---------|---------|
|    0    |   T1    |
|    1    |   T2    |

<iframe width="300px" height="200px" src="https://circuitverse.org/simulator/embed/746" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

Using the property menu (as shown in the getting started section) we can pass multi-bit inputs and also increase or decrease the number of inputs that can be given to the multiplexer. The number of inputs are always a power of 2. If there are 'N' control bits, then there can be a maximum of 2^N inputs.

Here is another example where there are 4 three-bit inputs and a two-bit control signal:
<iframe width="300px" height="200px" src="https://circuitverse.org/simulator/embed/747" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>
