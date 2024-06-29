import { consola } from 'consola'

export const WorkerHandleType = {
  parse: 'parse',
  resolve: 'resolve',
}

onmessage = function (e) {
  consola.start('Worker: Message received from main script')
  const { type, data } = e.data
  if (type === WorkerHandleType.parse) {
    consola.success('Worker: parse data:', data)
    postMessage(JSON.parse(data))
  }
  else if (type === WorkerHandleType.resolve) {
    consola.success('Worker: resolve data', data)
    postMessage(data)
  }
}
