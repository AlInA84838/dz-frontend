
const taskManager = {

    task: [],
    lastID: 0,

    addTask: function(title, priority) {
        const newTask = {
            id: ++this.lastID,
            title: title,
            priority: priority
        };
        this.task.push(newTask);
        console.log(title, priority);
        return newTask
    },

    deleteTask: function(id) {
        const index = this.task.findIndex(task => task.id === id);
        if (index != -1) {
            const deletedTask = this.task.splice(index, 1);
            console.log(`Задача ${deletedTask[0].title} была удалена`);
        } else{
            console.log(`Задача с индексом ${id} не найдена`)
            return null;
        }
    }
}

taskManager.addTask('jhjhdjs', 3);
taskManager.addTask('eteres', 4);
taskManager.addTask('eaea', 1);
taskManager.deleteTask(2);





