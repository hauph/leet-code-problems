class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        def patternFactory(string: str) -> str:
            obj = {}
            response = ''
            i = 0

            while i < len(string):
                char = string[i]

                try:
                    data = obj[char]
                    response += data
                except:
                    obj[char] = str(i) + '-'
                    response += obj[char]

                i += 1

            return response

        patternS = patternFactory(s)
        patternT = patternFactory(t)

        return patternS == patternT
