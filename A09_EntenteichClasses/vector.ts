namespace A09_Ententeich {

    export class Vector{
        x: number;
        y: number;
        _radiusX: number;
        _radiusY: number;
    
        constructor (_x:number, _y:number) {
            this.set(_x,_y);
        }
    
       set(_x:number,_y:number):void{
            this.x=_x;
            this.y=_y;
        }
    
        scale(_factor:number):void{
            this.x*=_factor;
            this.y*=_factor;
        }
    
        add(_addend:Vector):void{
            this.x+=_addend.x;
            this.y+=_addend.y;
        }
        subtract(_sub:Vector):void{
            this.x-=_sub.x;
            this.y-=_sub.y;
        }
        subtract_climb(_sub:Vector):void{
            // this.x-=_sub.x;
            this.y-=_sub.y;
        }

        randomize(_minLength: number, _maxLength: number): void {
            let length: number = _minLength + Math.random() * (_maxLength - _minLength);
            let direction: number = Math.random() * 2 * Math.PI;

            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
        
    }
    }