// Обзор Задачи
// Цель: Реализовать сортировку массива чисел с помощью циклов.
// Задание: Написать функцию, принимающую массив чисел и параметр сортировки 
// (по убыванию или возрастанию) и возвращающую отсортированный массив.

// Пример Массива
// Массив чисел: [1, 40, -5, 10, 0].

// Инструкции
// Сортировка с помощью циклов: Вместо использования готового метода sort, задача должна быть выполнена 
// с использованием циклов для практики работы с ними.
// Вложенные циклы: Для сортировки потребуется использовать вложенный цикл, т.е., 
// цикл внутри другого цикла, чтобы пройтись по всем элементам массива.
// Сравнение и перемещение элементов: Каждый элемент массива необходимо сравнить с другими элементами и, 
// при необходимости, поменять местами для достижения правильного порядка сортировки.
// Двойной проход по массиву: Следует ожидать, что для сортировки потребуются несколько проходов по массиву, 
// что увеличивает сложность выполнения до О(n^2).

// Дополнительные Подсказки
// Используйте каждый элемент массива, сравнивая его с другими, для определения правильного места в отсортированной последовательности.
// Поменяйте элементы местами, если они не удовлетворяют заданному порядку сортировки (по убыванию или возрастанию).





const a = [1, 40, -5, 10, 0]

function srt(a) {
    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] > a[j]) {
                [a[i], a[j]] = [a[j], a[i]];
            }
        }
    }
    return a
}

console.log(srt(a))