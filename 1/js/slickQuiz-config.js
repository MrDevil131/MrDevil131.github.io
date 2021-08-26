// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Люсина викторина",
        "main":    "<p>Проверь свои знания бла бла бла</p>",
        "results": "<h5>Наши соцсети:</h5><p>Тут ссылки на соцсети, которые ты мне не скинула</p>",
        "level1":  "Культуровед",
        "level2":  "Эрудит",
        "level3":  "Коренной пермяк",
        "level4":  "Студент троечник",
        "level5":  "Школьник второгодник" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "По чьему приказу была построена Пермь?",
            "a": [
                {"option": "Петра I", "correct": false},
                {"option": "Екатерины II", "correct": true},
                {"option": "Елизаветы I ", "correct": false},
                {"option": "Александрв II ", "correct": false} // no comma here
            ],
            "correct": "<p><span>Да!</span> Отличное начало!</p>",
            "incorrect": "<p><span>Нет.</span> По приказу Петра I был основан Санкт-Петербург, Елизавета I основала кучу колоний - благодаря ей появилась Америка, а Александр II отменил крепостное право. <em>Наш город появился благодаря Екатерине II</em>.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Как раньше называлась Пермь?",
            "a": [
                {"option": "Грозный", "correct": false},
                {"option": "Крохалевка", "correct": false},
                {"option": "Молотов", "correct": true},
                {"option": "Углеуральский", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Да!</span> Вы абсолютно правы.</p>",
            "incorrect": "<p><span>Почти, но нет!</span> Грозный это столица Чечни, Крохалевка - район Перми, а Углеуральский это ПГТ в Пермском крае. <em>Пермь раньше называлась Молотовым</em>.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Окей, теперь сложнее! Что появилось раньше: Пермь или Заостровка?",
            "a": [
                {"option": "Конечно, Пермь! Что за глупый вопрос!", "correct": false},
                {"option": "Нет, Заостровка появилась первой!", "correct": true} // no comma here
            ],
            "correct": "<p><span>В точку!</span> Деревня Заостровка впервые упоминается в летописи <em>1647</em> года! А вот Пермь основана в <em>1723</em> году.</p>",
            "incorrect": "<p><span>Нет!</span> Деревня Заостровка впервые упоминается в летописи <em>1647</em> года! Пермь же появилась только в <em>1723</em> году.</p>" // no comma here
        },
        { // Question 4
            "q": "Вопрос на засыпку! Изначально Заостровка была деревнями:",
            "a": [
                {"option": "Усть-Мулянка, Демидовские Печи, Скандаловка",    "correct": true},
                {"option": "Усть-Кут, Спас Деменск, Сосногорск",     "correct": false},
                {"option": "Усть-Катав, Спасск, Речные земли",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Знаете или угадали?</span> Все именно так!</p>",
            "incorrect": "<p><span>Неправда!</span> Уста-Кут находится в Иркутской области, Спас Деменск - в Калужской, Сосногорск в Коми, Усть-Катав в Челябинской области, Спасск - в Пензенской, <em>а Речные земли вообще в Вестеросе (да-да, это из «Игры Престолов»)</em>.</p>" // no comma here
        } // no comma here
    ]
};
