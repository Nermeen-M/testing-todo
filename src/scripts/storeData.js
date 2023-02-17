export function loadData(storageKey) {
  const stringData = localStorage.getItem(storageKey);
  const arrayData = JSON.parse(stringData) || [];

  return arrayData;
}

export function saveData(storageKey, items) {
  const data = JSON.stringify(items);

  localStorage.setItem(storageKey, data);
}
