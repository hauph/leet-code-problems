class Solution:
    def capitalizeTitle(self, title: str) -> str:
        arrStr = title.split(' ')
        res = ''

        for word in arrStr:
            wLength = len(word)

            if wLength == 1 or wLength == 2:
                res += word.lower() + ' '
            else:
                res += word[0].upper() + word[1:wLength].lower() + ' '

        return res.strip()
