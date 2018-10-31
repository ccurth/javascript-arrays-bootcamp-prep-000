var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array,element) {
  return (element,...array);
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  unshift.Array(element);
  return (array)
}