import { Component, OnInit } from '@angular/core'
import { BurgerService } from '../services/burger.service';
import { Burger } from '../models/burger';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  burgers: Burger[] = []
  isLoadingResults: boolean = true

  constructor(
    private burgerService: BurgerService
  ) { }

  ngOnInit() {
    this.burgerService.getBurgers()
      .subscribe(res => {
        this.burgers = res
        this.isLoadingResults = false
      }, err => {
        console.log(err)
        this.isLoadingResults = false
      })
  }

  vote(id: number) {
    this.burgerService.vote(id)
      .subscribe(res => {

      }), err => {
        console.log(err)
      }
    this.burgers.sort(this.orderBurgersByVotes)
  }

  orderBurgersByVotes(a: Burger, b: Burger) {
    return b.votes - a.votes
  }
}
