# User Story 
As a user, when I visit the page I should be able to send messages into the chat as any user I choose. I should see those messages displayed below with a timestamp and username attached. 

# AC
**WHEN** I first visit the page I should see a navbar with an input field in which to send messages
**AND** I should see a list of clickable user radio buttons to choose which user to send a message as
**AND** I should see options for a dark mode as well as a large text mode and a button to clear messages
**THEN** I should see box containing messages that are sent and have been received
**AND** I Should be able to send messages and see them appear within the above mentioned box using only the 'return' key.

# Dev Notes
* use bootstrap navbar 
```js
<nav class="navbar">
        <a class="navbar-brand" href="#">
          <i class="fa-lg fas fa-shield-alt"></i>
          GOT
        </a>
</nav>
```
* use moment.js for timestamp
`moment().format('LLL')`
* use a universal print to dom function 
```js
const printToDom = (selector, text) => {
  $(selector).html(text);
}
```
* use bootstrap cards
```js
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="username"></h5>
    <h6 class="timestamp-text mb-2 text-muted"></h6>
    <p class="card-text"></p>
    <button class="btn btn-danger"></button>
  </div>
</div>
```
* use `classList.add('selector')` to add / remove dark classes
* break tickets into individual components / data files
* use .scss for styling
