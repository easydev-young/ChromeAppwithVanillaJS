const a = 5;
const b = 2;
let myName = "Yap";

console.log("hahahhah", 1234567890);
console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "YapMa";

console.log("your new name is " + myName);

const amIFat = null;
console.log(amIFat);


const mon = "mon";
const tue = "tue";
const web = "web";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeek = [mon, tue, web, thu, fri, sat];
const daysOfWeek2 = ["mon", "tue", "web", "thu", "fri", "sat", "sun"];
const nonsense = [1, 2, "hello", false, null, true, undefined, "yap"];

console.log(daysOfWeek, nonsense);
daysOfWeek.push("sun");
console.log(daysOfWeek, nonsense);
console.log(daysOfWeek2, nonsense);
console.log(daysOfWeek[5]);
console.log(daysOfWeek[55]);


const player = {
    name: "yap",
    points: 10,
    fat: true,
}

console.log(player);
console.log(player.name);
console.log(player["name"]);
player.fat = false;
console.log(player);
player.lastname = "ma";
console.log(player);
player.points = 15;
console.log(player);
player.points = player.points + 15;
console.log(player);