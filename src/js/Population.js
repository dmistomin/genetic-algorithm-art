class Population {
  constructor({populationSize, mutationRate, crossoverRate}) {
    this.generation = 0;
    this.solutions = [];
    for(let i = 0; i < populationSize; i++) {
      this.solutions.push(new GeneratedImage());
    }
  }
}
