// Concrete strategy: RoadStrategy
var RoadStrategy = /** @class */ (function () {
    function RoadStrategy() {
    }
    RoadStrategy.prototype.buildRoute = function (origin, destination) {
        // Implement road-based routing logic here
        return ["Take the highway from ".concat(origin, " to ").concat(destination)];
    };
    return RoadStrategy;
}());
// Concrete strategy: PublicTransportStrategy
var PublicTransportStrategy = /** @class */ (function () {
    function PublicTransportStrategy() {
    }
    PublicTransportStrategy.prototype.buildRoute = function (origin, destination) {
        // Implement public transport-based routing logic here
        return ["Take the bus from ".concat(origin, " to ").concat(destination)];
    };
    return PublicTransportStrategy;
}());
// Concrete strategy: WalkingStrategy
var WalkingStrategy = /** @class */ (function () {
    function WalkingStrategy() {
    }
    WalkingStrategy.prototype.buildRoute = function (origin, destination) {
        // Implement walking-based routing logic here
        return ["Walk from ".concat(origin, " to ").concat(destination)];
    };
    return WalkingStrategy;
}());
// Context class that uses a RouteStrategy
var RouteNavigator = /** @class */ (function () {
    function RouteNavigator(strategy) {
        this.routeStrategy = strategy;
    }
    RouteNavigator.prototype.setStrategy = function (strategy) {
        this.routeStrategy = strategy;
    };
    RouteNavigator.prototype.navigate = function (origin, destination) {
        var route = this.routeStrategy.buildRoute(origin, destination);
        return route;
    };
    return RouteNavigator;
}());
// Example usage:
var roadNavigator = new RouteNavigator(new RoadStrategy());
console.log(roadNavigator.navigate('Start', 'End'));
var publicTransportNavigator = new RouteNavigator(new PublicTransportStrategy());
console.log(publicTransportNavigator.navigate('Home', 'Office'));
var walkingNavigator = new RouteNavigator(new WalkingStrategy());
console.log(walkingNavigator.navigate('Park', 'Museum'));
// Define the RoutingService class
// class RoutingService {
//     navigate(origin: string, destination: string, strategy: string): string[] {
//       let route: string[] = [];
//       if (strategy === 'road') {
//         route.push(`Take the highway from ${origin} to ${destination}`);
//       } else if (strategy === 'publicTransport') {
//         route.push(`Take the bus from ${origin} to ${destination}`);
//       } else if (strategy === 'walking') {
//         route.push(`Walk from ${origin} to ${destination}`);
//       } else {
//         route.push(`Invalid strategy: ${strategy}`);
//       }
//       return route;
//     }
//   }
//   const routingService = new RoutingService();
//   console.log(routingService.navigate('Start', 'End', 'road'));
//   console.log(routingService.navigate('Home', 'Office', 'publicTransport'));
//   console.log(routingService.navigate('Park', 'Museum', 'walking'));
//   console.log(routingService.navigate('Location', 'Destination', 'invalidStrategy'));
