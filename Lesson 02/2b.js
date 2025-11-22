//In the Amazon, 2 basketballs ($20.95 each) with $4.99 shipping, and 2 shirts ($7.99 each) with $4.99 shipping.

//using interpolation, create the first line of text (use math to calculate the numbers)
`Items (${2 + 2}): $${((2 * 2095) + (2 * 799)) / 100}`

//Create second line of text: 'Shipping & handling: $9.98'.
`Shipping & handling: $${(499 + 499) / 100}`

//create third line: 'Total before tax: $67.86'.
'Total before tax: $' + (((2 * 2095) + 499 + (2 * 799) + 499) / 100)

//create fourth line: 'Estimated tax (10%): $6.79'.
'Estimated tax (' + 10 + '%): $' + (Math.round(((2 * 2095) + 499 + (2 * 799) + 499) * 0.1) / 100)

