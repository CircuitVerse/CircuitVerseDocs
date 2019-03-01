                                                            # Use Of FlipFlops

## What is a Flip Flop Circuit?

The designing of the flip flop circuit can be done by using logic gates such as two NAND and NOR gates. Each flip flop consists of two inputs and two outputs, namely set and reset, Q and Q’. This kind of flip flop is stated to as an SR flip flop or SR latch.

The FF includes two states shown in the following figure. When Q=1 andQ’=0 then it is in the set state. When Q=0 and Q’=1then it is in the clear state. The FF’s outputs Q and Q’ are complements of each other and that are stated to as the normal & complement outputs respectively. The binary state of the flip flop is taken to be the normal output value.

When the input 1 is applied to the flip flop, both the outputs of the FF go to 0, so both the o/p’ s are complements of each other. In a regular operation, this ailment must be neglected by making sure that ones are not applied to both the inputs concurrently


### Types of Flip Flops

Flip flop circuits are classified into four types based on its use, namely D-Flip Flop, T- Flip Flop, SR- Flip Flop and JK- Flip Flop.
SR-Flip Flop

The SR-flip flop is built with a two AND gates and a basic NOR flip flop. The o/ps of the two AND gates remain at 0 as long as the CLK pulse is 0, irrespective of the S and R i/p values. When the CLK pulse is 1, information from the S and R inputs permits through the basic FF. When S=R=1, the clock pulse occurrence roots both the o/ps go to 0. When the CLK pulse is detached, the state of the FF is unstated.
SR Flip Flop
SR Flip Flop
D Flip Flop

The simplification of the SR flip flop is nothing but D flip-flop which is shown in the figure. The input of the D-flip flop directly goes to the input S and its complement goes to the i/p R. The D-input is sampled throughout the existence of a CLK pulse. If it is 1, then the FF is switched to the set state. If it is 0, then the FF switches to the clear state.
D Flip Flop
D Flip Flop
JK Flip Flop

A JK-FF is a simplification of the SR-flip flop. The inputs of the J and K flip flops behave like the inputs S & R. When input 1 is applied to the both the inputs J and K, then the FF switches to its complement state. The figure of this flip flop is shown below. The designing of the JK FF can be done in such a way that the o/p Q is ANDed with P and. This procedure is made so that the FF is cleared during a CLK pulse only if the output was previously 1. In the same way output is ANDed with J & CP, so that the FF is cleared during a CLK pulse only is Q’ was previously 1.
JK Flip Flop
JK Flip Flop

    When J=K=0, the CLK has no effect on the o/p and the o/p of the FF is similar as its previous value. This is because when both the J &K are 0, the o/p of their particular AND gate becomes 0.
    When J=0, K=1, the o/p of the AND gate is equivalent to J becomes 0 that is, S=0 and R=1 thus Q’ becomes 0. This condition will change the FF. This signifies the RESET state of FF.

### T Flip Flop

The T-flip flop or toggle flip flop is a single i/p version of the JK-flip flop. The working of this FF is as follows: When the input of the T is ‘0’ such that the ‘T’ will make the next state that is similar as the current state. That means, when the input of the T-FF is 0 then the present state and the next state will be 0. However, if the i/p of the T is 1 then the present state is inverse to the next state. That means, when T=1, then the present state =0 and next state =1)
T Flip Flop
T Flip Flop
Applications of Flip Flops

Application of the flip flop circuit mainly involves in bounce elimination switch, data storage, data transfer, latch, registers, counters, frequency division, memory, etc. Some of them are discussed below.
Registers

A register is a collection of a set of flip flops used to store a set of bits. For instance, if you want to store an N – bit of words you need N number of FFs. A FF can store only one bit of data (0 or 1). A number of FFs are used when the number of data bits to be stored. A register is a set of FFs used to store a binary data. The data storage capacity of a register is a set of bits of digital data that it can retain. Loading a register can be defined as setting or resetting the separate FFs, i.e, giving data into the register so the status of the FF communicates to the bits of data to be stored.

Data loading may be serial or parallel. In serial loading, the data is transferred into the register in the form of serial (i.e, one bit at a time), but in parallel loading, the data is transmitted into the register in the form of parallel form that means, all the FFs are activated into their new states at the same time. Parallel input necessitates that the SET or RESET controls of every FF to be accessible.
RAM (Random Access Memory)

RAM is used in computers, information processing systems, digital control systems it is necessary to store digital data and recover the data as preferred. FFs can be used to make memories in which information can be stored for any required length of time and then deliver whenever required.

The information stored in read write memories built from semiconductor devices that will be lost if power is detached, that memory is said to be unstable. But read only memory is non-volatile. RAM is the memory whose memory locations can be right to use directly and instantly. By contrast, to access a memory location on a magnetic tape, it is required to twist or untwist the tape and go through a series of addresses before reaching the preferred address. So, the tape is called the sequential access memory.

Therefore, this is all about flip flop, flip flop circuit, flip flop types and its applications. We hope that you have got a better understanding of this concept. Furthermore, any queries regarding this concept or electrical and electronics projects, please give your valuable suggestions in the comment section below.Here is a question for you, what is the main function of flip flop in digital electronics?



