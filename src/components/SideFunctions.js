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
  return totalSame / array1.length;
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
  let howClose = SideFunctions.howEqual(array1, array2);
  if (howClose < 1 && howClose > 0) {
    document.body.classList.add("closeness");
  } else if (howClose == 0) {
    document.body.classList.remove("closeness");
  } else if (howClose == 1) {
    document.body.classList.remove("closeness");
    document.body.classList.add("whole-page");
  }
};

export { SideFunctions };
