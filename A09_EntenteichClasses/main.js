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
    window.addEventListener('load', handleLoad);
    let movables = [];
    let clouds = [];
    let insectArray = [];
    let ducks = [];
    A09_Ententeich.golden = 0.62;
    A09_Ententeich.canvas = document.querySelector("canvas");
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        A09_Ententeich.crc2 = canvas.getContext("2d");
        A09_Ententeich.horizon = A09_Ententeich.crc2.canvas.height * A09_Ententeich.golden;
        createMovables();
        A09_Ententeich.drawBackground();
        setInterval(animate, 40);
    }
    function createMovables() {
        // Enten erstellen und zum Array hinzufügen
        let brownDuck1 = new A09_Ententeich.Duck(200, 520, "#8B4513");
        ducks.push(brownDuck1);
        movables.push(brownDuck1);
        let brownDuck2 = new A09_Ententeich.Duck(-50, 450, "#A0522D");
        ducks.push(brownDuck2);
        movables.push(brownDuck2);
        let brownDuck3 = new A09_Ententeich.Duck(700, 400, "#8B4513");
        ducks.push(brownDuck3);
        movables.push(brownDuck3);
        // Wolken erstellen und zum Array hinzufügen
        for (let i = 0; i < 7; i++) {
            let cloud = new A09_Ententeich.Cloud(Math.random() * 500, Math.random() * 200);
            clouds.push(cloud);
            movables.push(cloud);
        }
        // Insekten (Bienen) erstellen und zum Array hinzufügen
        for (let i = 0; i < 3; i++) {
            let insect = new A09_Ententeich.Insect(0.5, new A09_Ententeich.Vector(Math.random() * A09_Ententeich.canvas.width, Math.random() * A09_Ententeich.canvas.height));
            insectArray.push(insect);
            movables.push(insect);
        }
    }
    function animate() {
        console.log("Animating...");
        A09_Ententeich.crc2.clearRect(0, 0, A09_Ententeich.canvas.width, A09_Ententeich.canvas.height);
        A09_Ententeich.drawBackground();
        for (let movable of movables) {
            console.log(`Moving ${movable.type} to position (${movable.position.x}, ${movable.position.y})`);
            movable.move(1 / 50);
            movable.draw();
        }
    }
})(A09_Ententeich || (A09_Ententeich = {}));
//# sourceMappingURL=main.js.map