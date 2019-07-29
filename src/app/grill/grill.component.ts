import { Component, OnInit } from '@angular/core';
import { UserStoreService } from '../user-store.service';

@Component({
  selector: 'app-grill',
  templateUrl: './grill.component.html',
  styleUrls: ['./grill.component.scss']
})
export class GrillComponent implements OnInit {

  start: boolean = false
  stop: boolean = true
  pointerPosition: number
  imgPosition: number
  winningPrice: number

  constructor(
    public userStore: UserStoreService
  ) { }

  ngOnInit() {
  }

  moveRight(imgObj: any) {
    if (this.start && !this.stop) {
      if (this.imgPosition >= 300) {
        this.moveLeft(imgObj)
      } else {
        this.imgPosition = parseInt(imgObj.style.left) + 10
        imgObj.style.left = this.imgPosition + 'px'
        setTimeout(() => {
          this.moveRight(imgObj)
        }, 15)
      }
    }
  }

  moveLeft(imgObj: any) {
    if (this.start && !this.stop) {
      if (this.imgPosition <= 10) {
        this.moveRight(imgObj)
      } else {
        this.imgPosition = parseInt(imgObj.style.left) - 10
        imgObj.style.left = this.imgPosition + 'px'
        setTimeout(() => {
          this.moveLeft(imgObj)
        }, 15)
      }
    }
  }

  startGrill() {
    const imgObj = document.getElementById('heat-bar-logo')
    const pointerDiv = document.getElementById('pointer')
    this.pointerPosition = Math.floor(Math.random() * (+300 - +10)) + +10
    this.winningPrice = 0
    pointerDiv.style.display = 'block'
    pointerDiv.style.left = `${this.pointerPosition}px`
    imgObj.style.left = '10px'
    this.start = true
    this.stop = false
    this.moveRight(imgObj)
  }

  stopGrill() {
    this.start = false
    this.stop = true
    this.checkWinningPrices()
  }
  
  checkWinningPrices() {
    if (this.pointerPosition > this.imgPosition) {
      if (this.pointerPosition - this.imgPosition <= 5) {
        this.winningPrice = 5
      } else if (this.pointerPosition - this.imgPosition <= 10) {
        this.winningPrice = 3
      } else if (this.pointerPosition - this.imgPosition <= 20) {
        this.winningPrice = 2
      }
    } else {
      if (this.imgPosition - this.pointerPosition <= 5) {
        this.winningPrice = 5
      } else if (this.imgPosition - this.pointerPosition <= 10) {
        this.winningPrice = 3
      } else if (this.imgPosition - this.pointerPosition <= 20) {
        this.winningPrice = 2
      }
    }
    if (this.winningPrice > 0) {
      this.payWinningPrice(this.winningPrice)
    }
  }

  payWinningPrice(amount: number) {
    this.userStore.addMoney(amount)
  }
}
