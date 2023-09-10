// Strategy interface
interface SortStrategy {
    sort(items: any[]): any[];
}

// Concrete strategy classes
class AscendingSort implements SortStrategy {
    sort(items: any[]): any[] {
        return items.slice().sort((a, b) => a - b);
    }
}

class DescendingSort implements SortStrategy {
    sort(items: any[]): any[] {
        return items.slice().sort((a, b) => b - a);
    }
}

// Context class
class SortContext {
    private strategy: SortStrategy;

    constructor(strategy: SortStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: SortStrategy) {
        this.strategy = strategy;
    }

    sortItems(items: any[]): any[] {
        return this.strategy.sort(items);
    }
}

// Usage
const items = [3, 1, 2, 4, 5];
const ascendingSort = new AscendingSort();
const descendingSort = new DescendingSort();

const context = new SortContext(ascendingSort);
console.log(context.sortItems(items)); // Ascending sort

context.setStrategy(descendingSort);
console.log(context.sortItems(items)); // Descending sort
