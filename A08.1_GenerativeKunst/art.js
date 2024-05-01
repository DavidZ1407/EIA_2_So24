"use strict";
var GenerativeArt;
(function (GenerativeArt) {
    //     /*
    //     Aufgabe: <L08.1_GenerativeKunst>
    //     // Name: <David Zahn>
    //     // Matrikel: <275010>
    //     // Datum: <01.05.2024>
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
        //Für Drawcircle 
        // drawCircle(canvas.width / 2, canvas.height / 2, canvas.width / 2); 
        //Schleife die von 0 bis 29 (30) gezählt für die Zufällige Position und Radius des Kreis
        for (let i = 0; i < 30; i++) {
            // Zufällige Position und Radius für jeden Kreis
            const centerX = Math.random() * canvas.width;
            const centerY = Math.random() * canvas.height;
            const radius = Math.random() * Math.min(canvas.width, canvas.height) / 2;
            // Kreis zeichnen, Zeichnen Kreis mit Kurven
            // drawCircle(centerX, centerY, radius);
            drawCurvedLines(centerX, centerY, radius);
        }
    }
    // Funktion, für generieren von Zufällige Farbe in RGB 
    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }
    //Funktion für Kreise Ziechen
    // function drawCircle(centerX: number, centerY: number, radius: number) {
    //     for (let i = 0; i < 360; i++) {
    //         const angle = (i * Math.PI) / 180;
    //         const endX = centerX + radius * Math.cos(angle);
    //         const endY = centerY + radius * Math.sin(angle);
    //         crc2.strokeStyle = "white";
    //         // Zufällige Farbe wählen
    //         crc2.strokeStyle = getRandomColor();
    //         // Zufällige Dicke der Linie
    //         crc2.lineWidth = Math.random() * 2;
    //         crc2.beginPath();
    //         crc2.moveTo(centerX, centerY);
    //         crc2.lineTo(endX, endY);
    //         crc2.stroke();
    //     }
    // }
    //Funktion für Zeichnen der Curved Kreis mit Berechnungen
    function drawCurvedLines(centerX, centerY, radius) {
        for (let i = 0; i < 360; i += 20) { //Die Schleife zählt von 0 bis 360 Grad in 20 Grad Schritte und berechnet für jeden Winkel die x- und y-Koordinaten 
            const angle = (i * Math.PI) / 180;
            const controlX1 = centerX + radius * Math.cos(angle);
            const controlY1 = centerY + radius * Math.sin(angle);
            const controlX2 = centerX + radius * Math.cos(angle + Math.PI / 2);
            const controlY2 = centerY + radius * Math.sin(angle + Math.PI / 2);
            const endX = centerX + radius * Math.cos(angle + Math.PI);
            const endY = centerY + radius * Math.sin(angle + Math.PI);
            // Linienfarbe weiß, Zufällge Farbe
            // crc2.strokeStyle = "white";
            crc2.strokeStyle = getRandomColor();
            // Zufällige Dicke der Linie
            crc2.lineWidth = Math.random() * 4;
            crc2.save(); // Speichern des aktuellen Zustands
            crc2.beginPath(); // Beginne einen Pfad
            crc2.moveTo(centerX, centerY); // Bewege nach centerX , CenterY
            crc2.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, endY); //Zeichne die Linie durch die Punkte
            crc2.stroke(); //Zeichnet den Pfad mit der aktuellen Linienstil
            crc2.restore(); //Wiederherstellen des ursprünglichen Zustands
        }
    }
})(GenerativeArt || (GenerativeArt = {}));
//# sourceMappingURL=art.js.map