var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array,element) {
  return (element,...array);
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  unshift.Array(element);
  return (array);
}

function addElementToEndOfArray(array,element) {
  return (...array,element);
}

function destructivelyAddElementToEndOfArray(array,element) {
  push.Array(element);
  return (array);
}

