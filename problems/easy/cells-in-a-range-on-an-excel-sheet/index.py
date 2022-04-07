class Solution(object):
    def cellsInRange(self, s):
        """
        :type s: str
        :rtype: List[str]
        """
        col1 = s[0]
        charCode1 = ord(col1)
        row1 = int(s[1])
        col2 = s[3]
        charCode2 = ord(col2)
        row2 = int(s[4])
        arr = []
        i = row1

        while (charCode1 <= charCode2):
            char = chr(charCode1)

            while (i <= row2):
                cell = char + str(i)

                if cell not in arr:
                    arr.append(cell)

                i = i + 1

            i = row1
            charCode1 = charCode1 + 1

        return arr
