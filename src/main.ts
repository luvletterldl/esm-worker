import type { WorkerReceiveData } from './worker'
import { WorkerHandleType } from "./worker"

const workerUrl = new URL('./worker.js', import.meta.url)
const worker = new Worker(workerUrl, { type: 'module' })

export async function parseToJson() {
  return new Promise((resolve) => {
    const data: WorkerReceiveData = { type: WorkerHandleType.Parse, data: '{"a":1,"b":"c"}' }
    worker.postMessage(data)
    worker.onmessage = (e) => {
      console.log(e.data)
      resolve(e.data)
    }
  })
}

export async function resolveData() {
  return new Promise((resolve) => {
    const data: WorkerReceiveData = { type: WorkerHandleType.Resolve, data: true }
    worker.postMessage(data)
    worker.onmessage = (e) => {
      console.log(e.data)
      resolve(e.data)
    }
  })
}
