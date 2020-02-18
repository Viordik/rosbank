-- 1.Выбрать всех сотрудников подразделений с кодами подразделений: 24988, 8524;
USE [Example]
GO

SELECT *
  FROM [dbo].[collaborators]
  where [position_parent_id] in (24988, 8524)
GO
-- END first

-- 2.Выбрать всех сотрудников, у которых с даты приема прошло 180 дней;
USE [Example]
GO

SELECT *
  FROM [dbo].[collaborators]
  where [hire_date] >= '2001-07-01';
GO
-- END second

-- 3.Подсчитать всех сотрудников подразделений с кодом 24988, 8524. В выводе должно быть количество сотрудников каждого из подразделений и код подразделения;
USE [Example]
GO

SELECT [id],
	   [fullname],
	   [position_parent_id],
	   [position_parent_name]
  FROM [dbo].[collaborators]
  where [position_parent_id] in (24988, 8524)
GO
-- END third
