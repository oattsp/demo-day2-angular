import {Component} from '@angular/core';
import {Status} from "./enum/status";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  totalLike = 100;
  totalDislike = 25;
  userLikeStatus = Status.Normal;

  userClickedButton(event: Status) {
    if (event === Status.Like) {
      if (this.userLikeStatus === Status.Normal) {
        this.userLikeStatus = Status.Like;
        this.totalLike++;
        return
      }
      if (this.userLikeStatus === Status.Like) {
        this.userLikeStatus = Status.Normal;
        this.totalLike--;
        return;
      }

      if (this.userLikeStatus === Status.Dislike) {
        this.userLikeStatus = Status.Like;
        this.totalDislike--;
        this.totalLike++;
        return;
      }
    }
    if (event === Status.Dislike) {
      if (this.userLikeStatus === Status.Normal) {
        this.userLikeStatus = Status.Dislike;
        this.totalDislike++;
        return;
      }
      if (this.userLikeStatus === Status.Dislike) {
        this.userLikeStatus = Status.Normal;
        this.totalDislike--;
        return;
      }
      if (this.userLikeStatus === Status.Like) {
        this.userLikeStatus = Status.Dislike;
        this.totalDislike++;
        this.totalLike--;
        return;
      }
    }
  }

  userLike() {
    this.userClickedButton(Status.Like);
  }

  userUnlike() {
    this.userClickedButton(Status.Dislike);
  }
}
