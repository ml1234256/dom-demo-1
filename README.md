## DOM库：用对象风格封装DOM操作
### 增

```javascript
// 创建节点
dom.creat(`<div> Hi </div>`) 
  
// 将node2插入node后
dom.after(node, node2)
  
// 将node2插入node前
dom.before(node, node2)
  
// 新增子节点
dom.append(parent, child)
  
// 新增父节点
dom.wrap(`<div></div>`)
```

### 删

```javascript
// 删除节点
dom.remove(node)

// 删除后代
dom.empty(parent)
```

### 改

```javascript
// 读写属性
dom.attr(node, 'title', ?)

// 读写文本内容
dom.text(node, ?)

//读写HTML内容
dom.html(node, ?)

// 修改style
dom.style(node, {color: 'red'})

// 添加class
dom.class.add(node, 'blue')

// 删除class
dom.class.remove(node, 'blue')

// 添加事件监听
dom.on(node, 'click', fn)

// 删除事件监听
dom.off(node, 'click', fn)
```

### 查

```javascript
// 获取标签或标签们
dom.find('选择器')

//获取父元素
dom.parent(node)

// 获取子元素
dom.children(node)

// 获取兄弟姐妹元素
dom.siblings(node)

// 获取弟弟
dom.next(node)

// 获取哥哥
dom.previous(node)

// 遍历所有节点
dom.each(nodes, fn)

// 返回当前node是第几个元素
dom.index(node)
```

