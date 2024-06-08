"use strict";
var A09_Ententeich;
(function (A09_Ententeich) {
    class Cloud extends A09_Ententeich.Movable {
        constructor(x, y) {
            super(new A09_Ententeich.Vector(x, y), new A09_Ententeich.Vector(2, 0), "white", "cloud");
        }
        move(timeslice) {
            console.log("Moving cloud...");
            let offset = new A09_Ententeich.Vector(this.velocity.x, this.velocity.y);
            offset.scale(timeslice);
            this.position.add(offset);
            console.log(`New position: (${this.position.x}, ${this.position.y})`);
            if (this.position.x > A09_Ententeich.crc2.canvas.width) {
                this.position.x = 0;
                console.log("Resetting cloud position...");
            }
        }
        draw() {
            console.log(`Drawing cloud at (${this.position.x}, ${this.position.y})`);
            A09_Ententeich.crc2.save();
            A09_Ententeich.crc2.translate(this.position.x, this.position.y);
            A09_Ententeich.crc2.fillStyle = this.color;
            A09_Ententeich.crc2.beginPath();
            A09_Ententeich.crc2.arc(0, 0, 50, 0, Math.PI * 2);
            A09_Ententeich.crc2.arc(50, 0, 50, 0, Math.PI * 2);
            A09_Ententeich.crc2.arc(25, -25, 50, 0, Math.PI * 2);
            A09_Ententeich.crc2.fill();
            A09_Ententeich.crc2.restore();
        }
    }
    A09_Ententeich.Cloud = Cloud;
})(A09_Ententeich || (A09_Ententeich = {}));
//# sourceMappingURL=cloud.js.map