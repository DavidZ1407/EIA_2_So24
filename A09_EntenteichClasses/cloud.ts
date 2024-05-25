namespace A09_Ententeich {
    export class Cloud {
        x: number;
        y: number;
        size: number;
        speed: number; // Geschwindigkeit der Wolke

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            this.size = 100; // Größe der Wolke
            this.speed = 1; // Geschwindigkeit der Wolke in horizontaler Richtung
        }

        move(): void {
            // Bewegung der Wolke nach rechts
            this.x += this.speed;
            // Wenn die Wolke den rechten Rand des Canvas erreicht, wird sie zurückgesetzt
            if (this.x > canvas.width) {
                this.x = -200; // Die Wolke erscheint wieder auf der linken Seite des Canvas
            }
        }
        //Wolken werden gezeichnet
        draw(): void {
            crc2.beginPath();
            crc2.fillStyle = 'white';

            
            this.drawEllipse(this.x - this.size * 0.6, this.y, this.size * 0.8, this.size * 0.6);
            this.drawEllipse(this.x, this.y, this.size, this.size * 0.7);
            this.drawEllipse(this.x + this.size * 0.6, this.y, this.size * 0.8, this.size * 0.6);

            crc2.closePath();
            crc2.fill();
        }

        drawEllipse(x: number, y: number, radiusX: number, radiusY: number): void {
            crc2.ellipse(x, y, radiusX, radiusY, 0, 0, 2 * Math.PI);
        }
    }
}