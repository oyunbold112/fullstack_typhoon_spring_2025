SELECT session_30;
CREATE TABLE session_30.students(
	first_name VARCHAR(255),
	last_name VARCHAR(255),
	birth_date DATE,
	email VARCHAR(255),
	course_name VARCHAR(255),
	grade INTEGER
)

insert into STUDENTS (first_name, last_name, birth_date, email, course_name, grade)
values ('Berkh-Ochir', 'Ochirbat', '2000-01-01', 'berkhee@gmail.com', 'fullstack_course', 70);

insert into STUDENTS (first_name, last_name, birth_date, email, course_name, grade)
values('Oyunbold', 'Naranjargal', '2007-06-11', 'Oyunbold@gmail.com', 'fullstack_course', 100);

-- SELECT\ table students query
select * from students

-- WHERE clause
select * from students where first_name = 'Berkh-Ochir';

-- first_name iig songoh
select first_name from students where first_name = 'Berkh-Ochir';

--Update table students query
update students set first_name = 'Oyukaa' where first_name  = 'Oyunbold';

-- insert new student

insert into STUDENTS (first_name, last_name, birth_date, email, course_name, grade)
values(
'Balt', 'Batzaya', '1999-01-01', 'balt@gmail.com', 'fullstack course', 60);
)
-- DELETE table students query

delete from students where first_name = 'Balt';


-- ID
create table courses (
	course_id INTEGER,
	course_name VARCHAR(255)
)

select * from courses;

-- add data

insert into courses (course_id, course_name)
values
(1, 'fullstack course'),
(2, 'flutter course'),
(3, 'web front-end course'),
(4, 'ui ux course');


create table teachers (
	teacher_id SERIAL,
	teacher_name VARCHAR(255),
	teacher_course VARCHAR(255)
);


insert into teachers (teacher_name, teacher_course)
values
('Oyunbold', 'fullstack course'),
('Berkh-Ochir', 'flutter course'),
('Balt', 'web front-end course'),
('Naranjargal', 'ui ux course');

insert into teachers(teacher_name, teacher_course)
values
('khangaikhuu', 'fullstack course')