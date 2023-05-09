# Color Palette Generator

The purpose of the color palette generator is to create a random color palette for a user and then display the resulting palette. The user will be able to specify the size of the color palette that they want (from 2 to 30 elements). A list of random hex values will be generated and displayed next to their corresponding colors. This will be written in JavaScript with the intention to be displayed in a web browser. There may be further extensions of the code that allow extra functionality. To view the live color generator, visit my portfolio website [project page](https://bexcoding.github.io/projects.html) and click on the image for 'Color Palette Generator'.

# Version 1 

Description: Version 1 has the capability to create random color palettes of varying sizes.

Functionality:

- Slider: Has a slider that can accept user input as to how many different colors should be added into the palette. As the slider moves, the number to its left updates to show the current value of the slider. The slider can choose palettes of sizes from 2 to 30.
- Button: Has one button that gets rid of the current palette in the display area and creates a new one.
- Random palette: The generator can make color palettes, but only random ones. There is no capability to change the types of colors generated - only the number of colors generated can be changed.
- Responsive text color: The text that displays the name of the hex color is capable of changing based on the relative brightness of the color. When the color is darker, the text is white so that it shows up on the background. When the background is lighter, it will have black text. This is to avoid having text that is hard to read when displayed on the background.

# Version 2

Description: Version 2 has the added ability to create different types of color palettes.

Functionality (Added On Top of Version 1):

- Font: The font was standardized. The title is a serif font and the rest of the text is sans-serif.
- Buttons: Four extra buttons were added and they were increased in size. Because the buttons took up more space, they were spaced evenly and allowed to wrap if the screen got sized down.
- Squares: The color squares were assigned a minimum width so that they wrap when the screen is sized down.
- Palette types: By adjusting the size of the random numbers generated, four different palettes were added. Now it is possible to create a purely random palette as well as a light, dark, warm, or cool palette.
