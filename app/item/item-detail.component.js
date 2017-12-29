"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var item_service_1 = require("./item.service");
var nativescript_angular_1 = require("nativescript-angular");
var ItemDetailComponent = (function () {
    function ItemDetailComponent(itemService, route, routerExtension) {
        this.itemService = itemService;
        this.route = route;
        this.routerExtension = routerExtension;
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.params["id"];
        this.item = this.itemService.getItem(id);
    };
    ItemDetailComponent.prototype.goBack = function () {
        // this.location.back();
        this.routerExtension.back();
    };
    ItemDetailComponent = __decorate([
        core_1.Component({
            selector: "ns-details",
            moduleId: __filename,
            templateUrl: "./item-detail.component.html",
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService,
            router_1.ActivatedRoute, nativescript_angular_1.RouterExtensions])
    ], ItemDetailComponent);
    return ItemDetailComponent;
}());
exports.ItemDetailComponent = ItemDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUErQztBQUcvQywrQ0FBNkM7QUFDN0MsNkRBQXNEO0FBT3REO0lBR0ksNkJBQ1ksV0FBd0IsRUFDeEIsS0FBcUIsRUFBVyxlQUFpQztRQURqRSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFXLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtJQUN6RSxDQUFDO0lBRUwsc0NBQVEsR0FBUjtRQUNJLElBQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELG9DQUFNLEdBQU47UUFDSSx3QkFBd0I7UUFDeEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBaEJRLG1CQUFtQjtRQUwvQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLDhCQUE4QjtTQUM5QyxDQUFDO3lDQUsyQiwwQkFBVztZQUNqQix1QkFBYyxFQUE0Qix1Q0FBZ0I7T0FMcEUsbUJBQW1CLENBaUIvQjtJQUFELDBCQUFDO0NBQUEsQUFqQkQsSUFpQkM7QUFqQlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtLnNlcnZpY2VcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWRldGFpbHNcIixcbiAgICBtb2R1bGVJZDogX19maWxlbmFtZSxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW0tZGV0YWlsLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1EZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGl0ZW06IEl0ZW07XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb246IFJvdXRlckV4dGVuc2lvbnNcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGlkID0gK3RoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1wiaWRcIl07XG4gICAgICAgIHRoaXMuaXRlbSA9IHRoaXMuaXRlbVNlcnZpY2UuZ2V0SXRlbShpZCk7XG4gICAgfVxuXG4gICAgZ29CYWNrKCkge1xuICAgICAgICAvLyB0aGlzLmxvY2F0aW9uLmJhY2soKTtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb24uYmFjaygpO1xuICAgIH1cbn1cbiJdfQ==