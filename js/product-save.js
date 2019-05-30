var xm = new Vue({
    el: "#app",
    data: {
        isshade: false,
        list: [
            {  },
            {  },
            {  },
            {  },
            {  }],
        isAdd: [],
    },
    methods: {
        select(index) {
            let indexItem = this.isAdd.indexOf(index);
            if (indexItem == -1) {
                this.isAdd.push(index);
            } else {
                this.isAdd.splice(indexItem, 1);
            }
        },
      
    },

});