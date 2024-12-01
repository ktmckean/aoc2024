const fs = require('fs');
const readline = require('readline');

fs.readFile('./input.txt', (err, data) => {
    if (err) {
        console.error(err);
    }

    const lines = data.toString().split('\n')
    list1 = [];
    list2 = [];
    
    for(let i = 0; i < lines.length; i++){
        let line = lines[i];
        arr = line.split(" ");
        list1.push(Number(arr[0]));
        list2.push(Number(arr[3]));
    }

    list1.sort();
    list2.sort();

    console.log(list1);
    console.log(list2);


    const diffs = list1.map((e, i) => Math.abs(e - list2[i]));
    console.log(diffs);

    const sumDiffs = diffs.reduce((sum, a) => sum+a, 0);
    console.log(sumDiffs);


});