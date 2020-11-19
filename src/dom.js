window.dom = {
    // 增
    creat(string){
        const container = document.createElement('template');
        container.innerHTML = string.trim();
        return container.content.firstChild;
    },
    append(parent, node){
        parent.appendChild(node);
    },
    after(node, node2){
        node.parentNode.insertBefore(node2, node.nextSibling);
    },
    before(node, node2){
        node.parentNode.insertBefore(node2, node);
    },
    wrap(node, parent){
        dom.before(node, parent);
        dom.append(parent, node);
    },

    //删
    remove(node){
        node.parentNode.removeChild(node);
        return node;
    },
    empty(node){
        const array = [];
        for (; node.firstChild;) {
            array.push(dom.remove(node.firstChild));
        } 
        // let x = node.firstChild;
        // while(x){
        //     array.push(dom.remove(node.firstChild));
        //     x = node.firstChild;
        // }
        return array;
    },
    //改
    attr(node, name, value){ // 重载
        if (arguments.length === 3) {
            node.setAttribute(name, value);
        }else if (arguments.length === 2) {
            return node.getAttribute(name);
        }
    },
    text(node, string){ // 适配
        if (arguments.length == 2) {
            if ('innerText' in node) {
                node.innerText = string;
            } else {
                node.textContent = string;
            }
        } else if (arguments.length == 1) {
            if ('innerText' in node) {
                return node.innerText;
            } else {
                return node.textContent;
            }
        }
    },
    html(node, string){
        if (arguments.length === 2) {
            node.innerHTML = string;
        } else if (arguments.length === 1) {
            return node.innerHTML;
        }
    },
    style(node, name, value){
        if (arguments.length === 3) {
            // dom.style(div, 'color', 'red')
            node.style[name] = value;
        } else if (arguments.length === 2) {
            if(typeof name === 'string') {
                // dom.style(node, 'color')
                return node.style[name];
            } else if (name instanceof Object) {
                // dom.style(div, '{color:red}')
                for (let key in name) {
                    node.style[key] = name[key]; 
                }
            }
        }
    },
    //查
    find(selector, scope){
        return (scope || document).querySelectorAll(selector);
    },
}