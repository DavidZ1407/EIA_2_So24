"use strict";
var A09_Ententeich;
(function (A09_Ententeich) {
    class flower {
        x;
        y;
        color;
        position;
        type;
        size;
        constructor(_x, _y, _color, _position, _type, _size) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
            this.position = _position;
            this.type = _type;
            this.size = _size;
        }
        // Blume zeichnen
        static drawFlower(_flower) {
            A09_Ententeich.crc2.beginPath();
            A09_Ententeich.crc2.fillStyle = _flower.color;
            // Je nach Typ der Blume unterschiedliche Formen zeichnen
            switch (_flower.type) {
                case "tulip":
                    _flower.drawTulip();
                    break;
                case "rose":
                    _flower.drawRose();
                    break;
            }
            A09_Ententeich.crc2.closePath();
            A09_Ententeich.crc2.fill();
        }
        // Tulpe zeichnen
        drawTulip() {
            A09_Ententeich.crc2.moveTo(this.x, this.y);
            A09_Ententeich.crc2.lineTo(this.x + 5, this.y - 10);
            A09_Ententeich.crc2.lineTo(this.x + 10, this.y);
            A09_Ententeich.crc2.lineTo(this.x + 5, this.y + 10);
            A09_Ententeich.crc2.arc(this.x + 5, this.y, 5, 0, 2 * Math.PI);
        }
        // Rose zeichnen
        drawRose() {
            A09_Ententeich.crc2.moveTo(this.x, this.y);
            A09_Ententeich.crc2.arc(this.x - 5, this.y, 5, 0, Math.PI * 2);
            A09_Ententeich.crc2.arc(this.x + 5, this.y, 5, 0, Math.PI * 2);
            A09_Ententeich.crc2.arc(this.x, this.y - 5, 5, 0, Math.PI * 2);
            A09_Ententeich.crc2.arc(this.x, this.y + 5, 5, 0, Math.PI * 2);
        }
    }
    A09_Ententeich.flower = flower;
})(A09_Ententeich || (A09_Ententeich = {}));
//# sourceMappingURL=flower.js.map