let numerList: Array<number> = [1, 2, 3, 4];
console.debug("number list:::", numerList);

let strList: Array<string> = ["T", "y", "p"];
console.debug("String list:::", strList);

let mixedList: Array<string | number | boolean> = ["12", 12, "typscript", true];
console.debug("Mixed list:::", mixedList);

let tup: [string, number, boolean] = ["Hello", 1, false];
console.debug("tuples:::", tup);

enum Color { Red, Green = 5, Blue };
let c: Color = Color.Green;
console.debug("color index:::", c, Color[0]);


let anyType: any = "true";
console.debug("any type:::", anyType);

let anyArr: Array<any> = [1, "typescript", true, { "a": 1 }];
console.debug("any array:::", anyArr);

let obj: Object = { a: "typescript" };
console.debug("obj::::", obj["a"]);
