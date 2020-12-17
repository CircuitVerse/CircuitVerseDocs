# Uses/Applications of Flip Flops

A Flip-Flop is an electronic circuit with two states, the present state(Q<sub>n</sub>) and the next state(Q<sub>n+1</sub>).It is used to store data by varying input states i.e It is a sequential circuit where output can be varied according to input timing or order.

Flip-Flops have a wide range of applications where the existing state has to execute or process depending on the previous state.
Some of the most common applications of flip flops are :

  1. Registers
  2. Counters


## 1. Registers

A flip-flop can only store single bit binary data i.e either 0 or 1. But in complex digital circuit and applications there is a need to store multiple bit data. This is where Registers come into action. A register is used to store 'n' bit data. A register is made by combining flip-flops. As a flip-flop can only store 1 bit , 'n' flip-flops combine together to store 'n' bit data.For example:- If a register stores 8 bit data, then it is a collection of 8 flip-flops.

When a number of flip flops are connected in series, this arrangement is called a Register. Register can be further classified into two types:-

  1. Asynchronous Registers
  2. Synchronous Registers

### 1. Asynchronous Registers

The registers which function upon asynchronous triggers are known as “Asynchronous shift registers”.

### 2. Synchronous Registers

The shift registers which will change their state only when they are triggered by clock pulse are called “Synchronous shift registers”. These registers either work for positive clock pulse or negative clock pulse depending on their triggering.


The stored information in form of data bits can be transferred within the registers; these are called as ‘Shift Registers’.
Shift registers are of several types, they are

  * Shift left register.
  * Shift right register.
  * Shift around register.
  * Bi directional shift registers.
  * Universal shift registers


## 2. Counters

Counter is a specific type of sequential circuit which stores how much time a process has occurred during a given clock pulse. Like registers, the state, or the flip-flop values themselves, serves as the “output.” The output value increases by one on each clock cycle. After the largest value, the output “wraps around” back to 0.

Digital counters have the following important characteristics:

  * Maximum number of count
  * Up-Down Count
  * Asynchronous or Synchronous Operation
  * Free-Running or Self-Stopping

Counters are broadly classified into two categories:

  1. Asynchronous Counters
  2. Synchronous Counters

### 1. Asynchronous Counters:

Asynchronous counters are counters in which the output of the first flip flop serves as the clock pulse input of the next flip-flop, i.e. no common clock pulse is provided to flip-flops. 

### 2. Synchronous Counters:

Synchronous counters are counters in which the common clock pulse is provided to all flip-flops. As a result there is no propagation delay and the output is generated in parallel.


## Decade Counter

A decade counter is a counter which starts from initial state and counts ten states and then returns to the initial state.For example a simple decade counter will count from 0 to 9. A typical decade counter can count from 10 to 19 also.
