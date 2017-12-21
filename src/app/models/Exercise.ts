export class Exercise {
  name: string;
  weight = 0;
  time: "";
  sets=0;
  reps=0;

  constructor(n: string) {
    this.name = n;
  }
}
