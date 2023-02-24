let robot = require('./project/robot');
let compareRobots = require('./measuring_a_robot')

function optimizedGoalOrientedRobot({ place, parcels }, route) {
    if (route.length == 0) {
        let routes = parcels.map((parcel) => {
            if (parcel.place != place) {
                return robot.findRoute(robot.roadGraph, place, parcel.place);
            } else {
                return robot.findRoute(robot.roadGraph, place, parcel.address);
            }
        });
        route = routes[0];
        for (let r of routes) {
            if (r.length > route.length) {
                route = r;
            }
        }
    }
    return { direction: route[0], memory: route.slice(1) };
}

console.log("Optimized Goal vs Simple Goal:", compareRobots(optimizedGoalOrientedRobot, [], robot.goalOrientedRobot, []));