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

module.exports = bubble;