Vue.config.devtools = true;

const app = new Vue ( 
    {
    el: "#root",
        data: {
          newToDo:"",
          trueOrFalse: () => Math.random() >= 0.5,
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

    trueFalse() {
        for (const key in this.toDos) {
            if (this.toDos[key].done === true) {
                return  document.getElementById("list").style.color = "green";
                     
                 }
                 else {
                  return  document.getElementById("list").style.color = "red";
                 }
        }
           
    }
}
    });

