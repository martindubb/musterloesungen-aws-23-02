const bubble = list => {
    while (true) {
        let sorted = true;
        for (let i = 0; i < list.length; i++) {
            if (list[i] > list[i + 1]) {
                let h = list[i];
                list[i] = list[i + 1];
                list[i + 1] = h;
                sorted = false;
            }
        }
        if (sorted) {
            break;
        }
    }
    return list;
};

let list = [9, 172, 8, 21, 70, 253, 16, 432, 15];
console.log(list + '  ->  ' + bubble(list));

let list2 = ['Melone', 'Banane', 'Zitrone', 'Apfel', 'Kiwi', 'Erdbeere'];
console.log(list2 + '  ->  ' + bubble(list2));
