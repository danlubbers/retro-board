<p align="center">
  <img src="https://github.com/danlubbers/retro-board/blob/master/src/assets/retro-board-screenshot.png" alt="retroboard">
</p>

## Description
A retrospective board is used within the Scrum workflow. Scrum is the most popular Agile style of software project management used to guide the software development life cycle. Scrum style management is based on four basic ceremonies for each sprint or software release: the 1.) Sprint Planning meeting, 2.) Daily Stand-up, 3.) Sprint Review, and 4.) Sprint Retrospective. As a part of the Sprint Retrospective, team members will use a retrospective board to reflect on what went well and what they need to improve on for next time.

## Setup

1. Clone this repo: `https://github.com/danlubbers/retro-board`
2. CD into `retro-board`
3. `npm install` dependencies 
4. `npm start`


## UI Requirements
---

* [x] The Retro Board should have three categories: 1.) "Went Well" 2.) "To Improve" and 3.) "Action Items". The categories must be displayed in this order. They must be arranged in such a way that the user can easily tell what UI elements on the page belong to what category.
* [x] Each category should contain an add button or another type of UI element. When clicked or activated, the application will add a new retrospective item to the given category.
* [x] The user should be able to type text inside of each retrospective item. This text will be stored in state. The only time the text can change is when the user is typing inside the retrospective item.
* [x] The user should be able to delete each retrospective item. When deleted, the retrospective item should be removed from state and the application.
* [x] The user should be able to move the retrospective item into a different category by clicking on a left or right arrow. If there is not a category to the left, then clicking the arrow should move the retrospective item to the rightmost category. The same applies to if there is no category to the right but in reverse. When the item moves from one category to the next, the retrospective item’s user input, visual structure, and appearance (with the exception of color) should stay the same.
* [x] Add a “thumbs up” and “thumbs down” button (or other clickable UI elements) to your retrospective items. Clicking on one of these buttons should increase the number of “thumbs up” or “thumbs down” votes. Display the number of “thumbs up” and “thumbs down” votes in each retrospective item.
* [x] Validate user input. Make text within the retrospective item required. When the retrospective item loses focus or is submitted (the type of event will depend on how you design the functionality of your application), the text should be validated in some way. Suggestions are to remove the retrospective item from the board or display an error message. I chose to remove the item if not text has been entered upon losing focus.

## Extra Additions I added because, why not?
* [x] Created a Theme Switcher for Light / Dark modes using styled-components and the ThemeProvider. Theme is stored in localStorage so the browser remembers the users theme choice. This is accomplished using a custom hook called "useDarkMode" and in the useEffect function, checks to see if there is a match for the users theme provided by the OS preferences. 

## Coding Requirements
---

* [x] This application should contain at least two React components.
* [x] One component should pass props into another component.
* [x] One (or more) of your React components should handle state. Apply useState() hooks and update state correctly with functions returned from useState().
* [x] The application should handle events correctly within React components.
* [x] Styling must be included, but you will not be graded on how visually appealing your application is or how well your CSS is written.


## Author

* **Dan Lubbers**   [danlubbers.com](https://danlubbers.com)
