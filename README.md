# Clawbot Simulator

## Setup

1. Install [Nodejs](https://nodejs.org/en/)
2. Install [PROS](http://pros.cs.purdue.edu/)
3. [Download](https://github.com/ErnWong/sim-clawbot/archive/master.zip) this sim-clawbot repo.
4. [Download](https://github.com/ErnWong/floods-of-joy/archive/master.zip) the [floods-of-joy](https://github.com/ErnWong/floods-of-joy) repo
5. In your favourite command line, `cd` into the floods-of-joy repo directory.
6. Connect the Vex Cortex to the computer.
7. Type `pros mu` to compile and upload the robot's program onto the cortex.

## Usage

1. In your favourite command line, `cd` into the sim-clawbot repo directory.
2. Connect the Vex Cortex to the Joystick, and connect the Joystick to the computer.
3. To test and make sure the robot's program works, type `pros terminal` and fiddle around with the joystick. The terminal's readings should respond to your actions. Now close this `pros terminal` by pressing Control-C.
4. Next, we're going to pipe this output (you just saw) into a new server. But, first, see which one works: `node server.js` or `nodejs server.js`. Then, close the server by pressing Control-C. Now type `pros terminal | node server.js` or `pros terminal | nodejs server.js` (whichever one works).
5. Open up your web browser and load `http://localhost:80`
6. If everything works well, enjoy!
