import {Component, OnInit} from "@angular/core";

import {Item} from "./item";
import {ItemService} from "./item.service";
import {SearchBar} from "tns-core-modules/ui/search-bar";

@Component({
    selector: "ns-items",
    moduleId: __filename,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];
    searchedValue: String;

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }
    onSearch(args) {
        let searchBar = <SearchBar>args.object;
        this.searchedValue = searchBar.text.toUpperCase();
        console.log("Searching for value "+ this.searchedValue);
        this.items = [];
        let tItems = this.itemService.getItems();
        const nameFilterItems = tItems.filter((item: Item) => {
            if (item.name.toUpperCase().indexOf(this.searchedValue.toString()) > -1) {
                return true;
            } else if (item.role.toUpperCase().indexOf(this.searchedValue.toString()) > -1) {
                return true;
            } else {
                return false;
            }
        });
        this.items = this.items.concat(nameFilterItems);
        console.dir(this.items);
    }
}