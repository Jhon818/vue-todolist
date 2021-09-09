Vue.config.devtools = true;

const app = new Vue ( 
    {
    el: "#root",
        data: {
          newToDo:"",
          toDos: [{
            title: 'Fare i compiti',
            done: true,
            drawer: [
                "Cose da fare 1",
                "Cose da fare 2",
                "Cose da fare 3"
            ]
        },
        {
            title: 'Fare la spesa',
            done: false,
            drawer: [
                "Cose da fare 1",
                "Cose da fare 2",
                "Cose da fare 3"
            ]
        }],

    },
    methods: {
        addToDo() {
            if(this.newToDo != "")
            this.toDos.push({title:this.newToDo, done: false});
            this.newToDo = "";
        },
   
    removeToDo(index) {
        this.toDos.splice(index,1)
    },
        trueFalse(index) {
            if (this.toDos[index].done === true) {
              this.toDos[index].done = false;
            }
            else{
              this.toDos[index].done = true;
            }
          },
        //  showUnder(index) {
        //      if(this.toDos[index].checked === true) {
        //         return true
               
        //      }
        //  }
}
    });

