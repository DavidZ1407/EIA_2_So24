"use strict";
var A09_Ententeich;
(function (A09_Ententeich) {
    function drawBackground() {
        console.log("Background");
        // Draw background
        let gradient = A09_Ententeich.crc2.createLinearGradient(0, 0, 0, A09_Ententeich.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(A09_Ententeich.golden, "white");
        gradient.addColorStop(1, "HSL(100, 80%, 30%)");
        A09_Ententeich.crc2.fillStyle = gradient;
        A09_Ententeich.crc2.fillRect(0, 0, A09_Ententeich.crc2.canvas.width, A09_Ententeich.crc2.canvas.height);
        drawMountains(A09_Ententeich.horizon);
        // Draw sun
        drawSun(new A09_Ententeich.Vector(100, 70));
        // Draw pond
        drawPond(new A09_Ententeich.Vector(700, 600), 700, 50);
    }
    A09_Ententeich.drawBackground = drawBackground;
    // Berge gezeichnet
    function drawMountains(horizon) {
        console.log("Mountains");
        let leftMountainHeight = 100;
        A09_Ententeich.crc2.beginPath();
        A09_Ententeich.crc2.moveTo(0, horizon);
        A09_Ententeich.crc2.lineTo(A09_Ententeich.crc2.canvas.width * 0.2, horizon - leftMountainHeight);
        A09_Ententeich.crc2.quadraticCurveTo(A09_Ententeich.crc2.canvas.width * 0.25, horizon - leftMountainHeight - 50, A09_Ententeich.crc2.canvas.width * 0.3, horizon - leftMountainHeight);
        A09_Ententeich.crc2.lineTo(A09_Ententeich.crc2.canvas.width * 0.4, horizon);
        A09_Ententeich.crc2.closePath();
        A09_Ententeich.crc2.fillStyle = "#91c06c";
        A09_Ententeich.crc2.fill();
        let middleMountainHeight = 150;
        A09_Ententeich.crc2.beginPath();
        A09_Ententeich.crc2.moveTo(A09_Ententeich.crc2.canvas.width * 0.3, horizon);
        A09_Ententeich.crc2.lineTo(A09_Ententeich.crc2.canvas.width * 0.5, horizon - middleMountainHeight);
        A09_Ententeich.crc2.quadraticCurveTo(A09_Ententeich.crc2.canvas.width * 0.55, horizon - middleMountainHeight - 50, A09_Ententeich.crc2.canvas.width * 0.6, horizon - middleMountainHeight);
        A09_Ententeich.crc2.lineTo(A09_Ententeich.crc2.canvas.width * 0.9, horizon);
        A09_Ententeich.crc2.closePath();
        A09_Ententeich.crc2.fillStyle = "#60a22c";
        A09_Ententeich.crc2.fill();
        A09_Ententeich.crc2.beginPath();
        A09_Ententeich.crc2.moveTo(A09_Ententeich.crc2.canvas.width * 0.7, horizon);
        A09_Ententeich.crc2.lineTo(A09_Ententeich.crc2.canvas.width * 0.95, 50);
        A09_Ententeich.crc2.quadraticCurveTo(A09_Ententeich.crc2.canvas.width * 1.025, 20, A09_Ententeich.crc2.canvas.width * 1.1, horizon);
        A09_Ententeich.crc2.closePath();
        A09_Ententeich.crc2.fillStyle = "#357305";
        A09_Ententeich.crc2.fill();
    }
    // zeichnen Sonne
    function drawSun(_position) {
        console.log('Sun', _position);
        let r1 = 30;
        let r2 = 150;
        let gradient = A09_Ententeich.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        A09_Ententeich.crc2.save();
        A09_Ententeich.crc2.translate(_position.x, _position.y);
        A09_Ententeich.crc2.fillStyle = gradient;
        A09_Ententeich.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        A09_Ententeich.crc2.fill();
        A09_Ententeich.crc2.restore();
    }
    // Zeihnen Teich
    function drawPond(_center, _width, _height) {
        console.log("Pond", _center, _width, _height);
        A09_Ententeich.crc2.fillStyle = "lightblue"; // Farbe des Teichs
        A09_Ententeich.crc2.beginPath();
        // Zeichne eine ovale Form
        A09_Ententeich.crc2.ellipse(_center.x, _center.y, _width, _height, 0, 0, Math.PI * 2);
        A09_Ententeich.crc2.closePath();
        A09_Ententeich.crc2.fill();
    }
})(A09_Ententeich || (A09_Ententeich = {}));
//# sourceMappingURL=background.js.map