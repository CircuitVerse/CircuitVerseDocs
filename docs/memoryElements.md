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

 
