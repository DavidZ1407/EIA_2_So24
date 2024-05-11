namespace A09_Ententeich {

export class Duck{
    position: Vector;
    color: string;
    size:number;
    type:string;
    direction:Vector;
    activity:string;


    constructor(position: Vector, color: string, size: number, type: string, direction: Vector, activity: string) {
        this.position = position;
        this.color = color;
        this.size = size;
        this.type = type;
        this.direction = direction;
        this.activity = activity;
    }
    draw(): void {
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

}}}