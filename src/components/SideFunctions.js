let SideFunctions = {};

// Comparing similarity between two arrays which will then be used to change background colour
SideFunctions.howEqual = function (array1, array2) {
  let totalSame = 0;
  for (let i = 0; i < array1.length; i++) {
    let oneVal = array1[i];
    let twoVal = array2[i];
    if (oneVal === twoVal) {
      totalSame++;
    }
  }
  return totalSame;
};

// will be used to check if truthPosition is equal to toggle positions- used to update validation
SideFunctions.areEqual = function (array1, array2) {
  if (array1.length === array2.length) {
    return array1.every((element, index) => {
      if (element === array2[index]) {
        return true;
      }

      return false;
    });
  }
  return false;
};

// changing background and functionality of page
SideFunctions.pageChange = function (array1, array2) {
  let pageStyle;
  let howClose = SideFunctions.howEqual(array1, array2);
  let length = array1.length;

  let numberOfErrors = length - howClose;
  if (numberOfErrors === 0) {
    pageStyle = "correct";
  } else if (numberOfErrors === 1) {
    pageStyle = "nearly";
  } else if (numberOfErrors === 2) {
    pageStyle = "closer";
  } else {
    pageStyle = "very-wrong";
  }
  return pageStyle;
};

//Generates initial array for questions in 0,1 alternating sequence
SideFunctions.initialArray = function (array) {
  for (let i = 1; i < array.length; i++) {
    if (i % 2 === 0) {
      array[i] = 0;
    } else {
      array[i] = 1;
    }
  }
  return array;
};

export { SideFunctions };
