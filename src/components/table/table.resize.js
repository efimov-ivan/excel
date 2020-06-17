import {$} from '@core/dom'

export function resizeHandler($root, event) {
  return new Promise(resolve => {
    const $resizer = $(event.target)
    const $parent = $resizer.closest('[data-type="resizable"]')
    const coords = $parent.getCoords()
    const type = $resizer.data.resize
    let value

    document.onmousemove = e => {
      if (type === 'col') {
        const delta = Math.floor(e.pageX - coords.right)
        value = coords.width + delta
        $resizer.css({right: -delta + 'px', bottom: '-5000px', opacity: 1})
      } else {
        const delta = e.pageY - coords.bottom
        value = coords.height + delta
        $resizer.css({opacity: 1, right: '-5000px', bottom: -delta + 'px'})
      }
    }

    document.onmouseup = () => {
      document.onmouseup = null
      document.onmousemove = null

      if (type === 'col') {
        $root.findAll(`[data-col="${$parent.data.col}"]`)
            .forEach(e => e.style.width = value + 'px')
      } else {
        $parent.css({height: value + 'px'})
      }

      resolve({
        value,
        type,
        id: $parent.data[type]
      })

      $resizer.css({
        opacity: 0,
        bottom: 0,
        right: 0
      })
    }
  })
}
