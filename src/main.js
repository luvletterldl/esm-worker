import { WorkerHandleType } from "./worker"

const workerUrl = new URL('./worker.js', import.meta.url)
console.log('workerUrl', workerUrl)
const worker = new Worker(workerUrl, { type: 'module' })

export async function parseToJson() {
  return new Promise((resolve) => {
    worker.postMessage({ type: WorkerHandleType.parse, data: '{"a":1,"b":"c"}' })
    worker.onmessage = (e) => {
      console.log(e.data)
      resolve(e.data)
    }
  })
}

export async function resolveData() {
  return new Promise((resolve) => {
    worker.postMessage({ type: WorkerHandleType.resolve, data: true })
    worker.onmessage = (e) => {
      console.log(e.data)
      resolve(e.data)
    }
  })
}
