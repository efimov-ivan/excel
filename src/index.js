import './scss/index.scss'

async function start() {
  return await Promise.resolve('async working11')
}

start().then(console.log)
