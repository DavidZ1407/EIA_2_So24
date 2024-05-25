namespace A09_Ententeich {

   //     /*
    //     Aufgabe: <L09_Ententeich>
    //     // Name: <David Zahn>
    //     // Matrikel: <275010>
    //     // Datum: <25.05.2024>
    //     // Quellen: <"ChatGPT">
    //     */


    window.addEventListener('load', handleload);
    let clouds: Cloud[] = [];
    let insectArray: insect[] = [];
    
    export let crc2: CanvasRenderingContext2D;
    export let golden: number = 0.62;
    export let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    export let horizon: number;

    function handleload(_event: Event) {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas!.getContext("2d");
        horizon = crc2.canvas.height * golden;

        createClouds(); // Mehr Wolken erstellen
        drawBackground();  // Hintergrund zeichnen
        setInterval(animateClouds, 40);  // alle 40 Millisekunden neue Wolken zeichnen 
        
        createInsects();
        window.setInterval(animateInsect, 3);
        
    }
    // Drei Wolken zeichnen
    function createClouds(): void {
        for (let i = 0; i < 3; i++) { 
            let x = Math.random() * canvas.width;
            let y = Math.random() * (100); 
            let cloud = new Cloud(x, y);
            clouds.push(cloud);
        }
    }
        //Bewegung von Wolken zeichnen
     function animateClouds(): void {
        crc2.clearRect(0, 0, canvas.width, canvas.height); // Canvas löschen
        drawBackground(); // Hintergrund nur einmal zeichnen

        for (let cloud of clouds) {
            cloud.move(); // Wolken bewegen
            cloud.draw(); // Wolken zeichnen
        }
        drawFlowers(); // Blumen zeichnen
    }
    function drawFlowers(): void {
        // Erstelle Blumen und rufe die drawFlower-Methode auf, um sie zu zeichnen
        let tulip = new flower(600, 500, "red", new Vector(100, 100), "tulip", new Vector(20, 20));
        flower.drawFlower(tulip);

        let rose = new flower(100, 500, "blue", new Vector(200, 200), "rose", new Vector(30, 30));
        flower.drawFlower(rose);
        
    }


    function createInsects(): void {
        for (let i: number = 0; i < 3; i++) {
            let insects: insect = new insect(0.5, new Vector(600, 400));
            insectArray.push(insects);
        }
    }

function animateInsect(): void {
    for (let insect of insectArray) {
        insect.move(1 / 50);
        insect.draw();
    }
}

}