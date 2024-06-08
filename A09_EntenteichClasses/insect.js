"use strict";
var A09_Ententeich;
(function (A09_Ententeich) {
    class Insect extends A09_Ententeich.Movable {
        size;
        constructor(size, position) {
            let canvasWidth = A09_Ententeich.crc2.canvas.width;
            let canvasHeight = A09_Ententeich.crc2.canvas.height;
            let defaultPosition = position || new A09_Ententeich.Vector(Math.random() * canvasWidth, Math.random() * canvasHeight);
            defaultPosition.x = Math.min(canvasWidth, Math.max(0, defaultPosition.x));
            defaultPosition.y = Math.min(canvasHeight, Math.max(0, defaultPosition.y));
            let defaultVelocity = new A09_Ententeich.Vector(50, 0);
            defaultVelocity.randomize(120, 20);
            super(defaultPosition, defaultVelocity, "yellow", "insect");
            this.size = size;
        }
        move(timeslice) {
            let offset = new A09_Ententeich.Vector(this.velocity.x, this.velocity.y);
            offset.scale(timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += A09_Ententeich.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += A09_Ententeich.crc2.canvas.height;
            if (this.position.x > A09_Ententeich.crc2.canvas.width)
                this.position.x -= A09_Ententeich.crc2.canvas.width;
            if (this.position.y > A09_Ententeich.crc2.canvas.height)
                this.position.y -= A09_Ententeich.crc2.canvas.height;
        }
        draw() {
            A09_Ententeich.crc2.save();
            A09_Ententeich.crc2.translate(this.position.x, this.position.y);
            let grd = A09_Ententeich.crc2.createLinearGradient(2, 3, 6, 8);
            grd.addColorStop(0, this.color);
            grd.addColorStop(1, "black");
            grd.addColorStop(1, this.color);
            A09_Ententeich.crc2.beginPath();
            A09_Ententeich.crc2.ellipse(-2, -10, 8, 2, 80, -2, 2 * Math.PI);
            A09_Ententeich.crc2.fillStyle = "white";
            A09_Ententeich.crc2.fill();
            A09_Ententeich.crc2.beginPath();
            A09_Ententeich.crc2.ellipse(0, 0, 5, 10, Math.PI / 2, 0, 2 * Math.PI);
            A09_Ententeich.crc2.fillStyle = grd;
            A09_Ententeich.crc2.fill();
            A09_Ententeich.crc2.beginPath();
            A09_Ententeich.crc2.ellipse(2, -9, 8, 2, -80, 20, 2 * Math.PI);
            A09_Ententeich.crc2.fillStyle = "lightgrey";
            A09_Ententeich.crc2.fill();
            A09_Ententeich.crc2.restore();
        }
    }
    A09_Ententeich.Insect = Insect;
})(A09_Ententeich || (A09_Ententeich = {}));
//# sourceMappingURL=insect.js.map