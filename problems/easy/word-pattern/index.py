class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        obj1 = {}
        str1 = ''
        i = 0

        while i < len(pattern):
            char = pattern[i]

            try:
                str1 += obj1[char]
            except:
                obj1[char] = str(i) + '_'
                str1 += obj1[char]

            i += 1

        arrFromS = s.split(' ')
        obj2 = {}
        str2 = ''
        i = 0

        while i < len(arrFromS):
            char = arrFromS[i]

            try:
                str2 += obj2[char]
            except:
                obj2[char] = str(i) + '_'
                str2 += obj2[char]

            i += 1

        return str1 == str2
