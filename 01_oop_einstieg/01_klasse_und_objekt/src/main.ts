import p5 from "p5";
import { Kreis } from "./Kreis";

new p5((p: p5) => {
  let kreis1: Kreis;
  let kreis2: Kreis;
  let kreis3: Kreis;

  p.setup = () => {
    p.createCanvas(600, 400);

    kreis1 = new Kreis(
      150,
      200,
      80,
      p.color(255, 80, 80)
    );

    kreis2 = new Kreis(
      300,
      200,
      120,
      p.color(80, 150, 255)
    );

    kreis3 = new Kreis(
      450,
      200,
      60,
      p.color(80, 200, 120)
    );
  };

  p.draw = () => {
    p.background(220);

    kreis1.zeichnen(p);
    kreis2.zeichnen(p);
    kreis3.zeichnen(p);
  };
});