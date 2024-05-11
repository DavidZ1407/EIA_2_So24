"use strict";
var A09_Ententeich;
(function (A09_Ententeich) {
    //     /*
    //     Aufgabe: <L09_Ententeich>
    //     // Name: <David Zahn>
    //     // Matrikel: <275010>
    //     // Datum: <10.05.2024>
    //     // Quellen: <"ChatGPT">
    //     */
    // Warten bis das Fenster geladen ist
    window.addEventListener('load', handleload);
    A09_Ententeich.golden = 0.62;
    A09_Ententeich.canvas = document.querySelector("canvas");
    //Suchen nach Canvas in DOM, wenn canvas nicht gefunden return
    function handleload(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        A09_Ententeich.crc2 = canvas.getContext("2d");
        // Berechnung von Horizont
        A09_Ententeich.horizon = A09_Ententeich.crc2.canvas.height * A09_Ententeich.golden;
        //aufruf der Zeichnungen
        A09_Ententeich.drawBackground();
        A09_Ententeich.drawMountains(A09_Ententeich.horizon, new A09_Ententeich.Vector(0, 80), new A09_Ententeich.Vector(75, 200), "rgb(100, 100, 100)", "rgb(255, 255, 255)");
        A09_Ententeich.drawSun(new A09_Ententeich.Vector(100, 70));
        A09_Ententeich.drawCloud(new A09_Ententeich.Vector(500, 175), new A09_Ententeich.Vector(250, 75));
        A09_Ententeich.drawPond(new A09_Ententeich.Vector(700, 600), 700, 50);
        const duckPosition = new A09_Ententeich.Vector(50, 50);
        const duckDirection = new A09_Ententeich.Vector(1, 0); // Beispielrichtung
        const duck = new A09_Ententeich.Duck(duckPosition, "yellow", 20, "mallard", duckDirection, "swimming");
        duck.draw();
    }
})(A09_Ententeich || (A09_Ententeich = {}));
//# sourceMappingURL=main.js.map