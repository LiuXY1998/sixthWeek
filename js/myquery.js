// div span .box
function $() {
    return new Fn(selector);

}

function Fn(selector) {
    let firstChar =selector.trim().charAt(0);
    let elems;
    if(firstChar ==="."){
        let classname =selector.substring(1);
        elems =document.getElementsByClassName(classname);
    }else{
        elems = document.getElementsByTagName(selector);
    }
    console.log(elems);
    for(let i=0;i<elems.length;i++){
        this[i]=elems[i];
    }
    this.length=elems.length;
}

Fn.prototype.each = function(callback){
    for(let i=0;i<this.length;i++){
        callback(i,this[i]);
    }
};

// obj.html('xxx')
Fn.prototype.html = function(value){
  for(let i=0;i<this.length;i++){
      this[i].innerHTML = value;
  }
  return this;
};



Fn.prototype.css =function (obj) {
    this.each(function (index,elem) {
        for(let j in obj){
            elem.style[j]=obj[j];
        }
    });
    return this;
};

Fn.prototype.addClass = function (classname) {
    // for(let i=0;i<this.length;i++){
    //     this[i].classList.add(classname);
    // }
    // return this;
    this.each(function (index,elem) {
        elem.classList.add(classname);
    });
    return this;
};

Fn.prototype.click = function () {
    this.each(function (index,elem) {
        elem.addEventListener("click",fn);
    })
};

Fn.prototype.prepend =function () {

};