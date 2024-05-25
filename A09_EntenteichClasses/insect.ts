namespace A09_Ententeich {
    export class insect {
        position: Vector;
        velocity: Vector;
        size: number;
        color: string;
        type: string;
        activity: string;

        constructor(_size: number, _position?: Vector) {
            if (_position)
                this.position = _position;
            else
                this.position = new Vector(Math.random() * crc2.canvas.width, Math.random() * crc2.canvas.height);

            this.velocity = new Vector(50, 0);
            this.velocity.randomize(120, 20);

            // Farbe, Typ und Aktivität der Biene festlegen
            this.color = "yellow";
            this.type = "bumblebee";
            this.activity = "flying";
        }

        move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            // Wenn die Biene den Canvasrand erreicht, wird sie auf die andere Seite gesetzt
            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }

        draw() {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            let grd = crc2.createLinearGradient(2, 3, 6, 8);
            grd.addColorStop(0, this.color);
            grd.addColorStop(1, "black");
            grd.addColorStop(1, this.color);

            crc2.beginPath();
            crc2.ellipse(-2, -10, 8, 2, 80, -2, 2 * Math.PI);
            crc2.fillStyle = "white";
            crc2.fill();

            crc2.beginPath();
            crc2.ellipse(0, 0, 5, 10, Math.PI / 2, 0, 2 * Math.PI);
            crc2.fillStyle = grd;
            crc2.fill();

            crc2.beginPath();
            crc2.ellipse(2, -9, 8, 2, -80, 20, 2 * Math.PI);
            crc2.fillStyle = "lightgrey";
            crc2.fill();

            crc2.restore();
        };
    }
}