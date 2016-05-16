# Tic Tac Toe Instructions

* Review the calculator we built today. Walk through it line by line in the debugger and draw out the state of the program on a whiteboard or paper to really understand how it works.
* Brainstorm a plan for how a Tic Tac Toe game could be built
  * think about how you have break up the task of building the game into smaller subgoals
  * Write out the plan
* layout a grid for the upcoming Tic Tac Toe game we are going to build, with a button in each grid. It should look like:

```
   ┏━━┳━━┳━━┓
   ┣━━╋━━╋━━┫
   ┣━━╋━━╋━━┫
   ┗━━┻━━┻━━┛
```

## First Iteration

Make it so that when you click on a square (a button), the text of the button changes to "o".

## Second Iteration

Make it so that when you click on a square, the first time, it changes to "o", the second time it changes to "x", and the third time it changes back to blank - "".

## Third Iteration

Make it so that clicking on a filled square (non-blank) will have no effect. Example, you click on a square to turn it to "o". Clicking on it again will cause no change. You will no longer be able to produce "x" squares, at least temporarily.

## Four Iteration

Now alternate between "o"'s and "x"'s. Example,

1. you click the first open square, it turns to "o"
2. you click on the second open square, it turns to "x"
3. you click on the first open square again, it doesn't change

## Extra Credit

* Make it so they player is playing against a computer AI - the AI doesn't have to be smart
* Put easter eggs or April fools jokes in there. Maybe just as you thought you were going to win, when you click on the winning square the opponent's piece is put in it instead

## Detailed Recipes

### First Iteration Steps

1. Wait for document to be ready
  2. Register click event handler function for each button (use a selector to find the buttons)
    3. Call $(this) to gain access to jQuery methods on the clicked button (this refers to the native button).
    4. Set the text of that button to "o" using the .text("o") method

### Second Iteration Steps

1. Wait for document to be ready
  2. Register click event handler function for each button
    3. Call $(this) to gain access to jQuery methods on the clicked button (this refers to the native button).
    4. get the text of the button using the .text() method
    5. if the text is blank (""), set the text to "o"; if the text is "o", set the text to "x", if the text is "x", set the text to blank.

### Third Iteration Steps

1. Wait for document to be ready
  2. Register click event handler function for each button
    3. Call $(this) to gain access to jQuery methods on the clicked button (this refers to the native button).
    4. get the text of the button using the .text() method
    5. if the text is blank (""), set the text to "o"; if the text is not blank, don't do anything

### Fourth Iteration Steps

1. Initialize a `turn` variable and set it to true, it can be true or false. true represents o's turn and false represents x's turn
2. Wait for document to be ready
  3. Register click event handler function for each button
    4. Call $(this) to gain access to jQuery methods on the clicked button (this refers to the native button).
    5. get the text of the button using the .text() method
    6. if the text is blank (""), and it's o's turn, set the button's text to "o"; if the text is blank and it's x's turn, set the button's text to "x"; if the text is not blank, don't do anything
# TicTacToe
