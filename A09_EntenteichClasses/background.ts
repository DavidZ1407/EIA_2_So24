namespace A09_Ententeich{

    export function drawBackground(): void {
        console.log("Background");
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "HSL(100, 80%, 30%)");
    
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    export function drawMountains(horizon: number, position: Vector, size: Vector, colorLow: string, colorHigh: string): void {
        console.log("Mountains");
        let stepMin: number = 50;
        let stepMax: number = 150;
        let x: number = 0;
    
        crc2.save();
        crc2.translate(position.x, horizon); // Adjusted to horizon
    
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -size.y);
    
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -size.x - Math.random() * (size.y - size.x);
    
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
    
        crc2.lineTo(x, 0);
        crc2.closePath();
    
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -size.y);
        gradient.addColorStop(0, colorLow);
        gradient.addColorStop(0.5, colorHigh);
    
        crc2.fillStyle = gradient;
        crc2.fill();
    
        crc2.restore();
    }

    export function drawSun(_position: Vector): void {
        console.log('Sun', _position);

        let r1: number = 30;
        let r2: number = 150;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60 ,100%, 50%, 0)")

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }

    export function drawCloud(_position: Vector, _size: Vector): void {
        console.log("Cloud", _position, _size);


        let nParticles: number = 20;
        let radiusParticle: number = 50;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    export function drawPond(_center: Vector, _width: number, _height: number): void {
        console.log("Pond", _center, _width, _height);
        
        crc2.fillStyle = "lightblue"; // Farbe des Teichs
        crc2.beginPath();
        // Zeichne eine ovale Form
        crc2.ellipse(_center.x, _center.y, _width, _height, 0, 0, Math.PI * 2);
        crc2.closePath();
        crc2.fill();
    }

    
    }