var accItem = document.getElementsByClassName('accordion-item');
var accHD = document.getElementsByClassName('accordion-header');
for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordion-item close';
        accItem[i].firstElementChild.lastElementChild.className = 'fa fa-plus fs-sm';
    }
    if (itemClass == 'accordion-item close') {
        this.parentNode.className = 'accordion-item open';
        this.lastElementChild.className = 'fa fa-minus fs-sm';
    }
}