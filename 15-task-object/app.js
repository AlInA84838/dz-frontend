const taskManager = {
    tasks: [], // исправлено на tasks
    lastID: 0,


    addTask: function(title, priority) {
        const newTask = {
            id: ++this.lastID,
            title: title,
            priority: priority
        };
        this.tasks.push(newTask);
        console.log(`Добавлена задача: ${title}  ${priority}`);
        return newTask;
    },

    
    deleteTask: function(id) {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            const deletedTask = this.tasks.splice(index, 1);
            console.log(`Задача "${deletedTask[0].title}" была удалена`);
        } else {
            console.log(`Задача с индексом ${id} не найдена`);
            return null;
        }
    },

    
    updateTask: function(id, newTitle, newPriority) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            if (newTitle !== undefined) task.title = newTitle;
            if (newPriority !== undefined) task.priority = newPriority;
            console.log(`Задача с id ${id} обновлена: ${task.title}, ${task.priority}`);
        } else {
            console.log(`Задача с id ${id} не найдена`);
        }
    },

    
    sortTasks: function(by = 'id', ascending = true) {
        this.tasks.sort((a, b) => {
            const comparison = a[by] - b[by];
            return ascending ? comparison : -comparison;
        });
        console.log(`Задачи отсортированы по ${by} в порядке ${ascending ? 'возрастания' : 'убывания'}`);
    },

    
    showTasks: function() {
        console.log("Текущие задачи:", this.tasks);
    }
};

// Пример использования
taskManager.addTask("Сделать уроки", 2);
taskManager.addTask("Помыть посуду", 1);
taskManager.addTask("Прочитать книгу", 3);

taskManager.updateTask(2, "Помыть посуду и полы", 2);
taskManager.deleteTask(1);

taskManager.sortTasks('priority', false);
taskManager.showTasks();