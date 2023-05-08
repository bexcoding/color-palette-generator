# Color Palette Generator

The purpose of the color palette generator is to create a random color palette for a user and then display the resulting palette. The user will be able to specify the size of the color palette that they want (from 2 to 30 elements). A list of random hex values will be generated and displayed next to their corresponding colors. This will be written in JavaScript with the intention to be displayed in a web browser. There may be further extensions of the code that allow extra functionality.

# version 1 

Description: Version 1 has the capability to create random color palettes of varying sizes.

Functionality:

- Slider: Has a slider that can accept user input as to how many different colors should be added into the palette. As the slider moves, the number to its left updates to show the current value of the slider. The slider can choose palettes of sizes from 2 to 30.
- Button: Has one button that gets rid of the current palette in the display area and creates a new one.
- Random palette: The generator can make color palettes, but only random ones. There is no capability to change the types of colors generated - only the number of colors generated can be changed.

# TODO List

TODO list for version 1 of the palette generator:

- [X] Create code to allow for a list of random hex values to be generated.
- [X] Create a display area that can accomodate different numbers of colors.
  - [X] Each displayed color needs to show the color itself along with its associated hex value.
- [X] Add slider for the user to be able to choose the amount of different colors in the palette.
- [X] Add button that clears the palette and generates a new one.
- [ ] Make styling with CSS more attractive
  - [ ] Style displayed hex so that it is easier to read
  - [X] Set overall background color
  - [X] Style button and slider
  - [X] Make color boxes more attractive
- [X] Organize script to make more readable
- [X] Comment on the functions 
