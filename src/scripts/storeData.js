export function getData(storageKey) {
  const stringData = localStorage.getItem(storageKey);
  const arrayData = JSON.parse(stringData) || [];

  return arrayData;
}

export function setData(storageKey, items) {
  const data = JSON.stringify(items);

  localStorage.setItem(storageKey, data);
}
