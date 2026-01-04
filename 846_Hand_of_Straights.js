var isNStraightHand = function(hand, groupSize) {
    if (hand.length % groupSize !== 0) return false;

    const freq = new Map();
    for (let card of hand) {
        freq.set(card, (freq.get(card) || 0) + 1);
    }

    hand.sort((a, b) => a - b);

    for (let card of hand) {
        if (freq.get(card) === 0) continue;
        for (let i = 0; i < groupSize; i++) {
            let needed = card + i;

            if (!freq.has(needed) || freq.get(needed) === 0) {
                return false;
            }

            freq.set(needed, freq.get(needed) - 1);
        }
    }

    return true;
};
