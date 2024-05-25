namespace A09_Ententeich {
    export class flower {
        x: number;
        y: number;
        color: string;
        position: Vector;
        type: string;
        size: Vector;

        constructor(_x: number, _y: number, _color: string, _position: Vector, _type: string, _size: Vector) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
            this.position = _position;
            this.type = _type;
            this.size = _size;
        }

        // Blume zeichnen
        static drawFlower(_flower: flower): void {
            crc2.beginPath();
            crc2.fillStyle = _flower.color;

            // Je nach Typ der Blume unterschiedliche Formen zeichnen
            switch (_flower.type) {
                case "tulip":
                    _flower.drawTulip();
                    break;
                case "rose":
                    _flower.drawRose();
                    break;
            }

            crc2.closePath();
            crc2.fill();
        }

        // Tulpe zeichnen
        drawTulip(): void {
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 5, this.y - 10);
            crc2.lineTo(this.x + 10, this.y);
            crc2.lineTo(this.x + 5, this.y + 10);
            crc2.arc(this.x + 5, this.y, 5, 0, 2 * Math.PI);
        }

        // Rose zeichnen
        drawRose(): void {
            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x - 5, this.y, 5, 0, Math.PI * 2);
            crc2.arc(this.x + 5, this.y, 5, 0, Math.PI * 2);
            crc2.arc(this.x, this.y - 5, 5, 0, Math.PI * 2);
            crc2.arc(this.x, this.y + 5, 5, 0, Math.PI * 2);
        }

       
    }
}

