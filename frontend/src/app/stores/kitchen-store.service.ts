import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class KitchenStoreService {

  constructor() { }

  private readonly _runningId = new BehaviorSubject<number>(1)

  get runningId(): number {
    return this._runningId.getValue()
  }

  set runningId(id: number) {
    this._runningId.next(id)
  }

  incrementId() {
    this.runningId += 1
  }

  decrementId() {
    this.runningId -= 1
    if (this.runningId < 0) {
      this.runningId = 0
    }
  }
}
