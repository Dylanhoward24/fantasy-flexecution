-- code used to insert data into the tables created at the start
-- see database_tables.sql for more information on the tables
--
-- team information
INSERT INTO "teams"
	("team_name")
VALUES
	('Arizona Cardinals'),
	('Atlanta Falcons'),
	('Baltimore Ravens'),
	('Buffalo Bills'),
	('Carolina Panthers'),
	('Chicago Bears'),
	('Cincinnati Bengals'),
	('Cleveland Browns'),
	('Dallas Cowboys'),
	('Denver Broncos'),
	('Detroit Lions'),
	('Green Bay Packers'),
	('Houston Texans'),
	('Indianapolis Colts'),
	('Jacksonville Jaguars'),
	('Kansas City Chiefs'),
	('Las Vegas Raiders'),
	('Los Angeles Chargers'),
	('Los Angeles Rams'),
	('Miami Dolphins'),
	('Minnesota Vikings'),
	('New England Patriots'),
	('New Orleans Saints'),
	('New York Giants'),
	('New York Jets'),
	('Philadelphia Eagles'),
	('Pittsburgh Steelers'),
	('San Francisco 49ers'),
	('Seattle Seahawks'),
	('Tampa Bay Buccaneers'),
	('Tennessee Titans'),
	('Washington Football Team');
--
-- position information
INSERT INTO "positions"
    ("position")
VALUES
    ('QB'),
    ('RB'),
    ('WR'),
    ('TE');
--
-- tier information
INSERT INTO "tiers"
	("order_on_list", "tier_name")
VALUES
	(1, 'Elite Superstars'),
	(2, 'Elite Upside'),
	(3, 'Weekly Starter'),
	(4, 'High Upside, Low Floor'),
	(5, 'High Floor, Low Upside'),
	(6, 'Too Soon To Tell'),
	(7, 'Holds');

-- testing users
INSERT INTO "users"
	("username", "password", "auth_level", "first_name", "last_name", "email_address", "about")
VALUES
	('dylanhoward', '$2a$10$cHZEiTuQrcB.SgSosANESO7wPzjOUNVjz3X1y18.x/0ZOK1Zx8EI.', 'host', 'Dylan', 'Howard', 'dylan@email.com', 'I am the creator of this app! Muahaha!'),
	('host', '$2a$10$cHZEiTuQrcB.SgSosANESO7wPzjOUNVjz3X1y18.x/0ZOK1Zx8EI.', 'host', 'Kyle', 'Settle', 'kyle@email.com', 'I am the host of Fantasy Flexecution'),
	('listener', '$2a$10$cHZEiTuQrcB.SgSosANESO7wPzjOUNVjz3X1y18.x/0ZOK1Zx8EI.', 'user', 'Ben', 'Smith', 'ben@email.com', 'I am a Packers fan!');

-- players
INSERT INTO "players"
	("first_name", "last_name", "team_id", "position_id", "time_created", "created_by_user_id")
VALUES
	('Justin', 'Fields', 6, 1, null, 1),
	('David', 'Montgomery', 6, 2, null, 1),
	('Darnell', 'Mooney', 6, 3, null, 1),
	('Jared', 'Goff', 11, 1, null, 1),
	('D Andre', 'Swift', 11, 2, null, 1),
	('Amon-Ra', 'St. Brown', 11, 3, null, 1),
	('Aaron', 'Rodgers', 12, 1, null, 1),
	('Aaron', 'Jones', 12, 2, null, 1),
	('Randall', 'Cobb', 12, 3, null, 1),
	('Kirk', 'Cousins', 21, 1, null, 1),
	('Dalvin', 'Cook', 21, 2, null, 1),
	('Justin', 'Jefferson', 21, 3, null, 1);

-- rankings
INSERT INTO "playersRankings"
	("user_id", "player_id", "tier_id", "rank")
VALUES
	(1, 1, 6, 1),
	(1, 2, 3, 2),
	(1, 3, 5, 1),
	(1, 4, 7, 1),
	(1, 5, 1, 1),
	(1, 6, 3, 1),
	(1, 7, 1, 1),
	(1, 8, 1, 2),
	(1, 9, 3, 2),
	(1, 10, 3, 1),
	(1, 11, 3, 1),
	(1, 12, 1, 1),
	(2, 1, 6, 1),
	(2, 2, 3, 2),
	(2, 3, 5, 1),
	(2, 4, 7, 1),
	(2, 5, 1, 1),
	(2, 6, 3, 1),
	(2, 7, 1, 1),
	(2, 8, 1, 2),
	(2, 9, 3, 2),
	(2, 10, 3, 1),
	(2, 11, 3, 1),
	(2, 12, 1, 1);

-- listener requests
INSERT INTO "listenerRequests"
	("user_id", "time_submitted", "request_info", "is_answered")
VALUES
	(3, '2022-06-01 19:11:43.68205', 'How do you think the backfield will be split this year with Aaron Jones and AJ Dillon?', false);