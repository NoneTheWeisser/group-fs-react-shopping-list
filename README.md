# React Shopping List

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).


## TODO

### Render Shopping List
[x] Render List
[ ] Add buttons - PLACE HOLDERS are in place
    [x] Remove 
    [x] Buy
        [x] Purchased - Once buy is clicked swap to purchased using 
            buyListItem(or something like that) and conditional rendering

### Create Form
[x] addShoppingItem
[x] handleSubmit

### Refactor
[x] ShoppingList
    [x] ShoppingItem
[x] ShoppingForm

### Requirements
[x] Each item can have a:
    [x] - Name - text, allow up to 80 characters (required)
    [x] Quantity - allow for decimal numbers (required)
[x] When the page first loads, all the existing items should be displayed with the quantity & unit combined together for display. 
    [ ] Each item should also have an option to remove it from the list or mark it as purchased. 
        Once purchased, the buttons should be hidden and the item should show as "Purchased".    
[x] Items should initially appear alphabetically, but as items are marked purchased they should sort to the end of the list.
[x] The `Reset` button should clear the purchased status from all items, allowing the list to be re-used. 
[ ] The `Clear` button should remove all items from the list, deleting them from the database.
