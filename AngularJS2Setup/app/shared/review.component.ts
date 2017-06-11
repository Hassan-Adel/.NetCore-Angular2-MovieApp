import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "md-movies",
    templateUrl: "review.component.html",
    styleUrls: ["review.component.css"],
})

export class ReviewComponent implements OnChanges {
    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<string> =
    new EventEmitter<string>();
    reviewWidth: number; //calculated onChange

    ngOnChanges(): void{
        this.reviewWidth = this.rating * 86 / 5; //86 width of star
    }
    onClick() {
        this.ratingClicked.emit(`This movie got a rating of ${this.rating}`);
    }
}