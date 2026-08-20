import p5 from "p5";

export class Kreis {
  private x: number;
  private y: number;
  private durchmesser: number;
  private farbe: p5.Color;

  constructor(
    x: number,
    y: number,
    durchmesser: number,
    farbe: p5.Color
  ) {
    this.x = x;
    this.y = y;
    this.durchmesser = durchmesser;
    this.farbe = farbe;
  }

  zeichnen(p: p5): void {
    p.fill(this.farbe);
    p.circle(this.x, this.y, this.durchmesser);
  }
}