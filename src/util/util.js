//Sort by alphabets
export const sortArray = (arr, sortBy, name) => {
  if (!sortBy) return arr;
  let sortedArr = arr.sort(function (a, b) {
    return a[name] > b[name] ? 1 : b[name] > a[name] ? -1 : 0;
  });
  return sortBy === "AZ" ? sortedArr : sortedArr.reverse();
};
