namespace EventInspector {
    /*
    Aufgabe: <L02_EventInspector>
    // Name: <David Zahn>
    // Matrikel: <275010>
    // Datum: <13.04.2024>
    // Quellen: <"">
    */


    //Window wird erst geladen, dann hndload ausgeführt, eine variable span erstellen
    window.addEventListener("load", hndload);


    //Funktion wird geladen wenn window geladen hat, Eventlistner für "keyup", "click", "mousemove", ? machts nichts wenn das Element nicht gibt
    function hndload(): void {
        document.addEventListener("mousemove", setinfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        document.getElementById("div0")?.addEventListener("keyup", logInfo);
        document.getElementById("div1")?.addEventListener("keyup", logInfo);
        document.getElementById("div0")?.addEventListener("click", logInfo);
        document.getElementById("div1")?.addEventListener("click", logInfo);
        document.getElementById("bt")?.addEventListener("click", button);

    }
    //Funktion Position der info Box auf der Maus position von Span
    function setinfoBox(_event: MouseEvent): void {
        let x: number = _event.clientX;
        let y: number = _event.clientY;
        let span: HTMLElement = <HTMLElement>document.getElementById("span");
        span.style.top = y + "px";
        span.style.left = x + "px";
        span.innerHTML = "Mouseposition " + x + " " + y + _event.target;

    }
    //Funktion ausgabe der Konsole
    function logInfo(_event: Event): void {
        console.log("Type: " + _event.type);
        console.log("Target: " + _event.target);
        console.log("CurrentTarget: " + _event.currentTarget);
        console.log("Event: " + _event);
    }
   //Eine Konstante die ein Ereignis beim anklicken von Button, durch den DOM-Baum aufsteigen kann und dabei das was im detail steht anzeigt
    const customevent =new CustomEvent("button", {bubbles:true, detail: {name:"bt wurde gedrückt"}})

    //Funktion für listner für die Buttons 
    function button(){
        document.addEventListener ("button", customEvent);
        document.dispatchEvent(customevent);
    }
    //Funktion ausgabe von bubbles, detail in der Konsole
    function customEvent(){
        console.log(customevent.bubbles)
        console.log(customevent.detail)
    }


}




