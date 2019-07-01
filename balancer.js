javascript:
var warehouseCapacity = [];
var allWoodTotals = [];
var allClayTotals = [];
var allIronTotals = [];
var availableMerchants = [];
var totalMerchants = [];
allWoodObjects = $(".res.wood");
allClayObjects = $(".res.stone");
allIronObjects = $(".res.iron");

//grabbing wood amounts
for (var i = 0; i < allWoodObjects.length; i++) {
    n=allWoodObjects[i].textContent;
    n = n.replace(/\./g, '').replace(',', '');
    allWoodTotals.push(n);
};
console.table(allWoodTotals);

//grabbing clay amounts
for (var i = 0; i < allClayObjects.length; i++) {
    n=allClayObjects[i].textContent;
    n = n.replace(/\./g, '').replace(',', '');
    allClayTotals.push(n);
};
console.table(allClayTotals);

//grabbing iron amounts
for (var i = 0; i < allIronObjects.length; i++) {
    n=allIronObjects[i].textContent;
    n = n.replace(/\./g, '').replace(',', '');
    allIronTotals.push(n);
};
console.table(allIronTotals);

//grabbing warehouse capacity
for (var i = 0; i < allIronObjects.length; i++) {
    warehouseCapacity.push($(".res.iron")[i].parentElement.nextElementSibling.innerHTML);
};
console.table(warehouseCapacity);


//grabbing available merchants and total merchants
for (var i = 0; i < allIronObjects.length; i++) {
    availableMerchants.push($(".res.iron")[i].parentElement.nextElementSibling.nextElementSibling.innerText.match(/(\d*)\/(\d*)/)[1]);
    totalMerchants.push($(".res.iron")[i].parentElement.nextElementSibling.nextElementSibling.innerText.match(/(\d*)\/(\d*)/)[2]);
};

console.table(availableMerchants);
console.table(totalMerchants);

var totalWood=0;
var totalClay=0;
var totalIron=0;
for(var i in allWoodTotals) { totalWood += parseInt(allWoodTotals[i]); }
for(var i in allClayTotals) { totalClay += parseInt(allClayTotals[i]); }
for(var i in allIronTotals) { totalIron += parseInt(allIronTotals[i]); }

console.log("Total wood: "+totalWood + "\nTotal clay: " + totalClay + "\nTotal iron: "+totalIron+"\nWood per village: "+totalWood/warehouseCapacity.length + "\nClay per village: " + totalClay/warehouseCapacity.length + "\nIron per village: "+totalIron/warehouseCapacity.length);
