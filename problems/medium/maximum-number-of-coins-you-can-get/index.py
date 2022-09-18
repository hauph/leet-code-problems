class Solution:
    def maxCoins(self, piles):
        piles = sorted(piles)
        pilesLength = len(piles)
        startPoint = pilesLength / 3
        newPiles = piles[int(startPoint):pilesLength]
        result = 0

        for i in range(len(newPiles)):
            if (i % 2 == 0):
                result += newPiles[i]

        return result
