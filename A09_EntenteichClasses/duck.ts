namespace A09_Ententeich {
    export class Duck extends Movable {
        constructor(x: number, y: number, color: string) {
            super(new Vector(x, y), new Vector(2, 0), color, "duck");
        }

        move(timeslice: number): void {
            let offset = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(timeslice);
            this.position.add(offset);

            if (this.position.x > canvas.width) {
                this.position.x = 0; // Zurücksetzen der Ente, wenn sie den rechten Rand erreicht
            }
        }

        draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.arc(0, 0, 20, 0, Math.PI * 2);
            crc2.fill();
            crc2.restore();
        }
    }
}