"use strict";
var A09_Ententeich;
(function (A09_Ententeich) {
    class Duck extends A09_Ententeich.Movable {
        constructor(x, y, color) {
            super(new A09_Ententeich.Vector(x, y), new A09_Ententeich.Vector(2, 0), color, "duck");
        }
        move(timeslice) {
            let offset = new A09_Ententeich.Vector(this.velocity.x, this.velocity.y);
            offset.scale(timeslice);
            this.position.add(offset);
            if (this.position.x > A09_Ententeich.canvas.width) {
                this.position.x = 0; // Zurücksetzen der Ente, wenn sie den rechten Rand erreicht
            }
        }
        draw() {
            A09_Ententeich.crc2.save();
            A09_Ententeich.crc2.translate(this.position.x, this.position.y);
            A09_Ententeich.crc2.fillStyle = this.color;
            A09_Ententeich.crc2.beginPath();
            A09_Ententeich.crc2.arc(0, 0, 20, 0, Math.PI * 2);
            A09_Ententeich.crc2.fill();
            A09_Ententeich.crc2.restore();
        }
    }
    A09_Ententeich.Duck = Duck;
})(A09_Ententeich || (A09_Ententeich = {}));
//# sourceMappingURL=duck.js.map