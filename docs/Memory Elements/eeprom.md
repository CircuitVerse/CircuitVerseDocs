 
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

