namespace A09_Ententeich {
    export class Insect extends Movable {
        size: number;

        constructor(size: number, position?: Vector) {
            let canvasWidth = crc2.canvas.width;
            let canvasHeight = crc2.canvas.height;
        
            let defaultPosition = position || new Vector(Math.random() * canvasWidth, Math.random() * canvasHeight);
            defaultPosition.x = Math.min(canvasWidth, Math.max(0, defaultPosition.x));
            defaultPosition.y = Math.min(canvasHeight, Math.max(0, defaultPosition.y));
        
            let defaultVelocity = new Vector(50, 0);
            defaultVelocity.randomize(120, 20);
            super(defaultPosition, defaultVelocity, "yellow", "insect");
            this.size = size;
        }

        move(timeslice: number): void {
            let offset = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(timeslice);
            this.position.add(offset);

            if (this.position.x < 0) this.position.x += crc2.canvas.width;
            if (this.position.y < 0) this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width) this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height) this.position.y -= crc2.canvas.height;
        }

        draw(): void {
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
        }
    }}