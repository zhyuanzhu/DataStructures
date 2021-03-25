# 二分搜索

> 这个算法要求被搜索的数据结构`已经排序`

- 搜索过程

  - 选择数组的中间值

  - 如果选中的中间值是待搜索值，那么执行完毕

  - 如果搜索值比选中值要`小`，则返回步骤一并在选中值`左边的子数组`中寻找

  - 如果搜索值比选中值要`大`，则返回步骤一并在选中值`右侧的子数组`中寻找