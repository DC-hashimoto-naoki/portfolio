
var app = new Vue({
  el: '#app',
  data: {
    count: 0,
    showCute: false,
    showFree: false,
    sortOrder: 1,
    cats: [
      {id: 1, name: 'cat01 <br>かわいいネコ', loves: 1580, image: 'img/cat01.jpg', delv: 180, isCute: false},
      {id: 2, name: 'cat02 <br>かわいいネコ', loves: 1680, image: 'img/cat02.jpg', delv: 190, isCute: true},
      {id: 3, name: 'cat03 <br>かわいいネコ', loves: 1780, image: 'img/cat03.jpg', delv: 0, isCute: false},
      {id: 4, name: 'cat04 <br>かわいいネコ', loves: 1880, image: 'img/cat04.jpg', delv: 0, isCute: true},
      {id: 5, name: 'cat05 <br>かわいいネコ', loves: 1980, image: 'img/cat05.jpg', delv: 20, isCute: true},
      {id: 6, name: 'cat06 <br>かわいいネコ', loves: 170, image: 'img/cat06.jpg', delv: 0, isCute: false},
    ],
  },
  filters: {
    number_format: function(val) {
      return val.toLocaleString();
    }
  },
  computed: {
    filteredList: function(){
      var newList = [];
      for (let i = 0; i < this.cats.length; i++){
        let isShow = true;
        if(this.showCute && !this.cats[i].isCute){
          isShow = false;
        }
        if(this.showFree && this.cats[i].delv > 0){
          isShow = false;
        }
        if(isShow){
          newList.push(this.cats[i]);
        }
        if(this.sortOrder == 1){

        }else if(this.sortOrder == 2){
          newList.sort(function(a,b){
            return a.loves - b.loves;
          })
        }else if(this.sortOrder == 3){
          newList.sort(function(a,b){
            return b.loves - a.loves;
          })
        }
      }
      return newList;
    }
  }
});