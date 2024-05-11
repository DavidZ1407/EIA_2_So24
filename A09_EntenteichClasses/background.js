"use strict";
var A09_Ententeich;
(function (A09_Ententeich) {
    // Hintergrund zeichnen
    function drawBackground() {
        console.log("Background");
        let gradient = A09_Ententeich.crc2.createLinearGradient(0, 0, 0, A09_Ententeich.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(A09_Ententeich.golden, "white");
        gradient.addColorStop(1, "HSL(100, 80%, 30%)");
        A09_Ententeich.crc2.fillStyle = gradient;
        A09_Ententeich.crc2.fillRect(0, 0, A09_Ententeich.crc2.canvas.width, A09_Ententeich.crc2.canvas.height);
    }
    A09_Ententeich.drawBackground = drawBackground;
    // Zeichnen von Bergen 
    function drawMountains(horizon, position, size, colorLow, colorHigh) {
        console.log("Mountains");
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        A09_Ententeich.crc2.save();
        A09_Ententeich.crc2.translate(position.x, horizon);
        A09_Ententeich.crc2.beginPath();
        A09_Ententeich.crc2.moveTo(0, 0);
        A09_Ententeich.crc2.lineTo(0, -size.y);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -size.x - Math.random() * (size.y - size.x);
            A09_Ententeich.crc2.lineTo(x, y);
        } while (x < A09_Ententeich.crc2.canvas.width);
        A09_Ententeich.crc2.lineTo(x, 0);
        A09_Ententeich.crc2.closePath();
        let gradient = A09_Ententeich.crc2.createLinearGradient(0, 0, 0, -size.y);
        gradient.addColorStop(0, colorLow);
        gradient.addColorStop(0.5, colorHigh);
        A09_Ententeich.crc2.fillStyle = gradient;
        A09_Ententeich.crc2.fill();
        A09_Ententeich.crc2.restore();
    }
    A09_Ententeich.drawMountains = drawMountains;
    // Zeichnung für die Sonne 
    function drawSun(_position) {
        console.log('Sun', _position);
        let r1 = 30;
        let r2 = 150;
        let gradient = A09_Ententeich.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60 ,100%, 50%, 0)");
        A09_Ententeich.crc2.save();
        A09_Ententeich.crc2.translate(_position.x, _position.y);
        A09_Ententeich.crc2.fillStyle = gradient;
        A09_Ententeich.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        A09_Ententeich.crc2.fill();
        A09_Ententeich.crc2.restore();
    }
    A09_Ententeich.drawSun = drawSun;
    // Zeichen Wolken
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 20;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = A09_Ententeich.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        A09_Ententeich.crc2.save();
        A09_Ententeich.crc2.translate(_position.x, _position.y);
        A09_Ententeich.crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            A09_Ententeich.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            A09_Ententeich.crc2.translate(x, y);
            A09_Ententeich.crc2.fill(particle);
            A09_Ententeich.crc2.restore();
        }
        A09_Ententeich.crc2.restore();
    }
    A09_Ententeich.drawCloud = drawCloud;
    // Zeichnen Teich
    function drawPond(_center, _width, _height) {
        console.log("Pond", _center, _width, _height);
        A09_Ententeich.crc2.fillStyle = "lightblue"; // Farbe des Teichs
        A09_Ententeich.crc2.beginPath();
        // Zeichne eine ovale Form
        A09_Ententeich.crc2.ellipse(_center.x, _center.y, _width, _height, 0, 0, Math.PI * 2);
        A09_Ententeich.crc2.closePath();
        A09_Ententeich.crc2.fill();
    }
    A09_Ententeich.drawPond = drawPond;
})(A09_Ententeich || (A09_Ententeich = {}));
//# sourceMappingURL=background.js.map