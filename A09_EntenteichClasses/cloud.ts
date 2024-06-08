namespace A09_Ententeich {
    export class Cloud extends Movable {
        constructor(x: number, y: number) {
            super(new Vector(x, y), new Vector(2, 0), "white", "cloud");
        }

        move(timeslice: number): void {
            console.log("Moving cloud...");
        
            let offset = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(timeslice);
            this.position.add(offset);
        
            console.log(`New position: (${this.position.x}, ${this.position.y})`);
        
            if (this.position.x > crc2.canvas.width) {
                this.position.x = 0;
                console.log("Resetting cloud position...");
            }
        }
        

        draw(): void {
            console.log(`Drawing cloud at (${this.position.x}, ${this.position.y})`);
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.arc(0, 0, 50, 0, Math.PI * 2);
            crc2.arc(50, 0, 50, 0, Math.PI * 2);
            crc2.arc(25, -25, 50, 0, Math.PI * 2);
            crc2.fill();
            crc2.restore();
        }
    }


}