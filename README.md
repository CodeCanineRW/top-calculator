# Calculator

## The Odin Project - Foundations Course Final Project

This is a simple in browser Calculator. This project was intended to be a Final Project for the Foundations course, a culmination of fundamental skills learned in HTML, CSS, and Javascript. 

This project contains the concepts utilized in earlier lessons and builds upon them by introducing:

- DOM Manipulation
    - Receiving user input from HTML elements with Event Listeners 
    - Updating data in an array to recall to the DOM
- Javascript Logic
    - Introducing objects to store operations
    - Using functions to call operations from objects
    - Maintaining data through chained operations
    - Manipulating arrays to store user input
- Handling exceptions and preventing errors
    - Prevent multiple decimal inputs
    - Equal Key / evaluation request without 2 operands

## Post Project Analysis

The Odin Project did a solid job setting up and guiding you to be ready for this project. As I have noticed with previous projects, there is always room left for you to decide just how you want to tackle each constraint they provide, yet they provide enough of an outline to help get you moving. I did stray a little bit on my version of the calculator in a couple ways, as I had a goal in mind of how I wanted it to look and operate and wanted to see if I could achieve that. Also, I didn't want to directly copy the example calculator that was linked, but use it as a guide. I decided to incorporate a history / previous expression upper line on the display. Also, having this, I decided to incorporate the ability to allow the user to evaluate an expression, and press and operator to continue on the a new expression after another number is entered. 

I spent more time prepping for this project than I did on previous ones. For this I spent time with pen and paper trying to mark down the variables I needed, and the steps I would follow to write the code. I also spent a good amount of time writing out and 'tracing' the steps, for example:
 a number is entered -> added to an array, update display with array
 an operator is pressed -> if only first operand entered, store operator and number, clear array, update display
 backspace is pressed -> use pop() method on array, update display

As I continued through these 'procedures', I discovered that there were more considerations I needed to account for than I initially thought. I also realized I had to decide when to use these inputs as array values, strings, or numbers and where that change would take place. Finally, I compared assigning a specific function to each operator key, vs creating an 'operations' object that I could repeatedly call with a single function (which is what I decided to implement). Running through this ahead of time, and on paper or 'in plain english', I felt helped me keep on track and able to keep moving when it got to typing out the code.

## Future Improvements 

**Keyboard Functionality** I have an idea of how I want to implement keyboard functionality, and plan to introduce this in a later version. 

**Percent Key Logic** The percent function currently works, but if pressed multiple times it introduces errors. Also, I could find a cleaner way to provide this operation.

**Division by Zero Errors** Division by zero is not properly handled / accounted for. This will be corrected in an update.

**Plus/Minus Operation** The current implementation works, and can both and remove a negative sign to my entry number array, and it is properly displayed. However, I initially did this through calling shift() and unShift() on the array. I think this could more properly be handled mathematically and returning an updated array. 

**Input limits** There is no current limit on the length of number a user can input. Large values impact the UI layout. A limit or other solution should be created to prevent this. 