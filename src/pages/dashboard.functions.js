import {splitExcelKey, storage} from '@core/utils'

function toHtml(key, i) {
  const model = storage(key)
  const urlKey = splitExcelKey(key)

  return `
    <li class="db__record">
      <a href="#excel/${urlKey}">${model.tableTitle}</a>
      <strong>
        ${new Date(model.openedDate).toLocaleDateString()}:
        ${new Date(model.openedDate).toLocaleTimeString()}
      </strong>
    </li>
  `
}

function getAllKeys() {
  const keys = []
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (key.includes('excel')) {
      keys.push(key)
    }
  }
  return keys
}

export function createRecordsTable() {
  const keys = getAllKeys()
  if (!keys.length) {
    return 'You dont have excel tables'
  }

  return `
    <div class="db__list-header">
      <span>Name</span>
      <span>Open Date</span>
    </div>
    <ul class="db__list">
      ${keys.map(toHtml).join('')}
    </ul>
  `
}
