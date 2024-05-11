namespace A09_Ententeich {

   //     /*
    //     Aufgabe: <L09_Ententeich>
    //     // Name: <David Zahn>
    //     // Matrikel: <275010>
    //     // Datum: <10.05.2024>
    //     // Quellen: <"ChatGPT">
    //     */

 
 // Warten bis das Fenster geladen ist
 window.addEventListener('load', handleload);
 

//Exportieren der Variablen
 export let crc2: CanvasRenderingContext2D;
 export let golden: number = 0.62;
 export let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
 export let horizon1: Vector
 export let horizon: number

//Suchen nach Canvas in DOM, wenn canvas nicht gefunden return
 function handleload(_event: Event) {
     let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
     if (!canvas)
         return;
     crc2 = <CanvasRenderingContext2D>canvas!.getContext("2d")
    // Berechnung von Horizont
     horizon = crc2.canvas.height * golden;
     //aufruf der Zeichnungen
     drawBackground();
     drawMountains(horizon, new Vector(0, 80), new Vector(75, 200), "rgb(100, 100, 100)", "rgb(255, 255, 255)");
     drawSun(new Vector(100, 70));
     drawCloud(new Vector(500, 175), new Vector(250, 75));
     
     drawPond(new Vector(700, 600), 700, 50);




     const duckPosition = new Vector(50, 50);
    const duckDirection = new Vector(1, 0); // Beispielrichtung
    const duck = new Duck(duckPosition, "yellow", 20, "mallard", duckDirection, "swimming");
    duck.draw();

    }   
    }
     