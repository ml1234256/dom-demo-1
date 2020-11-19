// 添加子元素
let text1 = dom.find('.text1')[0];
dom.append(text1, dom.creat(`<ul class="list"><li class="l2"> Hi </li></ul>`));
console.log(text1);

let l2 = dom.find('.text1 .l2')[0];
console.log(l2);
dom.before(l2, dom.creat(`<li class="l2"> 1 </li>`));
dom.after(l2, dom.creat(`<li class="l3"> 3 </li>`));
dom.wrap(dom.find('.list')[0], dom.creat(`<div class="parent"></div>`));

// 删
let delNode = dom.remove(l2);
console.log(l2);
let delChild = dom.empty(dom.find('.text2')[0]);
console.log(delChild);

// 改
let text3 = dom.find('.text3')[0];
dom.attr(text3, 'style', 'color:red');
console.log(dom.attr(text3, 'style'))
dom.text(text3, 'HaHa');
console.log(dom.text(text3));
