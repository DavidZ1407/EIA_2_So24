"use strict";
var GenerativeArt;
(function (GenerativeArt) {
    //     /*
    //     Aufgabe: <L08.1_GenerativeKunst>
    //     // Name: <David Zahn>
    //     // Matrikel: <275010>
    //     // Datum: <02.05.2024>
    //     // Quellen: <"">
    //     */
    // Warten bis das Fenster geladen ist,variable deklaration
    window.addEventListener("load", handleLoad);
    let crc2;
    //Suchen nach Canvas in DOM, wenn canvas nicht gefunden return
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas"); //Suchen nach Canvas in DOM
        if (!canvas)
            return;
        //Kontext von Canvas aufgezeigt in 2D, Canvas Hintergrund schwarz gemalt
        crc2 = canvas.getContext("2d");
        crc2.fillStyle = "black";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        //Schleife die von 0 bis 29 (30) gezählt für die Zufällige Position und Radius des Kreis
        for (let i = 0; i < 50; i++) {
            // Zufällige Position und Radius für jeden Kreis
            const centerX = Math.random() * canvas.width;
            const centerY = Math.random() * canvas.height;
            const radius = Math.random() * Math.min(canvas.width, canvas.height) / 2;
            // Kreis zeichnen, Zeichnen Kreis mit Kurven
            // drawCircle(centerX, centerY, radius);
            drawCurvedLines(centerX, centerY, radius);
            drawShapes(centerX, centerY, radius);
        }
    }
    // Funktion, für generieren von Zufällige Farbe in RGB 
    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }
    //Funktion für Zeichnen der Curved Kreis mit Berechnungen
    function drawCurvedLines(centerX, centerY, radius) {
        for (let i = 0; i < 360; i += 2) { //Die Schleife zählt von 0 bis 360 Grad in 2 Grad Schritte und berechnet für jeden Winkel die x- und y-Koordinaten 
            crc2.save(); // Speichern des aktuellen Zustands
            crc2.translate(centerX, centerY); // Verschiebe zum Ursprung
            crc2.rotate((i * Math.PI) / 180); // Rotation vom Winkel
            crc2.translate(-centerX, -centerY); // Verschiebe den Ursprung zurück
            // Linienfarbe, Zufällge Farbe
            crc2.strokeStyle = getRandomColor();
            // Zufällige Dicke der Linie
            crc2.lineWidth = Math.random() * 30;
            // Zeichne die Kurve
            crc2.beginPath();
            crc2.moveTo(centerX, centerY);
            crc2.bezierCurveTo(centerX + radius, centerY, centerX + radius, centerY + radius, centerX, centerY + radius);
            crc2.stroke(); //Zeichne den Pfad
            crc2.restore(); // Wiederherstellen des ursprünglichen Zustands
        }
    }
    function drawShapes(centerX, centerY, radius) {
        for (let i = 0; i < 360; i += 2) {
            crc2.save(); // Speichern des aktuellen Zustands
            crc2.translate(centerX, centerY); // Verschiebe zum Ursprung
            crc2.rotate((i * Math.PI) / 180); // Rotation vom Winkel
            crc2.translate(-centerX, -centerY); // Verschiebe den Ursprung zurück
            // Linienfarbe, Zufällge Farbe
            crc2.strokeStyle = getRandomColor();
            // Zufällige Dicke der Linie
            crc2.lineWidth = Math.random() * 15;
            // Überprüfe, ob i gerade oder ungerade ist
            if (i % 2 === 0) {
                // Zeichne einen Kreis
                crc2.beginPath();
                crc2.arc(centerX, centerY, radius, 100, 0 * Math.PI); //Bogen zeichnen
                crc2.stroke(); // Zeichne den Pfad
            }
            else {
                //Zeichnen einer Linie
                crc2.beginPath();
                crc2.moveTo(centerX - radius, centerY);
                crc2.lineTo(centerX + radius, centerY);
                crc2.stroke();
            }
            crc2.restore(); // Wiederherstellen des ursprünglichen Zustands
        }
    }
})(GenerativeArt || (GenerativeArt = {}));
//# sourceMappingURL=art.js.map