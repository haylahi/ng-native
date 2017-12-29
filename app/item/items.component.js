"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("./item.service");
var ItemsComponent = (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function ItemsComponent(itemService) {
        this.itemService = itemService;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        console.log('items component initialized');
        this.items = this.itemService.getItems();
    };
    ItemsComponent.prototype.onSearch = function (args) {
        var _this = this;
        var searchBar = args.object;
        this.searchedValue = searchBar.text.toUpperCase();
        console.log("Searching for value " + this.searchedValue);
        this.items = [];
        var tItems = this.itemService.getItems();
        var nameFilterItems = tItems.filter(function (item) {
            if (item.name.toUpperCase().indexOf(_this.searchedValue.toString()) > -1) {
                return true;
            }
            else if (item.role.toUpperCase().indexOf(_this.searchedValue.toString()) > -1) {
                return true;
            }
            else {
                return false;
            }
        });
        this.items = this.items.concat(nameFilterItems);
        console.dir(this.items);
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: __filename,
            templateUrl: "./items.component.html",
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWdEO0FBR2hELCtDQUEyQztBQVEzQztJQUlJLDZJQUE2STtJQUM3SSxpSEFBaUg7SUFDakgsd0JBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUksQ0FBQztJQUVqRCxpQ0FBUSxHQUFSO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBQ0QsaUNBQVEsR0FBUixVQUFTLElBQUk7UUFBYixpQkFpQkM7UUFoQkcsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QyxJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsR0FBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QyxJQUFNLGVBQWUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBVTtZQUM3QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0RSxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0UsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNoQixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNqQixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUE3QlEsY0FBYztRQUwxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDO3lDQU9tQywwQkFBVztPQU5uQyxjQUFjLENBOEIxQjtJQUFELHFCQUFDO0NBQUEsQUE5QkQsSUE4QkM7QUE5Qlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQge0l0ZW19IGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCB7SXRlbVNlcnZpY2V9IGZyb20gXCIuL2l0ZW0uc2VydmljZVwiO1xuaW1wb3J0IHtTZWFyY2hCYXJ9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3NlYXJjaC1iYXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbiAgICBtb2R1bGVJZDogX19maWxlbmFtZSxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW1zLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpdGVtczogSXRlbVtdO1xuICAgIHNlYXJjaGVkVmFsdWU6IFN0cmluZztcblxuICAgIC8vIFRoaXMgcGF0dGVybiBtYWtlcyB1c2Ugb2YgQW5ndWxhcuKAmXMgZGVwZW5kZW5jeSBpbmplY3Rpb24gaW1wbGVtZW50YXRpb24gdG8gaW5qZWN0IGFuIGluc3RhbmNlIG9mIHRoZSBJdGVtU2VydmljZSBzZXJ2aWNlIGludG8gdGhpcyBjbGFzcy4gXG4gICAgLy8gQW5ndWxhciBrbm93cyBhYm91dCB0aGlzIHNlcnZpY2UgYmVjYXVzZSBpdCBpcyBpbmNsdWRlZCBpbiB5b3VyIGFwcOKAmXMgbWFpbiBOZ01vZHVsZSwgZGVmaW5lZCBpbiBhcHAubW9kdWxlLnRzLlxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaXRlbVNlcnZpY2U6IEl0ZW1TZXJ2aWNlKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZygnaXRlbXMgY29tcG9uZW50IGluaXRpYWxpemVkJyk7XG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW1zKCk7XG4gICAgfVxuICAgIG9uU2VhcmNoKGFyZ3MpIHtcbiAgICAgICAgbGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XG4gICAgICAgIHRoaXMuc2VhcmNoZWRWYWx1ZSA9IHNlYXJjaEJhci50ZXh0LnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VhcmNoaW5nIGZvciB2YWx1ZSBcIisgdGhpcy5zZWFyY2hlZFZhbHVlKTtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgICAgICBsZXQgdEl0ZW1zID0gdGhpcy5pdGVtU2VydmljZS5nZXRJdGVtcygpO1xuICAgICAgICBjb25zdCBuYW1lRmlsdGVySXRlbXMgPSB0SXRlbXMuZmlsdGVyKChpdGVtOiBJdGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5uYW1lLnRvVXBwZXJDYXNlKCkuaW5kZXhPZih0aGlzLnNlYXJjaGVkVmFsdWUudG9TdHJpbmcoKSkgPiAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLnJvbGUudG9VcHBlckNhc2UoKS5pbmRleE9mKHRoaXMuc2VhcmNoZWRWYWx1ZS50b1N0cmluZygpKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1zLmNvbmNhdChuYW1lRmlsdGVySXRlbXMpO1xuICAgICAgICBjb25zb2xlLmRpcih0aGlzLml0ZW1zKTtcbiAgICB9XG59Il19