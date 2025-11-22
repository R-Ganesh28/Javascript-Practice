//Create the text'My name is: ' as a string.
'My name is:'

//Create your name as a string.
"Ganesh"

//Using concatenation, add the 2 strings from above.
'My name is' + 'Ganesh'

//At restaurant, you order 1 coffee ($5) and 1 bagel ($3). Using math, calculate the total cost, and using concatenation, create the text: 'Total cost:$  '.
'Total cost: $' + (5 + 3)

//Do, the same ting as above using template string and interpolation.
`Total cost: $${5 + 3}`

//Display the text from above in a popup using alert(...);
alert(`Total cost: $${5 + 3}`);

//You order 1 coffe ($5.99) and 1 bagel ($2.95). Using math, calculate the total cost and using concatenation. Create the text 'Total cost:$  '
'Total cost: $' + ((599 + 295) / 100)

//Do the same thing above. but use a template string and interpolation.
`Total cost: $${(599 + 295) / 100}`

//Display the text in popup.
alert(`Total cost: $${(599 + 295) / 100}`);

//Using a multi-line string, create the text from above and add a line of text underneath: 'Thank you, come again!'. Display both lines in a popup.
alert(`Total cost: $${(599 + 295) / 100}
Thank you! come again!`);