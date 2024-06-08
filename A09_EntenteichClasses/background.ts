namespace A09_Ententeich {
   

    export function drawBackground(): void {
        console.log("Background");

        // Draw background
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "HSL(100, 80%, 30%)");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        drawMountains(horizon);

        // Draw sun
        drawSun(new Vector(100, 70));

        // Draw pond
        drawPond(new Vector(700, 600), 700, 50);
    }
    // Berge gezeichnet
    function drawMountains(horizon: number): void {
        console.log("Mountains");
  
        let leftMountainHeight: number = 100;
        crc2.beginPath();
        crc2.moveTo(0, horizon);
        crc2.lineTo(crc2.canvas.width * 0.2, horizon - leftMountainHeight);
        crc2.quadraticCurveTo(crc2.canvas.width * 0.25, horizon - leftMountainHeight - 50, crc2.canvas.width * 0.3, horizon - leftMountainHeight);
        crc2.lineTo(crc2.canvas.width * 0.4, horizon);
        crc2.closePath();
        crc2.fillStyle = "#91c06c";
        crc2.fill();
  
        let middleMountainHeight: number = 150;
        crc2.beginPath();
        crc2.moveTo(crc2.canvas.width * 0.3, horizon);
        crc2.lineTo(crc2.canvas.width * 0.5, horizon - middleMountainHeight);
        crc2.quadraticCurveTo(crc2.canvas.width * 0.55, horizon - middleMountainHeight - 50, crc2.canvas.width * 0.6, horizon - middleMountainHeight);
        crc2.lineTo(crc2.canvas.width * 0.9, horizon);
        crc2.closePath();
        crc2.fillStyle = "#60a22c";
        crc2.fill();
  
        crc2.beginPath();
        crc2.moveTo(crc2.canvas.width * 0.7, horizon);
        crc2.lineTo(crc2.canvas.width * 0.95, 50);
        crc2.quadraticCurveTo(crc2.canvas.width * 1.025, 20, crc2.canvas.width * 1.1, horizon);
        crc2.closePath();
        crc2.fillStyle = "#357305";
        crc2.fill();
    }
    // zeichnen Sonne
    function drawSun(_position: Vector): void {
        console.log('Sun', _position);

        let r1: number = 30;
        let r2: number = 150;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    // Zeihnen Teich
    function drawPond(_center: Vector, _width: number, _height: number): void {
        console.log("Pond", _center, _width, _height);

        crc2.fillStyle = "lightblue"; // Farbe des Teichs
        crc2.beginPath();
        // Zeichne eine ovale Form
        crc2.ellipse(_center.x, _center.y, _width, _height, 0, 0, Math.PI * 2);
        crc2.closePath();
        crc2.fill();
    }



    
}