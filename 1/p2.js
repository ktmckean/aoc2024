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

    // console.log(list1);
    // console.log(list2);

    counts = list2.reduce((countsMap, e) => {
        countsMap.set(e, (countsMap.get(e) || 0)+ 1);
        return countsMap;
    }, new Map())
    // console.log(counts);

    similarityScore = list1.map((e) => e * (counts.get(e) || 0));

    sumScores = similarityScore.reduce((sum, e) => {
        return sum+e;
    }, 0);
    console.log(sumScores);

});