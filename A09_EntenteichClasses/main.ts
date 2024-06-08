namespace A09_Ententeich {
    //     /*
    //     Aufgabe: <L09_Ententeich>
    //     // Name: <David Zahn>
    //     // Matrikel: <275010>
    //     // Datum: <25.05.2024>
    //     // Quellen: <"ChatGPT">
    //     */



    window.addEventListener('load', handleLoad);

    let movables: Movable[] = [];
    let clouds: Cloud[] = [];
    let insectArray: Insect[] = [];
    let ducks: Duck[] = [];

    export let crc2: CanvasRenderingContext2D;
    export let golden: number = 0.62;
    export let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    export let horizon: number;

    function handleLoad(_event: Event) {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas) return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d")!;
        horizon = crc2.canvas.height * golden;

        createMovables();
        drawBackground();
        setInterval(animate, 40); 
    }

    function createMovables(): void {
        // Enten erstellen und zum Array hinzufügen
        let brownDuck1: Duck = new Duck(200, 520, "#8B4513");
        ducks.push(brownDuck1);
        movables.push(brownDuck1);

        let brownDuck2: Duck = new Duck(-50, 450, "#A0522D");
        ducks.push(brownDuck2);
        movables.push(brownDuck2);

        let brownDuck3: Duck = new Duck(700, 400, "#8B4513");
        ducks.push(brownDuck3);
        movables.push(brownDuck3);

        // Wolken erstellen und zum Array hinzufügen
        for (let i = 0; i < 7; i++) {
            let cloud: Cloud = new Cloud(Math.random() * 500, Math.random() * 200);
            clouds.push(cloud);
            movables.push(cloud);
        }

        // Insekten (Bienen) erstellen und zum Array hinzufügen
        for (let i = 0; i < 3; i++) {
            let insect: Insect = new Insect(0.5, new Vector(Math.random() * canvas.width, Math.random() * canvas.height));
            insectArray.push(insect);
            movables.push(insect);
        }
    }


    function animate(): void {
        console.log("Animating...");
        crc2.clearRect(0, 0, canvas.width, canvas.height);
        drawBackground();
    
        for (let movable of movables) {
            console.log(`Moving ${movable.type} to position (${movable.position.x}, ${movable.position.y})`);
            movable.move(1 / 50); 
            movable.draw();
        }
    }}

    