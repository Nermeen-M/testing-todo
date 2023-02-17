export function sortByName(list, ascending) {
  const sortedList = list.sort((a, b) => {
    if (ascending) {
      return a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1;
    } else {
      return a.name.toUpperCase() > b.name.toUpperCase() ? -1 : 1;
    }
  });
  return sortedList;
}

export function sortByPrice(list, ascending) {
  const sortedList = list.sort((a, b) => {
    if (ascending) {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });
  return sortedList;
}

// export function sortListItems(list, sortBy, ascending) {
//   if (sortBy === "name") {
//     return list.sort((a, b) => {
//       if (ascending) {
//         return a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1;
//       } else {
//         return a.name.toUpperCase() > b.name.toUpperCase() ? -1 : 1;
//       }
//     });
//   } else if (sortBy === "price") {
//     return list.sort((a, b) => {
//       if (ascending) {
//         return a.price - b.price;
//       } else {
//         return b.price - a.price;
//       }
//     });
//   }
// }
