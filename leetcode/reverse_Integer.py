def reverse(self, x: int) -> int:
    i = str(x)
    if x < 0 :
        result = int(i[::-1][:-1])* -1
    else:
        result = int(i[::-1])
        
    if -2**31 <= result <=2**31 - 1:
        return result
    return 0