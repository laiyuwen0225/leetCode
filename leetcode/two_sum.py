# two sum
def twoSum(self, nums, target):
    dic = {}

    for i in range(len(nums)):
        if nums[i] in dic:
            return dic[nums[i]],i
        
        # dic{與該次index總和等於target的下一個數字：該次index}
        else:
            dic[target - nums[i]] = i