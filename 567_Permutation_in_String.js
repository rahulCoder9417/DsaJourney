var checkInclusion = function(s1, s2) {
    const map = new Map();
    for (const ch of s1) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }

    let left = 0;
    let right = s1.length - 1;

    while (right < s2.length) {
        let map1 = new Map(map);

        for (let i = left; i <= right; i++) {
            if (!map1.has(s2[i])) {
                break;
            }
            map1.set(s2[i], map1.get(s2[i]) - 1);
            if (map1.get(s2[i]) < 0) {
                break; 
            }
        }

        if ([...map1.values()].every(v => v === 0)) {
            return true;
        }

        left++;
        right++;
    }

    return false;
};
