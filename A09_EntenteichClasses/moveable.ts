namespace A09_Ententeich {
    export abstract class Movable {
        position: Vector;
        velocity: Vector;
        color: string;
        type: string;

        constructor(position: Vector, velocity: Vector, color: string, type: string) {
            this.position = position;
            this.velocity = velocity;
            this.color = color;
            this.type = type;
        }

        abstract move(timeslice: number): void;
        abstract draw(): void;
    }}