import {Page} from '@core/Page'
import {createStore} from '@core/createStore'
import {rootReducer} from '@/redux/rootReducer'
import {storage} from '@core/utils'
import {normalizeInitialState} from '@/redux/initialState'
import {debounce} from '@/core/utils'
import {Excel} from '@/components/excel/excel'
import {Header} from '@/components/header/header'
import {Toolbar} from '@/components/toolbar/toolbar'
import {Formula} from '@/components/formula/formula'
import {Table} from '@/components/table/table'

function storageName(param) {
  return 'excel:' + param
}

export class ExcelPage extends Page {
  getRoot() {
    const params = this.params ? this.params : Date.now().toString()
    const state = storage(storageName(params))
    const store = createStore(rootReducer, normalizeInitialState(state))

    const stateListener = debounce(state => {
      console.log('Main subscribe', state)
      storage(storageName(params), state)
    }, 300)

    store.subscribe(stateListener)

    this.excel = new Excel({
      components: [Header, Toolbar, Formula, Table],
      store
    })

    return this.excel.getRoot()
  }

  afterRender() {
    this.excel.init()
  }

  destroy() {
    this.excel.destroy()
  }
}
