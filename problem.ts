// Define the RouteStrategy interface
interface RouteStrategy {
    buildRoute(origin: string, destination: string): string[];
}

// Concrete strategy: RoadStrategy
class RoadStrategy implements RouteStrategy {
    buildRoute(origin: string, destination: string): string[] {
        // Implement road-based routing logic here
        return [`Take the highway from ${origin} to ${destination}`];
    }
}

// Concrete strategy: PublicTransportStrategy
class PublicTransportStrategy implements RouteStrategy {
    buildRoute(origin: string, destination: string): string[] {
        // Implement public transport-based routing logic here
        return [`Take the bus from ${origin} to ${destination}`];
    }
}

// Concrete strategy: WalkingStrategy
class WalkingStrategy implements RouteStrategy {
    buildRoute(origin: string, destination: string): string[] {
        // Implement walking-based routing logic here
        return [`Walk from ${origin} to ${destination}`];
    }
}

// Context class that uses a RouteStrategy
class RouteNavigator {
    private routeStrategy: RouteStrategy;

    constructor(strategy: RouteStrategy) {
        this.routeStrategy = strategy;
    }

    setStrategy(strategy: RouteStrategy) {
        this.routeStrategy = strategy;
    }

    navigate(origin: string, destination: string): string[] {
        const route = this.routeStrategy.buildRoute(origin, destination);
        return route;
    }
}

// Example usage:
const roadNavigator = new RouteNavigator(new RoadStrategy());
console.log(roadNavigator.navigate('Start', 'End'));

const publicTransportNavigator = new RouteNavigator(new PublicTransportStrategy());
console.log(publicTransportNavigator.navigate('Home', 'Office'));

const walkingNavigator = new RouteNavigator(new WalkingStrategy());
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
  