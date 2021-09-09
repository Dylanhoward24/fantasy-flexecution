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
	('dylbot', 'LooneyTooney', 'admin', 'Dylan', 'Howard', 'dylan.howard0424@gmail.com', 'I am the creator of this app! Muahaha!');