// feetToMile Problem Solved
function feetToMile(feet) {
    var mile = feet / 5280;
    return mile;
}

var feetCalculate = feetToMile(20000);
console.log("Calculated Mile is:", feetCalculate);




// woodCalculator Problem Solved
function woodCalculator(chair, table, bed) {
    var chairWood = chair * 1;
    var tableWood = table * 3;
    var bedWood = bed * 5;
    var totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}

var woodCalculate = woodCalculator(5, 10, 15);
console.log("Total Wood Required:", woodCalculate);




// brickCalculator Problem Solved
function brickCalculator(floors) {
    var bottomFloorSection = 0;
    var middleFloorSection = 0;
    var topFloorSection = 0;

    for (var i = 1; i <= floors; i++) {
        var element = i;
        if (element <= 10) {
            bottomFloorSection = 15000 + bottomFloorSection;
        } else if (element > 10 && element <= 20) {
            middleFloorSection = 12000 + middleFloorSection;
        } else {
            topFloorSection = 10000 + topFloorSection;
        }
    }
    var totalBrick = bottomFloorSection + middleFloorSection + topFloorSection;
    return totalBrick;
}

var result = brickCalculator(22);
console.log("Total Brick Required:", result);




// tinyFriend Problem Solved
function tinyFriend(friendsName) {
    var tinyName = friendsName[0];
    for (var i = 0; i < friendsName.length; i++) {
        var currentName = friendsName[i];
        if (currentName.length < tinyName.length) {
            tinyName = currentName;
        }
    }
    return tinyName;
}

var result = tinyFriend(["Maruf", "Shahin", "Mim", "Masudur Rahman"]);
console.log("Tiny Friend Name is:", result);