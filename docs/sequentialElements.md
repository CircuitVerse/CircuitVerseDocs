## TTY

This component implements a very simple dumb terminal. It receives a sequence of ASCII codes and displays each printable character

# Pins in CircuitVerse

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
 
 # Pins in CircuitVerse
 
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
