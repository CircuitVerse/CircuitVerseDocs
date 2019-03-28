  
                                    ### EEPROM(Electrically Erasable and Programmable Read Only Memory)

The EEPROM is a non-volatile memory element.

Its content is persisted within the CircuitVerse project and its pins and usage are identical to the RAM element.

EEPROMs are more "expensive" than RAMs, so the maximum address space of the EEPROM is smaller than the RAM, limited to 10-bits (1024 addresses). For CircuitVerse, this helps keep the serialized project small.

Erasing the EEPROM will make all its values zero. There is no way to recover the original data once you erase it, just like it happens on a real EEPROM. That being said, you can always reload the project and the saved data will be there. If you erase the EEPROM and save the project, then, you know...you asked for it. 

EEPROM data survives cut-and-paste operations, so you can do interesting things, like duplicating EEPROMs, creating an EEPROM in one circuit and then cut-and-pasting the element in another circuit, or you can have a library of ready-to-use EEPROMs with interesting data.

### Programming EEPROMs manually

Users might want to manually program the contents of an EEPROMs instead of building a circuit to do so.

An easy technique for this is to edit the JSON representation of the element directly:

    select-and-copy an EEPROM
    paste the contents of the clipboard into your preferred editor
    look for the data array in the constructorParamaters of the corresponding EEPROM
    update the array with the numbers you desire
    select the whole JSON and paste it back into CircuitVerse.


    The same technique can be used to pre-populate a ROM element.

One can argue that we should have a built-in way to populate ROM, RAM and EEPROM in the UI. We have it for the ROM, which is limited to 16 bytes, but RAMs and EEPROMs can be larger, so the ROM UI does not scale for them. Maybe a simplistic solution would be to just ask for a string then parse it as a JSON array. This can be added in a separate issue/PR.







                  
                                                      ### RAM(Random Access Memory)
 
RAM (Random Access Memory) is the internal memory of the CPU for storing data, program, and program result. It is a read/write memory which stores data until the machine is working. As soon as the machine is switched off, data is erased.
Primary Memory

Access time in RAM is independent of the address, that is, each storage location inside the memory is as easy to reach as other locations and takes the same amount of time. Data in the RAM can be accessed randomly but it is very expensive.

RAM is volatile, i.e. data stored in it is lost when we switch off the computer or if there is a power failure. Hence, a backup Uninterruptible Power System (UPS) is often used with computers. RAM is small, both in terms of its physical size and in the amount of data it can hold.

RAM is of two types −

    Static RAM (SRAM)
    Dynamic RAM (DRAM)


### Static RAM (SRAM) 

The word static indicates that the memory retains its contents as long as power is being supplied. However, data is lost when the power gets down due to volatile nature. SRAM chips use a matrix of 6-transistors and no capacitors. Transistors do not require power to prevent leakage, so SRAM need not be refreshed on a regular basis.

There is extra space in the matrix, hence SRAM uses more chips than DRAM for the same amount of storage space, making the manufacturing costs higher. SRAM is thus used as cache memory and has very fast access.

### Characteristic of Static RAM


    Long life
    No need to refresh
    Faster
    Used as cache memory
    Large size
    Expensive
    High power consumption

### Dynamic RAM (DRAM)

DRAM, unlike SRAM, must be continually refreshed in order to maintain the data. This is done by placing the memory on a refresh circuit that rewrites the data several hundred times per second. DRAM is used for most system memory as it is cheap and small. All DRAMs are made up of memory cells, which are composed of one capacitor and one transistor.

### Characteristics of Dynamic RAM


    Short data lifetime
    Needs to be refreshed continuously
    Slower as compared to SRAM
    Used as RAM
    Smaller in size
    Less expensive
    Less power consumption

 



                                                 ### ROM(Read Only Memory)

ROM stands for Read Only Memory. The memory from which we can only read but cannot write on it. This type of memory is non-volatile. The information is stored permanently in such memories during manufacture. A ROM stores such instructions that are required to start a computer. This operation is referred to as bootstrap. ROM chips are not only used in the computer but also in other electronic items like washing machine and microwave oven.

### Types of ROMs and their Characteristics:

### 1. MROM (Masked ROM)

The very first ROMs were hard-wired devices that contained a pre-programmed set of data or instructions. These kind of ROMs are known as masked ROMs, which are inexpensive.

### 2. PROM (Programmable Read Only Memory)

PROM is read-only memory that can be modified only once by a user. The user buys a blank PROM and enters the desired contents using a PROM program. Inside the PROM chip, there are small fuses which are burnt open during programming. It can be programmed only once and is not erasable.

### 3. EPROM (Erasable and Programmable Read Only Memory)

EPROM can be erased by exposing it to ultra-violet light for a duration of up to 40 minutes. Usually, an EPROM eraser achieves this function. During programming, an electrical charge is trapped in an insulated gate region. The charge is retained for more than 10 years because the charge has no leakage path. For erasing this charge, ultra-violet light is passed through a quartz crystal window (lid). This exposure to ultra-violet light dissipates the charge. During normal use, the quartz lid is sealed with a sticker.

### 4. EEPROM (Electrically Erasable and Programmable Read Only Memory)

EEPROM is programmed and erased electrically. It can be erased and reprogrammed about ten thousand times. Both erasing and programming take about 4 to 10 ms (millisecond). In EEPROM, any location can be selectively erased and programmed. EEPROMs can be erased one byte at a time, rather than erasing the entire chip. Hence, the process of reprogramming is flexible but slow.

#### Advantages of ROM

The advantages of ROM are as follows −


    Non-volatile in nature
    Cannot be accidentally changed
    Cheaper than RAMs
    Easy to test
    More reliable than RAMs
    Static and do not require refreshing
    Contents are always known and can be verified

















































