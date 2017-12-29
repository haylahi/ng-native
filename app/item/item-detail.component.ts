import { Component, OnInit } from "@angular/core";
import {ActivatedRoute} from "@angular/router";

import { Item } from "./item";
import { ItemService } from "./item.service";
import {RouterExtensions} from "nativescript-angular";

@Component({
    selector: "ns-details",
    moduleId: __filename,
    templateUrl: "./item-detail.component.html",
})
export class ItemDetailComponent implements OnInit {
    item: Item;

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute,  private routerExtension: RouterExtensions
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params["id"];
        this.item = this.itemService.getItem(id);
    }

    goBack() {
        // this.location.back();
        this.routerExtension.back();
    }
}
