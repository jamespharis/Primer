export function calculateTotal (items, tax) {
  let total = 0
  tax = Math.abs(tax)
  for (let item of items) { // iterate through objects in the array
    total += item.price // add the price of the item
    if (item.taxable) { total += item.price*tax } //add the tax if taxable
  }
  return total // return a number representing the total cost of all the items including the tax on items that can be taxed
}