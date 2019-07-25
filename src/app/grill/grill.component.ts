import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grill',
  templateUrl: './grill.component.html',
  styleUrls: ['./grill.component.scss']
})
export class GrillComponent implements OnInit {

  start: boolean = false
  stop: boolean = true

  constructor() { }

  ngOnInit() {
  }

  moveRight(imgObj: any) {
    if (this.start && !this.stop) {
      if (parseInt(imgObj.style.left) >= 288) {
        this.moveLeft(imgObj)
      } else {
        imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px'
        setTimeout(() => {
          this.moveRight(imgObj)
        }, 15)
      }
    }
  }

  moveLeft(imgObj: any) {
    if (this.start && !this.stop) {
      if (parseInt(imgObj.style.left) <= 0) {
        this.moveRight(imgObj)
      } else {
        setTimeout(() => {
          imgObj.style.left = parseInt(imgObj.style.left) - 10 + 'px'
          this.moveLeft(imgObj)
        }, 15)
      }
    }
  }

  startGrill() {
    const imgObj = document.getElementById('heat-bar-logo')
    const pointerDiv = document.getElementById('pointer')
    const pointerPosition = Math.floor(Math.random() * (+288 - +32)) + +32
    pointerDiv.style.display = 'inline-block'
    pointerDiv.style.left = `${pointerPosition}px`
    imgObj.style.left = '0px'
    this.start = true
    this.stop = false
    this.moveRight(imgObj)
  }

  stopGrill() {
    this.start = false
    this.stop = true
  }

}
