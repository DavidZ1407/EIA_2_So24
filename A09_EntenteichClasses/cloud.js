"use strict";
var A09_Ententeich;
(function (A09_Ententeich) {
    class Cloud {
        x;
        y;
        size;
        speed; // Geschwindigkeit der Wolke
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
            this.size = 100; // Größe der Wolke
            this.speed = 1; // Geschwindigkeit der Wolke in horizontaler Richtung
        }
        move() {
            // Bewegung der Wolke nach rechts
            this.x += this.speed;
            // Wenn die Wolke den rechten Rand des Canvas erreicht, wird sie zurückgesetzt
            if (this.x > A09_Ententeich.canvas.width) {
                this.x = -200; // Die Wolke erscheint wieder auf der linken Seite des Canvas
            }
        }
        draw() {
            A09_Ententeich.crc2.beginPath();
            A09_Ententeich.crc2.fillStyle = 'white';
            // Drei sich überlappende Ellipsen für die Wolke zeichnen
            this.drawEllipse(this.x - this.size * 0.6, this.y, this.size * 0.8, this.size * 0.6);
            this.drawEllipse(this.x, this.y, this.size, this.size * 0.7);
            this.drawEllipse(this.x + this.size * 0.6, this.y, this.size * 0.8, this.size * 0.6);
            A09_Ententeich.crc2.closePath();
            A09_Ententeich.crc2.fill();
        }
        drawEllipse(x, y, radiusX, radiusY) {
            A09_Ententeich.crc2.ellipse(x, y, radiusX, radiusY, 0, 0, 2 * Math.PI);
        }
    }
    A09_Ententeich.Cloud = Cloud;
})(A09_Ententeich || (A09_Ententeich = {}));
//# sourceMappingURL=cloud.js.map