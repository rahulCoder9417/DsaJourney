
var Twitter = function() {
    this.followList = new Map() // userId to followed list
    this.tweet = new Map()
    this.count = 0
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */Twitter.prototype.postTweet = function(userId, tweetId) {
    this.count++;
    if (!this.tweet.has(userId)) {
        this.tweet.set(userId, []);
    }
    this.tweet.get(userId).push([this.count, tweetId]);
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    const res = [];
    if (!this.followList.has(userId)) {
        this.followList.set(userId, new Set());
    }
    this.followList.get(userId).add(userId);

    const maxHeap = new PriorityQueue((a, b) => b[0] - a[0]);
    for (const followeeId of this.followList.get(userId)) {
        if (!this.tweet.has(followeeId)) continue;

        const tweets = this.tweet.get(followeeId);
        const idx = tweets.length - 1;
        const [time, tweetId] = tweets[idx];

        maxHeap.enqueue([time, tweetId, followeeId, idx - 1]);
    }

    while (maxHeap.size() > 0 && res.length < 10) {
        const [time, tweetId, uid, idx] = maxHeap.dequeue();
        res.push(tweetId);

        if (idx >= 0) {
            const [olderTime, olderTweetId] = this.tweet.get(uid)[idx];
            maxHeap.enqueue([olderTime, olderTweetId, uid, idx - 1]);
        }
    }

    return res;
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    this.followList.set(followerId,(this.followList.get(followerId) || new Set()).add(followeeId))
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if (!this.followList.has(followerId)) return;
    this.followList.get(followerId).delete(followeeId);
};


/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */