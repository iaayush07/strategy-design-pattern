// Concrete strategy classes
var AscendingSort = /** @class */ (function () {
    function AscendingSort() {
    }
    AscendingSort.prototype.sort = function (items) {
        return items.slice().sort(function (a, b) { return a - b; });
    };
    return AscendingSort;
}());
var DescendingSort = /** @class */ (function () {
    function DescendingSort() {
    }
    DescendingSort.prototype.sort = function (items) {
        return items.slice().sort(function (a, b) { return b - a; });
    };
    return DescendingSort;
}());
// Context class
var SortContext = /** @class */ (function () {
    function SortContext(strategy) {
        this.strategy = strategy;
    }
    SortContext.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    SortContext.prototype.sortItems = function (items) {
        return this.strategy.sort(items);
    };
    return SortContext;
}());
// Usage
var items = [3, 1, 2, 4, 5];
var ascendingSort = new AscendingSort();
var descendingSort = new DescendingSort();
var context = new SortContext(ascendingSort);
console.log(context.sortItems(items)); // Ascending sort
context.setStrategy(descendingSort);
console.log(context.sortItems(items)); // Descending sort
