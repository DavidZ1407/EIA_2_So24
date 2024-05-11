"use strict";
var A09_Ententeich;
(function (A09_Ententeich) {
    class Duck {
        position;
        color;
        size;
        type;
        direction;
        activity;
        constructor(position, color, size, type, direction, activity) {
            this.position = position;
            this.color = color;
            this.size = size;
            this.type = type;
            this.direction = direction;
            this.activity = activity;
        }
        draw() {
            console.log(`Drawing a ${this.size}px ${this.color} ${this.type} duck at (${this.position.x}, ${this.position.y})`);
            // constructor(){
            //     console.log("Duck")
            // }
            // move ():void{
            //     console.log("Duck move")
            // }
            // draw():void{
            //     console.log("Duck draw")
            // }
        }
    }
    A09_Ententeich.Duck = Duck;
})(A09_Ententeich || (A09_Ententeich = {}));
//# sourceMappingURL=duck.js.map