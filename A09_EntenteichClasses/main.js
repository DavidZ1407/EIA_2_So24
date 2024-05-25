"use strict";
var A09_Ententeich;
(function (A09_Ententeich) {
    //     /*
    //     Aufgabe: <L09_Ententeich>
    //     // Name: <David Zahn>
    //     // Matrikel: <275010>
    //     // Datum: <25.05.2024>
    //     // Quellen: <"ChatGPT">
    //     */
    window.addEventListener('load', handleload);
    let clouds = [];
    let insectArray = [];
    let ducks = [];
    A09_Ententeich.golden = 0.62;
    A09_Ententeich.canvas = document.querySelector("canvas");
    function handleload(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        A09_Ententeich.crc2 = canvas.getContext("2d");
        A09_Ententeich.horizon = A09_Ententeich.crc2.canvas.height * A09_Ententeich.golden;
        createClouds(); // Mehr Wolken erstellen
        A09_Ententeich.drawBackground(); // Hintergrund zeichnen
        setInterval(animateClouds, 40); // alle 40 Millisekunden neue Wolken zeichnen 
        createInsects();
        window.setInterval(animateInsect, 3);
        createDucks();
    }
    function createDucks() {
        for (let i = 0; i < 3; i++) {
            let x = Math.random() * A09_Ententeich.canvas.width;
            let y = 500;
            let duck = new A09_Ententeich.Duck(x, y, "#8B4513", true);
            ducks.push(duck);
        }
        setInterval(animateDucks, 20); // Enten alle 20 Millisekunden animieren
    }
    function animateDucks() {
        // crc2.clearRect(0, 0, canvas.width, canvas.height); // Canvas löschen
        // drawBackground(); // Hintergrund nur einmal zeichnen
        for (let duck of ducks) {
            duck.move(); // Enten bewegen
            duck.draw(); // Enten zeichnen
        }
        drawFlowers(); // Blumen zeichnen
    }
    // Drei Wolken zeichnen
    function createClouds() {
        for (let i = 0; i < 3; i++) {
            let x = Math.random() * A09_Ententeich.canvas.width;
            let y = Math.random() * (100);
            let cloud = new A09_Ententeich.Cloud(x, y);
            clouds.push(cloud);
        }
    }
    //Bewegung von Wolken zeichnen
    function animateClouds() {
        // crc2.clearRect(0, 0, canvas.width, canvas.height); // Canvas löschen
        A09_Ententeich.drawBackground(); // Hintergrund nur einmal zeichnen
        for (let cloud of clouds) {
            cloud.move(); // Wolken bewegen
            cloud.draw(); // Wolken zeichnen
        }
        drawFlowers(); // Blumen zeichnen
    }
    //Zeichnen der Blumen position, Farbe
    function drawFlowers() {
        // Erstelle Blumen und rufe die drawFlower-Methode auf, um sie zu zeichnen
        let tulip = new A09_Ententeich.flower(600, 500, "red", new A09_Ententeich.Vector(100, 100), "tulip", new A09_Ententeich.Vector(20, 20));
        A09_Ententeich.flower.drawFlower(tulip);
        let rose = new A09_Ententeich.flower(100, 500, "blue", new A09_Ententeich.Vector(200, 200), "rose", new A09_Ententeich.Vector(30, 30));
        A09_Ententeich.flower.drawFlower(rose);
    }
    // Insecten erstellen
    function createInsects() {
        for (let i = 0; i < 3; i++) {
            let insects = new A09_Ententeich.insect(0.5, new A09_Ententeich.Vector(600, 400));
            insectArray.push(insects);
        }
    }
    //Insecten bewegung
    function animateInsect() {
        for (let insect of insectArray) {
            insect.move(1 / 50);
            insect.draw();
        }
    }
})(A09_Ententeich || (A09_Ententeich = {}));
//# sourceMappingURL=main.js.map