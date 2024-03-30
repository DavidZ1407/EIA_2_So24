namespace RandomPoem{
/*
Aufgabe: <L01_Zufallsgedicht>
// Name: <David Zahn>
// Matrikel: <275010>
// Datum: <30.03.2024>
// Quellen: <"">
*/
debugger
let subject: string[] = ["Markus","Lisa","Anna","Daniel","Domenik"]
let predicate: string[] = ["liebt","hasst","kocht","leckt","bekämpft"]
let object: string[] = ["Eis","Mathe","Kuchen","Vase","Tiere"]

// console.log(subject)
// console.log(predicate)
// console.log(object)

for (let  i:number = subject.length; i>= 1; i--) {
// console.log(i)

console.log(getVerse(subject,predicate,object));
}


function getVerse (_sub:string[],_pre:string[],_obj:string[]): string {
    let vers: string ="";
    let choiceSub: number = Math.floor(Math.random()*_sub.length);
    let choicePre: number = Math.floor(Math.random()*_pre.length);
    let choiceObj: number = Math.floor(Math.random()*_obj.length);

    vers=_sub[choiceSub] + " " + _pre[choicePre] + " " +_obj[choiceObj] 
    _sub.splice(choiceSub,1);
    _pre.splice(choicePre,1);
    _obj.splice(choiceObj,1);
    
    return vers
}
}
