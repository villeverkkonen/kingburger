import { Component, OnInit } from '@angular/core'
import { BurgerService } from '../services/burger.service'
import { Burger } from '../models/burger'
import { PusherService } from '../services/pusher.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  burgers: Burger[] = []
  isLoadingResults: boolean = true

  constructor(
    private burgerService: BurgerService,
    private pusherService: PusherService
  ) { }

  ngOnInit() {
    this.burgerService.getBurgers()
      .subscribe(burgers => {
        this.burgers = burgers.sort(this.orderBurgersByVotes)
        this.isLoadingResults = false
      }, err => {
        console.log(err)
        this.isLoadingResults = false
      })

    this.pusherService.channel.bind('vote-event', data => {
      this.burgerService.getBurger(data.id)
        .subscribe((votedBurger: Burger) => {
          this.burgers.map(burger => {
            if (burger.id === votedBurger.id) {
              burger.votes = votedBurger.votes
            }
          })
          this.burgers = this.burgers.sort(this.orderBurgersByVotes)
        }, err => {
          console.log(err)
        })
    })
  }

  vote(burger: Burger) {
    this.burgerService.vote(burger)
      .subscribe((res: any) => {
        this.pusherService.vote(burger.id)
      }), err => {
        console.log(err)
      }
  }

  orderBurgersByVotes(a: Burger, b: Burger) {
    return b.votes - a.votes
  }
}
