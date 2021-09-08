-- code used to create the tables at project start
-- see database_inserts.sql for information inserted
CREATE TABLE "users" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "auth_level" VARCHAR (80) NOT NULL,
    "first_name" VARCHAR (80) NOT NULL,
    "last_name" VARCHAR (80),
    "email_address" VARCHAR (80) NOT NULL,
    "about" VARCHAR (1000)
);

CREATE TABLE "comingUp" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR (80) NOT NULL
);

CREATE TABLE "players" (
    "id" SERIAL PRIMARY KEY,
	"first_name" VARCHAR (80) NOT NULL,
	"last_name" VARCHAR (80) NOT NULL,
	"team_id" INT REFERENCES "teams",
	"position_id" INT REFERENCES "positions",
	"time_created" TIMESTAMP,
	"created_by_user_id" INT REFERENCES "users"
);

CREATE TABLE "teams" (
    "id" SERIAL PRIMARY KEY,
	"team_name" VARCHAR (80) NOT NULL
);

CREATE TABLE "positions" (
    "id" SERIAL PRIMARY KEY,
	"position" VARCHAR (80) NOT NULL
);

CREATE TABLE "tiers" (
    "id" SERIAL PRIMARY KEY,
	"order_on_list" INT UNIQUE,
	"tier_name" VARCHAR (80) NOT NULL
);

CREATE TABLE "playersRankings" (
    "id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "users",
	"player_id" INT REFERENCES "players",
	"tier_id" INT REFERENCES "tiers",
	"rank" INT
);

CREATE TABLE "tags" (
    "id" SERIAL PRIMARY KEY,
	"tag" VARCHAR (80) NOT NULL,
	"description" VARCHAR (80) NOT NULL
);

CREATE TABLE "playersTags" (
    "id" SERIAL PRIMARY KEY,
	"tag_id" INT REFERENCES "tags",
	"player_id" INT REFERENCES "players"
);

CREATE TABLE "podcasts" (
    "id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "users",
	"time_uploaded" TIMESTAMP,
	"image_source" VARCHAR (6000),
	"description" VARCHAR (1000)
);

CREATE TABLE "listenerRequests" (
    "id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "users",
	"time_submitted" TIMESTAMP,
	"request_info" VARCHAR (1000) NOT NULL,
	"is_answered" BOOLEAN DEFAULT FALSE
);