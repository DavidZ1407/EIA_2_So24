namespace A09_Ententeich {

   //     /*
    //     Aufgabe: <L09_Ententeich>
    //     // Name: <David Zahn>
    //     // Matrikel: <275010>
    //     // Datum: <10.05.2024>
    //     // Quellen: <"ChatGPT">
    //     */

 

 window.addEventListener('load', handleload);
 


 export let crc2: CanvasRenderingContext2D;
 export let golden: number = 0.62;
 export let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
 export let horizon1: Vector
 export let horizon: number


 function handleload(_event: Event) {
     let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
     if (!canvas)
         return;
     crc2 = <CanvasRenderingContext2D>canvas!.getContext("2d")

     horizon = crc2.canvas.height * golden;
     
     drawBackground();
     drawMountains(horizon, new Vector(0, 80), new Vector(75, 200), "rgb(100, 100, 100)", "rgb(255, 255, 255)");
     drawSun(new Vector(100, 70));
     drawCloud(new Vector(500, 175), new Vector(250, 75));
     
     drawPond(new Vector(700, 600), 700, 50);


    }   
    }
     