// 添加子元素
let test1 = dom.find('.test1')[0];
dom.append(test1, dom.creat(`<ul class="list"><li class="l2"> Hi </li></ul>`));
console.log(test1);

let l2 = dom.find('.test1 .l2')[0];
console.log(l2);
dom.before(l2, dom.creat(`<li class="l2"> 1 </li>`));
dom.after(l2, dom.creat(`<li class="l3"> 3 </li>`));
dom.wrap(dom.find('.list')[0], dom.creat(`<div class="parent"></div>`));

// 删
let delNode = dom.remove(l2);
console.log(l2);
let delChild = dom.empty(dom.find('.test2')[0]);
console.log(delChild);

// 改
let test3 = dom.find('.test3')[0];
dom.attr(test3, 'style', 'color:red');
console.log(dom.attr(test3, 'style'))
dom.text(test3, 'HaHa');
console.log(dom.text(test3));

// 遍历
let test4 = dom.find('.test4');
dom.each(test4, (n)=> console.log(n));