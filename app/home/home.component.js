"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var HomeComponent = (function () {
    function HomeComponent(router) {
        this.router = router;
        this.tapCountMsg = null;
        this.tapCount = 0;
    }
    HomeComponent.prototype.onTap = function () {
        this.tapCount++;
        this.tapCountMsg = 'You tapped ' + this.tapCount + ' times!!';
        this.router.navigate(['items']);
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: __filename,
            templateUrl: "./home.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLHNDQUF3QztBQUN4QywwQ0FBdUM7QUFNdkM7SUFLSSx1QkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFKbEMsZ0JBQVcsR0FBVyxJQUFJLENBQUM7UUFDM0IsYUFBUSxHQUFXLENBQUMsQ0FBQztJQUtyQixDQUFDO0lBRUQsNkJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsV0FBVyxHQUFHLGFBQWEsR0FBRSxJQUFJLENBQUMsUUFBUSxHQUFFLFVBQVUsQ0FBQztRQUM1RCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQWJRLGFBQWE7UUFKekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQzt5Q0FNOEIsZUFBTTtPQUx6QixhQUFhLENBaUJ6QjtJQUFELG9CQUFDO0NBQUEsQUFqQkQsSUFpQkM7QUFqQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBfX2ZpbGVuYW1lLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xuICAgIHRhcENvdW50TXNnOiBzdHJpbmcgPSBudWxsO1xuICAgIHRhcENvdW50OiBudW1iZXIgPSAwO1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG5cbiAgICB9XG5cbiAgICBvblRhcCgpIHtcbiAgICAgICAgdGhpcy50YXBDb3VudCsrO1xuICAgICAgICB0aGlzLnRhcENvdW50TXNnID0gJ1lvdSB0YXBwZWQgJysgdGhpcy50YXBDb3VudCsgJyB0aW1lcyEhJztcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydpdGVtcyddKTtcbiAgICB9XG5cblxuXG59Il19