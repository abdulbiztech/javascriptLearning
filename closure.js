function parentFunction(){
    let x=12;
    return function childFunction(){
        console.log(x);
    }
}
parentFunction();
const result = parentFunction();
result();