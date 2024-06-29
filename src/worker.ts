import { consola } from 'consola'

export interface WorkerReceiveData { 
  data: unknown
  type: WorkerHandleType
}

export enum WorkerHandleType {
  Parse = 'parse',
  Resolve = 'resolve',
}

onmessage = function (e: { data: WorkerReceiveData }) {
  consola.start('Worker: Message received from main script, Worker code use TypeScript, cool 👍, right ?')
  const { type, data } = e.data
  if (type === WorkerHandleType.Parse) {
    consola.success('Worker: parse data:', data)
    postMessage(JSON.parse(data as string))
  }
  else if (type === WorkerHandleType.Resolve) {
    consola.success('Worker: resolve data', data)
    postMessage(data)
  }
}
