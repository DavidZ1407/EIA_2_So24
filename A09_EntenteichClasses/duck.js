"use strict";
var A09_Ententeich;
(function (A09_Ententeich) {
    class Duck {
        x;
        y;
        color;
        inPond;
        constructor(x, y, color, inPond) {
            this.x = x;
            this.y = y;
            this.color = color;
            this.inPond = inPond;
        }
        move() {
            if (this.inPond) {
                this.x += Math.random() * 2 - 1;
                this.y += Math.random() * 2 - 1;
                if (Math.random() < 0.01) {
                    this.y += 30;
                }
                let pondX = A09_Ententeich.crc2.canvas.width / 2;
                let pondY = A09_Ententeich.crc2.canvas.height * 0.7;
                let pondRadiusX = 200;
                let pondRadiusY = 75;
                if ((this.x - pondX) ** 2 / pondRadiusX ** 2 + (this.y - pondY) ** 2 / pondRadiusY ** 2 > 1) {
                    this.x = pondX;
                    this.y = pondY;
                }
            }
            else {
                this.x += Math.random() * 2 - 1;
                this.y += Math.random() * 2 - 1;
                let pondX = A09_Ententeich.crc2.canvas.width / 2;
                let pondY = A09_Ententeich.crc2.canvas.height * 0.7;
                let pondRadiusX = 250;
                let pondRadiusY = 100;
                if ((this.x - pondX) ** 2 / pondRadiusX ** 2 + (this.y - pondY) ** 2 / pondRadiusY ** 2 < 1) {
                    this.x = A09_Ententeich.crc2.canvas.width / 2 - pondRadiusX - 10;
                    this.y = pondY + pondRadiusY + 10;
                }
            }
        }
        draw() {
            if (this.color === "#8B4513") {
                A09_Ententeich.crc2.fillStyle = "#FFA500";
                A09_Ententeich.crc2.beginPath();
                A09_Ententeich.crc2.moveTo(this.x - 5, this.y + 12);
                A09_Ententeich.crc2.lineTo(this.x - 10, this.y + 18);
                A09_Ententeich.crc2.lineTo(this.x + 10, this.y + 18);
                A09_Ententeich.crc2.lineTo(this.x + 5, this.y + 12);
                A09_Ententeich.crc2.fill();
            }
            A09_Ententeich.crc2.fillStyle = this.color;
            A09_Ententeich.crc2.beginPath();
            A09_Ententeich.crc2.ellipse(this.x, this.y, 20, 12, Math.PI / 2, 0, Math.PI * 2);
            A09_Ententeich.crc2.fill();
            A09_Ententeich.crc2.beginPath();
            A09_Ententeich.crc2.arc(this.x + 25, this.y - 10, 10, 0, Math.PI * 2);
            A09_Ententeich.crc2.fill();
            A09_Ententeich.crc2.fillStyle = "#FFA500";
            A09_Ententeich.crc2.beginPath();
            A09_Ententeich.crc2.moveTo(this.x + 35, this.y - 10);
            A09_Ententeich.crc2.lineTo(this.x + 45, this.y - 5);
            A09_Ententeich.crc2.lineTo(this.x + 35, this.y);
            A09_Ententeich.crc2.closePath();
            A09_Ententeich.crc2.fill();
            A09_Ententeich.crc2.fillStyle = "#CCCCCC";
            A09_Ententeich.crc2.beginPath();
            A09_Ententeich.crc2.ellipse(this.x - 10, this.y - 5, 10, 5, Math.PI / 4, 0, Math.PI * 2);
            A09_Ententeich.crc2.fill();
        }
    }
    A09_Ententeich.Duck = Duck;
})(A09_Ententeich || (A09_Ententeich = {}));
//# sourceMappingURL=duck.js.map