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
  
 To get following circuit, click on TTY under the Sequential circuits and connect it with random generator(Do not forget take bitwidth of 7).
 
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
  

## RAM 

Short for **random access memory**, RAMs are volatile therefore this component does not persist the memory contents.

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

The ROM in [CircuitVerse](https:circuitverse.org/simulator) accepts 4 bit address input. The corresponding value stored in the particular address is returned as a 8 bit output, *Remember, initial address always starts  from 0.*

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

 
 
  

