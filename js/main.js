Vue.config.devtools = true;

const app = new Vue ( 
    {
    el: "#root",
        data: {
          newToDo:"",
          toDos: [{
            title: 'Fare i compiti',
            done: true
        },
        {
            title: 'Fare la spesa',
            done: false
        }],

    },
    methods: {
        addToDo() {
            if(this.newToDo != "")
            this.toDos.push(this.newToDo);
            this.newToDo = "";
        }
    },
    removeToDo(index) {
        this.toDos.delete(index,1)
    }

    });

