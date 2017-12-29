


import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    moduleId: __filename,
    templateUrl: "./home.component.html"
})
export class HomeComponent {
    tapCountMsg: string = null;
    tapCount: number = 0;


    constructor(private router: Router) {

    }

    onTap() {
        this.tapCount++;
        this.tapCountMsg = 'You tapped '+ this.tapCount+ ' times!!';
        this.router.navigate(['items']);
    }



}