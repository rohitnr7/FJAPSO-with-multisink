const w = 100,
  h = 100,
  minCN = 4,
  maxCN = 8,
  vMin = -4,
  vMax = 4,
  N = 15,
  nodeCount = 100,
  percent = 0.1,
  alpha = 0.7,
  beta = 0.3,
  eElec = 50 * 0.000000001,
  Efs = 10 * 0.000000000001,
  Emp = 0.0013 * 0.000000000001,
  Eda = 5 * 0.000000000001,
  dThreshold = Math.sqrt(Efs / Emp),
  packetLength = 2000,
  best = {
    nodes: "nodes",
    sequenceVector: "sequenceVector",
    fitness: "fitness"
  },
  iterations = 30,
  omegaMax = 0.94,
  omegaMin = 0.4,
  gamma = 0.7,
  delta = 0.3,
  c1 = 2,
  c2 = 2;
let swarm = null,
  it = 1,
  csX = 50,
  csY = 175,
  fitnessHistory = [],
  rounds = 0,
  energy = null,
  dead = null;

let population = null;
let sinks = [];
let currentIteration = 0;

function setup() {
    createCanvas(w, h);

    sinks.push({x: 15, y: 10})
    sinks.push({x: 85, y: 10})
    sinks.push({x: 15, y: 85})
    sinks.push({x: 85, y: 85})
    
    population = new Population(30);
    population.boot(100);
    frameRate(10)
}

function draw () {
    background(0)
    // Display the sinks
    fill(0, 0, 255);
    for (let i = 0; i < sinks.length; i++) {
        ellipse(sinks[i].x, sinks[i].y, 4, 4)
    }
    population.display();
    population.update();
    currentIteration++;
    if(currentIteration == iterations)
      noLoop();
}




