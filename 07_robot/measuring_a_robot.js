let robot = require('./project/robot');

function runRobot(state, robot, memory) {
    for (let turn = 0; ; turn++) {
        if (state.parcels.length == 0) {
            return turn;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
    }
}

function compareRobots(ada, memoryAda, bob, memoryBob) {
    const iterations = 100;
    let sumAda= 0;
    let sumBob= 0;
    let state;
    for (let i = 0; i < iterations; i++) {
        state = robot.VillageState.random();
        sumAda += runRobot(state, ada, memoryAda);
        sumBob += runRobot(state, bob, memoryBob);
    }
    return "Ada... " + sumAda/iterations + " Bob... " + sumBob/iterations;
}
  
// console.log("Route vs Goal:", compareRobots(robot.routeRobot, [], robot.goalOrientedRobot, []));

module.exports = compareRobots;
