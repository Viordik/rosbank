# test-rostbank

Чтобы собрать и запустить проект, сначала нужно установить зависимости npm i, после запустить npm start.


Задание 2:
1. Создаем переменную с помощью команды declare;
2. Создаем общее табличное выражение с именем 'srec';
3. Выбираем столбцы id, parent_object_id, name, code из таблицы subdivisions;
4. Где id = значению переменной, которую задавали в начале;
5. С помощью команды union all сохроняем повторяющиеся строки (позволяет получить результат из двух выборок с повторяющимеся строками, если такие имеются);
6. Выбираем столбцы id, parent_object_id, name, code из таблицы subdivisions;
После выполнения двух запросов на выборку данных и команды Union All получим таблицу с повторяющимися данными, если такие есть;
7. (Сделает объедение полученной таблицы и таблицы subdivisions по условию 'id подразделения из srec равен id из таблицы subdivisions');
8. Выбираем все поля из таблицы сформированной на основе общего табличного выражения.
