## Circuit Elements

> CircuitVerse includes a vast library of circuit elements for building circuits 

# Input

Circuitverse features different input elements listed below:

1. [Input](#input)
2. [Button](#button)
3. [Power](#power)
4. [Ground](#ground)
5. [ConstantVal](#constantval)
6. [Stepper](#stepper)
7. [Counter](#counter)

## Input

The **Input** circuit element can have two input states - HIGH or LOW. 

Property attributes that can be customized within the **PROPERTIES** panel include**:** **BitWidth**

You can verify the behavior of the **Input** circuit element (by clicking on the circuit element once) in the live circuit embedded below:

<iframe width="500px" height="400px" src="https://circuitverse.org/simulator/embed/11920" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## Button

The **Button** circuit element  is a simple push button mechanism for controlling the output of the circuit. 

*   HIGH when pressed
*   LOW when released

You can verify the behavior of the **Button** circuit element in the live circuit embedded below:

<div><iframe>[https://circuitverse.org/users/3671/projects/11912]</iframe></div>


## Power

The **Power** circuit element in the circuit design is always in a HIGH state. This component should be used when there is a need for  the input to be always HIGH.
<br>In the live circuit embedded below, multiple LEDs are arranged in the form of "HI". As the LEDs are all connected to the **Power** circuit element, they will always glow. 

<iframe width="500px" height="400px" src="https://circuitverse.org/simulator/embed/9554" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## Ground

The **Ground** circuit element in the circuit design is always in a LOW state.

While in AC power distribution and some radio antenna systems the “ground” implies a connection to the earth,  in digital logic design "ground" is a point in the circuit that the user calls as zero volts. The ground in the circuit is used as a reference for measuring voltages across different points in the circuit.

<!--You can verify the behavior of the **Ground** circuit element in the live circuit embedded below:-->

## ConstantVal

The **ConstantVal** circuit element allows the user to input a constant value (instead of 0 and 1). 

<iframe width="500px" height="400px" src="https://www.youtube.com/embed/DON063zxYmcc" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

As the above example explains, the value of the **ConstantVal** circuit element can be changed by double-clicking the component and entering the value in the prompt.


## Stepper

The value of the **Stepper** circuit element can either be increased or decreased by pressing the "+" key or "-" key on the keyboard to increase or decrease the value. 

You can verify the behavior of the **Stepper** circuit element in the live circuit embedded below:

<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/107525" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen></iframe>

## Random

The **Random** circuit element generates a random value in the range (0, maxvalue) every time it receives a HIGH signal from the clock. As the simulation demonstrates, it has 3 ports in total:

*   Max Value: input, maximum value generated.
*   Clock: input clock element. Every time the clock receives a HIGH input, the random element generates a number.
*   Random Value: output, the number generated

The value is also displayed in decimal notation on the random element.

You can verify the behavior of the **Random** circuit element in the live circuit embedded below:

<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/12041" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## Counter

The **Counter** circuit element is a binary counter that runs from zero to a specified maximum value. As the simulation demonstrates, it has five ports in total:

*   Max Value: input, maximum value that the counter will reach.
*   Clock: input clock element, every time the clock gets HIGH the counter increments by one.
*   Reset: input, when HIGH it resets the counter to zero.
*   Zero: output, it's HIGH when the counter is zero.
*   Value: output, value of the counter in binary.

The value is also displayed in decimal notation on the counter element.

You can verify the behavior of the Counter circuit element in the live circuit embedded below:

<iframe width="500px" height="400px" src="https://circuitverse.org/simulator/embed/12036" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

# Output Elements
Contributing Authors: [@SarahBornais](https://github.com/SarahBornais/)

CircuitVerse features a eight output elements:
* [Output](#output)
* [Digital LED](#digital-led)
* [Variable LED](#variable-led)
* [RGB LED](#rgb-led)
* [Square RGB LED](#square-rgb-led)
* [Hex Display](#hex-display)
* [Seven Segment Display](#seven-segment-display)
* [Sixteen Segment Display](#sixteen-segment-display)

This guide will explain how and when to use each of these elements and provide some tips and tricks for doing so.



## Output
Output is the most simple output element. When connected to an input, it simply displays the input applied to it in binary form. 

<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/11294" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

Output can display different bitwidths depending on your requirements. To display a different bitwidth, specify the bitwidth that you wish to display in the [properties menu](getting_started.md#property-menu) of the output element.

## Digital LED
The digital LED element switches between on and off depending on the input applied to it. An applied input of `1` corresponds to the LED turning on and an applied input of `0` corresponds to the LED turning off. The digital LED does not recognize inputs of a length other than one bit. 

<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/11304" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

Note that you can change the color of the LED manually in the [properties menu](getting_started.md#property-menu), but if you want the color to change based on the applied input, consider using the [RGB LED element](#rgb-led). 

## Variable LED
The variable LED element changes between 256 intensities based on an 8-bit input. It has a maximum intensity when the input applied is `11111111` and zero intensity when the input applied is `00000000`.

<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/11308" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>


## RGB LED
Unlike the digital or variable LEDs, the RGB (red-green-blue) LED element can display a wide variety of colors. It takes three 8-bit inputs which describe the intensity of red, green, and blue color respectively. 

<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/11292" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

If you want to display a certain color, the easiest way to find what the inputs need to be is to use a [color picker](https://htmlcolorcodes.com/color-picker/) to find the corresponding R, G, and B values and then use a [decimal-to-binary converter](https://codebeautify.org/decimal-binary-converter) (or do it manually for the math practice) to find the 8-bit value that you need to enter for each input.

## Square RGB LED
The square RGB LED is quite similar to the regular RGB LED when it comes to displaying colors. However, it differs in its shape as well as in the fact that you can vary its pin lengths in the [properties menu](getting_started.md#property-menu). Both of these additional features make square RGB LEDs ideal for simulating arrays of pixels.

<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/11345" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

This example illustrates how an array of pixels may be programmed to display an image. Here, "LED Buffer" [subcircuits](subcircuit.md) were used to ensure that the circuitry controlling the LEDs did not become too confusing or overwhelming to read. We recommend that you also use subcircuits when creating your square RGB LED projects. 

As you can see, the ability to vary the pin length of the square RGB LEDs can be quite useful to create clean, easy to read circuits. However, it is crucial that you ensure that when you change the pin lengths, the pins of LEDs remain in the same vertical order as the LEDs themselves (i.e. the top pins correspond to the top LED). If you do not do this, you will find programming your square RGB LED projects to be rather confusing and frustrating.

## Hex Display
The hex display takes a 4-bit input and can display the integers 1 through 9 and the letters A through F. The input bits do not actually control the individual segments (it would not be possible to completely control six segments with only four bits), but rather the hex display recognizes the integer/letter that a given input corresponds to and displays this character without the need for any programming of what exactly that character should look like on the display.

<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/11311" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

This display is more simple to use than the seven segment and sixteen segment display and is great for displaying basic integers. However, it has less room for customization and can only display the first six letters of the alphabet.

## Seven Segment Display
The seven segment display takes in eight inputs and displays the output on the screen, usually representing a number. The top four inputs correspond to the middle, top left, top, and top right segments from left to right respectively. The bottom four inputs correspond to the bottom left, bottom, bottom right, and decimal segments from left to right respectively.

![Annotated Seven Segment](images/annotated_7seg.png)

You can test out different inputs for yourself:
<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/11316" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

A common use of the seven segment display is to display an integer from 1 to 9. You could manually use AND and OR gates to accomplish this, but there is a much easier way! Go to tools > combinational analysis to create a truth table that will allow you to simply input the binary equivalent of the integer you want to display and have the generated circuit display it for you. For a more complete explanation of how to do this, take a look at [this video](https://www.youtube.com/watch?v=EqxCBW0lMVQ).

The seven segment display is quite similar to the hex display, but the fact that it takes 8-bit input rather than 4-bit input makes it significantly more customizable. However, the larger input also makes it more complicated to work with.

## Sixteen Segment Display
The sixteen segment display takes two inputs and a total of 17 bits: 16 bits in the top input and 1 bit in the bottom input. Each of the 16-bits applied to the top input corresponds to a certain segment in the sixteen segment display. The single bit applied to the bottom input controls the decimal point. 

![Annotated Sixteen Segment](images/annotated_16seg.png)

You can test out different inputs for yourself:
<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/11319" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

There are both advantages and disadvantages to using the sixteen segment display as opposed to the hex and seven segment displays. The main advantage is that the greater number of segments allow you to create more detailed and clear numbers and letters. However, it requires double the input of the seven segment display and quadruple the input of the hex display, so it is significantly more complicated to work with.

# Standard Gates

> This guide will teach you how to use the standard gates in CircuitVerse. It will also explain the way the gates work. The guide will explain how to customize an 'And' gate in detail. Other gates have a similar customization.

Contributing Authors: [@satu0king](https://github.com/satu0king/)
                      [@brahmakulkarni](https://github.com/brahmakulkarni)

## And Gate

This gate gives a HIGH output only if all input values are HIGH.

Two-input And Gate Truth Table

| Input 1 | Input 2 | Output |
|---------|---------|--------|
| 0       | 0       | 0      |
| 0       | 1       | 0      |
| 1       | 0       | 0      |
| 1       | 1       | 1      |

Simple two-input And Gate
<iframe width="300px" height="200px" src="https://circuitverse.org/simulator/embed/734" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

Multi Input And Gate
You can change the number of inputs in the Property Menu.

<iframe width="300px" height="200px" src="https://circuitverse.org/simulator/embed/735" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

Multi-bitwidth And Gate
You can change the bitwidth in the Property Menu.

<iframe width="300px" height="200px" src="https://circuitverse.org/simulator/embed/736" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## Or Gate

This gate gives a HIGH output only if any of the input values are HIGH.

Two-input Or Gate Truth Table

| Input 1 | Input 2 | Output |
|---------|---------|--------|
| 0       | 0       | 0      |
| 0       | 1       | 1      |
| 1       | 0       | 1      |
| 1       | 1       | 1      |

Simple two-input Or Gate
<iframe width="300px" height="200px" src="https://circuitverse.org/simulator/embed/737" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## Not Gate

This gate simply inverts the input. It is also known as an inverter.

Not Gate Truth Table

| Input   | Output |
|---------|--------|
| 0       | 1      |
| 1       | 0      |

Simple Not Gate
<iframe width="300px" height="200px" src="https://circuitverse.org/simulator/embed/738" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## Xor Gate

This gate gives a HIGH output only if both inputs aren't the same.

Two-input Xor Gate Truth Table

| Input 1 | Input 2 | Output |
|---------|---------|--------|
| 0       | 0       | 0      |
| 0       | 1       | 1      |
| 1       | 0       | 1      |
| 1       | 1       | 0      |

Simple two-input Xor Gate
<iframe width="300px" height="200px" src="https://circuitverse.org/simulator/embed/740" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## Nand Gate

This gate gives the inverted output of an And gate. In other words, it only gives a LOW output when all inputs are HIGH.

Two-input Nand Gate Truth table

| Input 1 | Input 2 | Output |
|---------|---------|--------|
| 0       | 0       | 1      |
| 0       | 1       | 1      |
| 1       | 0       | 1      |
| 1       | 1       | 0      |

Simple two-input Nand Gate
<iframe width="300px" height="200px" src="https://circuitverse.org/simulator/embed/741" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## Nor Gate

This gate gives the inverted output of an Or gate. In other words, it only gives a HIGH output when all the inputs are LOW.

Two-input Nor Gate Truth Table

| Input 1 | Input 2 | Output |
|---------|---------|--------|
| 0       | 0       | 1      |
| 0       | 1       | 0      |
| 1       | 0       | 0      |
| 1       | 1       | 0      |

Simple two-input Nor Gate
<iframe width="300px" height="200px" src="https://circuitverse.org/simulator/embed/742" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## XNor Gate

This gate gives the inverted output of an Xor gate. In other words, it only gives a HIGH output if both the inputs are the same.

Two-input XNor Gate Truth Table

| Input 1 | Input 2 | Output |
|---------|---------|--------|
| 0       | 0       | 1      |
| 0       | 1       | 0      |
| 1       | 0       | 0      |
| 1       | 1       | 1      |

Simple two-input XNor Gate

<iframe width="300px" height="200px" src="https://circuitverse.org/simulator/embed/743" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

# Sequential Elements
> This guide will teach you how to use the various sequential elements available in CircuitVerse.

Contributing Authors: [@theredcap](https://github.com/theredcap)

## D Flip Flop

A delay or D Flip Flop is used to delay the input. It has a single data input in addition to the clock input. The output of D Flip Flop is the same as the input data.

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

T or 'toggle' Flip Flop is used to toggle the output. It has a single data input along with the clock input. If the value of the input is 1, then the output of the next state is the complement of the previous state.

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

SR Flip Flops is one of the simplest sequential circuits.  It has two inputs S and R along with the clock.  S here stands for 'Set' and R stands for 'Reset'. Thus when S is high the output is high, when R is high the output is low.

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
| 0    | 0    | No change |
| 1    | 0    | 1         |
| 0    | 1    | 0         |
| 1    | 1    | Toggle    |

You can play with the circuit here:

<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/12263" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## TTY

This component implements a very simple dumb terminal. It receives a sequence of ASCII codes and displays each printable character

#### Pins {docsify-ignore} 

* West edge, upper pin (input, bit width 7)
  Data - this is the ASCII value of the next character to be entered into the terminal.
* West edge, lower input marked by triangle (input, bit width 1)
  Clock - when triggered while the write-enable pin isn't 0, the current ASCII value on the Data input is processed by the terminal.
* South edge, leftmost pin (input, bit width 1)
  Write Enable - when 1 (or floating or error), a clock edge will result in processing a new character from the data input. The clock and data inputs are ignored when Write Enable is 0.
* South edge, second pin from left (input, bit width 1)
  Clear - when 1, the terminal is cleared of all data, and all other inputs are ignored.
  
 To get the following circuit, click on TTY under the Sequential circuits and connect it with a random generator(Do not forget to take bitwidth of 7).
 
 <iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/13085" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>
 
 
 ## Keyboard
 
 This component allows the circuit to read keys typed from the keyboard - as long as the keys are representable in the 7-bit ASCII code.
 
 #### Pins {docsify-ignore}
 
 * West edge, marked by a triangle (input, bit width 1)
   Clock - when triggered while the read-enable pin isn't 0, the leftmost character from the buffer is deleted, and the outputs are updated to reflect the buffer's new status.
*  South edge, leftmost pin (input, bit width 1)
   Read Enable - when 1 (or floating or error), a clock edge will consume the leftmost character from the buffer. The clock input is ignored when Read Enable is 0.
*  South edge, second pin from left (input, bit width 1)
   Clear - when 1, the buffer is emptied and does not accept further characters.
*  South edge, second pin from right (output, bit width 1)
   Available - this is 1 when the buffer contains at least one character and 0 when the buffer is empty.
*  South edge, rightmost pin (output, bit width 7)
   Data - the 7-bit ASCII code for the leftmost character in the buffer, or 0 if the buffer is empty.
   
  To get the following circuit, Click on the Keyboard under the sequential circuits and type any characters.
  
  <iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/13087" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

# Splitter

> This guide will teach you how to use the splitters in CircuitVerse. Splitters are used to split high bitwidth wires(buses) into lower bitwidth wires(buses) and vice versa. Note that splitter is the only two-way circuit element in CircuitVerse.

Contributing Authors: [@satu0king](https://github.com/satu0king/)

## Full Split

To get the following splitter, click on splitter, then type "4" as bitwidth, then type "1 1 1 1" as bitwidth split.

4 -> 1 1 1 1 split
<iframe width="650px" height="400px" src="https://circuitverse.org/simulator/embed/1959" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## Partial Split

To get the following splitter, click on splitter, then type "8" as bitwidth, then type "4 4" as bitwidth split.

8 -> 4 4 split
<iframe width="650px" height="400px" src="https://circuitverse.org/simulator/embed/1960" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

# Decoders and Plexers

> This guide will teach you how to use the decoders and plexers available on Circuitverse.

Contributing Authors: [@brahmakulkarni](https://github.com/brahmakulkarni)

## Multiplexer

A multiplexer is used to selectively pass only one of the inputs provided to it. This is done using a control signal. The number of inputs is always a power of 2. If there are N control bits, then there can be a maximum of 2^N inputs.

Consider a simple multiplexer that takes two single-bit inputs (T1 and T2), a single-bit control signal (S) and has an output (Out). This Type of multiplexer is known as a 2 to 1 multiplexer. The truth table is given below:

|    S    |   Out   |
|---------|---------|
|    0    |   T1    |
|    1    |   T2    |

<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/746" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

Using the property menu (as shown in the getting started section) we can pass multi-bit inputs and also increase or decrease the number of inputs that can be given to the multiplexer.

Here is an example where there are 4 three-bit inputs and a two-bit control signal or a 4 to 1 multiplexer. The truth table is given below:

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

Its live cicuit is embedded below:

<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/756" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

Using the property menu (as shown in the getting started section) we can pass multi-bit inputs and also increase or decrease the number of outputs by changing the number of bits we want the control signal to have.

Here is another example of demultiplexer where a 3-bit input is taken and a two-bit control signal or a 1 to 4 demultiplexer. The truth table is given below:

|    S1   |    S0   |    O1   |    O2   |    O3   |    O4   |   
|---------|---------|---------|---------|---------|---------|
|    0    |    0    |    T    |    0    |    0    |    0    |
|    0    |    1    |    0    |    T    |    0    |    0    |
|    1    |    0    |    0    |    0    |    T    |    0    |
|    1    |    1    |    0    |    0    |    0    |    T    |

Its live circuit is embedded below:

<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/757" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## Bit-selector

A bit-selector's function is self-explanatory. It takes a single or multi-bit input and gives the bit we desire to isolate as output. This is done using a single or multi-bit select line. The select line value indicates the specific bit we wish to isolate. An added feature is the bit-selector shows the bit we want to isolate (as chosen using the select line) within it's body in decimal form.

Consider a bit selector with a four-bit input. Let each of its bits be addressed separately as T3, T2, T1, T0 (from most significant to least significant). Let it have a two-bit select line (S1 and S0) and a single-bit output (Out). The truth table is given below:

|    S1   |    S0   |   Out   |   
|---------|---------|---------|
|    0    |    0    |    T0   |
|    0    |    1    |    T1   |
|    1    |    0    |    T2   |
|    1    |    1    |    T3   |

Its live circuit is embedded below:

<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/758" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## Most Significant Bit (MSB) Detector

The MSB detector gives as output the bit position of the most-significant-bit of the input. In other words, it tells us at which bit position the right-most one is located. An enable output is also provided to show if the MSB detector is active. The bit position of the MSB is also shown in decimal form within the body of the MSB detector.

Consider an MSB detector with a four-bit input. Its live circuit is embedded below:
<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/11988" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>


## Least Significant Bit (LSB) Detector

The LSB detector gives as output the bit position of the least-significant-bit of the input. In other words, it tells us at which bit position the left-most one is located. An enable output is also provided to show if the LSB detector is active. The bit position of the LSB is also shown in decimal form within the body of the LSB detector.

Consider an LSB detector with a four-bit input. Its live circuit is embedded below:
<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/11990" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## Priority Encoder

The priority encoder provided by Circuitverse works in a similar fashion to the MSB detector (in practice it can work like the LSB detector also). There is a specific output based on the bit position of the MSB, irrespective of the lesser significant bits. AN enable input is also provided to activate/deactivate the priority encoder. If there are N outputs, there will be 2^N inputs.

Consider a priority encoder with four single-bit inputs (T3, T2, T1 and T0 from most to least-significant bit) and two single-bit outputs (O2 and O1 from most to least-significant bit). The truth table is given below:

|   T3    |   T2    |   T1    |   T0    |   O2    |   O1    |
|---------|---------|---------|---------|---------|---------|
|    0    |    0    |    0    |    1    |    0    |    0    |     
|    0    |    0    |    1    |    X    |    0    |    1    |
|    0    |    1    |    X    |    X    |    1    |    0    |
|    1    |    X    |    X    |    X    |    1    |    1    |

Its live circuit is embedded below:
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

Its live circuit is embedded below:

<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/763" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## Parity Generator & Parity Detector

These combinational circuits are used together to make data transmission error tolerant. Parity generator is used by the sender and parity detector is used by the receiver.

### Parity Generator

Parity generator is used to generate a parity bit which is later used by parity detectors to detect errors in data transmission. The parity bit is added to the original message to be sent.

In an **even parity** generator, if the input message has even number of `1`s, the parity bit will be 0. On the other hand, if there are odd number of `1`s, parity bit generated will be 1.

#### Truth Table for an Even Parity Generator for a 3-bit word


| A  | B  | C  |  PARITY BIT(P)    |
|:-:|:-:|:-:|:-:|:-:|
|  0 |  0 |  0 |   0   |
|  0 |  0 |  1 |   1   |
|  0 |  1 |  0 |   1   |
|  0 |  1 |  1 |   0   |
|  1 |  0 |  0 |   1   |
|  1 |  0 |  1 |   0   |
|  1 |  1 |  0 |   0   |
|  1 |  1 |  1 |   1   |



Whereas, in an **odd parity** generator, if the input message has even number of `1`s, the parity bit will be 1. On the other hand, if there are odd number of `1`s, parity bit generated will be 0.

#### Truth Table for an Odd Parity Generator for a 3-bit word

| A  | B  | C  |  PARITY BIT(P)    |
|:-:|:-:|:-:|:-:|:-:|
|  0 |  0 |  0 |   1   |
|  0 |  0 |  1 |   0   |
|  0 |  1 |  0 |   0   |
|  0 |  1 |  1 |   1   |
|  1 |  0 |  0 |   0   |
|  1 |  0 |  1 |   1   |
|  1 |  1 |  0 |   1   |
|  1 |  1 |  1 |   0   |



The parity bit generated is then added to the message to be sent.


### Parity Detector

Parity detector receives the message and checks it for errors. If an error is detected, parity error check bit gives `1` as output and `0` when no error is detected.

#### Truth Table for an Even Parity Detector for a 3-bit word

| A  | B  | C  |  P |   PARITY ERROR CHECK |
|:-:|:-:|:-:|:-:|:-:|---|
| 0  | 0  | 0  | 0  | 0  |
| 0  | 0  | 0  | 1  | 1  |
| 0  | 0  | 1  | 0  | 1  |
| 0  | 0  | 1  | 1  | 0  |
| 0  | 1  | 0  | 0  | 1  |
| 0  | 1  | 0  | 1  | 0  |
| 0  | 1  | 1  | 0  | 0  |
| 0  | 1  | 1  | 1  | 1  |
| 1  | 0  | 0  | 0  | 1  |
| 1  | 0  | 0  | 1  | 0  |
| 1  | 0  | 1  | 0  | 0  |
| 1  | 0  | 1  | 1  | 1  |
| 1  | 1  | 0  | 0  | 0  |
| 1  | 1  | 0  | 1  | 1  |
| 1  | 1  | 1  | 0  | 1  |
| 1  | 1  | 1  | 1  | 0  |

#### Truth Table for an Odd Parity Detector for a 3-bit word

| A  | B  | C  |  P |   PARITY ERROR CHECK |
|:-:|:-:|:-:|:-:|:-:|---|
| 0  | 0  | 0  | 0  | 1  |
| 0  | 0  | 0  | 1  | 0  |
| 0  | 0  | 1  | 0  | 0  |
| 0  | 0  | 1  | 1  | 1  |
| 0  | 1  | 0  | 0  | 0  |
| 0  | 1  | 0  | 1  | 1  |
| 0  | 1  | 1  | 0  | 1  |
| 0  | 1  | 1  | 1  | 0  |
| 1  | 0  | 0  | 0  | 0  |
| 1  | 0  | 0  | 1  | 1  |
| 1  | 0  | 1  | 0  | 1  |
| 1  | 0  | 1  | 1  | 0  |
| 1  | 1  | 0  | 0  | 1  |
| 1  | 1  | 0  | 1  | 0  |
| 1  | 1  | 1  | 0  | 0  |
| 1  | 1  | 1  | 1  | 1  |

Although, parity detector can detect most errors, it has some limitations. Some of them are listed below:
* Error is detected only if there are odd number of error bits.
* Error in parity bit might lead to error detection despite correct transmission.
* Parity detector will not be able to detect errors where both parity and data bit has such error that the parity bit matches.

You can verify the same in circuit given below.

<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/109517" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen></iframe>

# Miscellaneous Elements

Contributing Author(s): [@iamNamanKhare](https://github.com/iamNamanKhare), [@NavonilDas](https://github.com/NavonilDas)

>This Section contains Documentation of various miscellaneous elements.

**List of Elements :**

- [ALU](#ALU)
- [Adder](#Adder)
- [Buffer](#Buffer)
- [Tri State Buffer](#tri-state-buffer)
- [Tunnel](#tunnel)
- [Two's Complement](#two39s-complement)

## ALU

An arithmetic logic unit (ALU) is a combinational digital electronic circuit that performs arithmetic and bitwise operations
on integer binary numbers.

There are Different ports in an ALU :

- A : Integer Operand (Input 1)
- B : Integer Operand (Input 2)
- ctr : This port takes up an Input(opcode) with BitWidth of 3 Bits.

>Input Values ( Opcodes ) for **ctr** are discussed in the later section.

- Cout (status output) : This is an OUTPUT port for getting **carry** after the operation on given operands.
- Ans : As the name suggests, Output of **Result** after the operation on given operands.

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

## Buffer
A buffer has only a single input and a single output with behavior that is the opposite of a NOT gate. It simply passes its input, unchanged, to its output.

| Input | Output |
|-------|--------|
| 0     | 0      |
| 1     | 1      |

**Simple Buffer Example**

Drag and Drop the Buffer from Misc Section. Connect input and output to the buffer.

<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/13250" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## Tri-State Buffer
A tri-state buffer is similar to a buffer, but it adds an additional "enable" input that controls whether the primary input is passed to its output or not. If the "enable" inputs signal is High (1), the tri-state buffer behaves like a normal buffer. If the "enable" input signal is LOW (0), the tri-state buffer passes a high impedance (Z) signal, which effectively disconnects its output from the circuit.

| Enable | Input | Output |
|--------|-------|--------|
|   0    |   0   |   Z    |
|   0    |   1   |   Z    |
|   1    |   0   |   0    |
|   1    |   1   |   1    |


**Simple Tristate Buffer Example**

Drag and Drop a TriState from Misc Section. Connect input, output and enable pins.

<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/13252" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## Tunnel
A tunnel acts like a hidden wire that binds points together, but unlike a wire, the connection is not drawn. All tunnel with same " Debug Flag identifier " are effectively connected together.

**Simple Example of a Tunnel**

Drag and Drop a two Tunnels from Misc section. Check whether both the tunnel have same " Debug Flag identifier ". Connect one as input and other one as output.

<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/12642" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## Two's Complement

This element calculates the two's complement of any binary number. Two's complement is widely used to represent signed integers in computers. Calculating the two's complement of a binary number involves two operations: inverting all the bits and adding 1 to the number obtained.

**Simple Example of Two's Complement**

 Drag and drop the element on the canvas and connect it with an input and an output. Ensure that the input, output and the two's complement element have the same bitwidth. You can also make your own two's complement circuit using some NOT gates and an adder.  

Here's an example:
```
Given number        1  1  1  1  0           \\ Input bits
1's complement      0  0  0  0  1           \\ Connect NOT Gates to all input bits
add 1               +           1           \\ Add 1 using an adder
                   ---------------
2's complement      0  0  0  1  0
                   ---------------
```
<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/110615" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen></iframe>

# Memory elements
>In this section you will learn about RAM, ROM, EEPROM.

## RAM 

> RAMs are volatile therefore this component does not persist the memory contents.

Changes to addressWidth and bitWidth cause data to be lost.
Think of these operations as being equivalent to taking a piece of RAM out of a
circuit board and replacing it with another RAM of different size.

The contents of the RAM can be reset to zero by setting the RESET pin 1 or
or by selecting the component and pressing the "Reset" button in the properties window.

The contents of the RAM can be dumped to the console by transitioning CORE DUMP pin to 1
or by selecting the component and pressing the "Core Dump" button in the properties window.
Address spaces that have not been written will show up as undefined in the core dump.
![RAM](images\ram.png)
<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/12515" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## ROM

Short for **read-only memory**, ROM is a storage medium that is used with computers and other electronic devices. As the name indicates, data stored in ROM may only be read. 

It is either modified with extreme difficulty or not at all. ROM is mostly used for firmware updates. A simple example of ROM is the cartridge used with video game consoles, which allows one system to run multiple games. Another example of ROM is EEPROM, which is a programmable ROM used for the computer BIOS.

The ROM in [CircuitVerse](https:circuitverse.org/simulator) accepts 4-bit address input. The corresponding value stored in the particular address is returned as a 8-bit output, *Remember, initial address always starts  from 0.*

The **enable** signal is used to enable the ROM.

You can play with the circuit here:

<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/12358" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

>Note: Unlike RAM (**random access memory**), ROM is non-volatile, which means it keeps its contents regardless of whether or not it has power.

## EEPROM

> The EEPROM is a non-volatile memory element.

EEPROMs are more "expensive" than RAMs, so the maximum address space of the EEPROM is smaller than the RAM, limited to 10-bits (1024 addresses).  

Erasing the EEPROM will make all its values zero. There is no way to recover the original data once you erase it, just like it happens on a real EEPROM. That being said, you can always reload the project and the saved data will be there.  

EEPROM data survives cut-and-paste operations, so you can do interesting things, like duplicating EEPROMs, creating an EEPROM in one circuit and then cut-and-pasting the element in another circuit,or you can have a library of ready-to-use EEPROMs with interesting data.

  * To populate the EEPROM, make WRITE=1 and click RESET to erase  everything.
  * Then click the keyboard and type some characters, until the address counter goes back to zero. After that, make WRITE=0 and the text in the EEPROM will repeatedly show in the TTY element.
  * Save the circuit and it will persist the contents of the EEPROM for future use
<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/12187" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>  

 
