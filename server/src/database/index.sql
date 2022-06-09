CREATE TABLE "user" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar(255) NOT NULL,
  "surname" varchar(255),
  "email" varchar(255) UNIQUE NOT NULL,
  "login" varchar(255) UNIQUE NOT NULL,
  "password" varchar(255) NOT NULL,
  "birthday" bigint,
  "privacy" varchar(255) NOT NULL
);

CREATE TABLE "photo" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int NOT NULL,
  "original" text NOT NULL,
  "post" text NOT NULL,
  "preview" text NOT NULL,
  "message" text NOT NULL
);

CREATE TABLE "activation" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int UNIQUE NOT NULL,
  "link" text UNIQUE NOT NULL,
  "is_activation" boolean NOT NULL
);

CREATE TABLE "token" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int UNIQUE NOT NULL,
  "refresh" text UNIQUE NOT NULL
);

CREATE TABLE "subscription" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int NOT NULL,
  "subscriber_id" int NOT NULL
);

CREATE TABLE "subscribe" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int NOT NULL,
  "subscription_id" int NOT NULL
);

CREATE TABLE "user_chat" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int NOT NULL,
  "chat_id" int NOT NULL
);

CREATE TABLE "chat" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar(255) NOT NULL,
  "photo_src" text,
  "last_message_id" int,
  "link" text UNIQUE NOT NULL,
  "privacy" varchar(255) NOT NULL
);

CREATE TABLE "photo_chat" (
  "id" SERIAL PRIMARY KEY,
  "chat_id" int NOT NULL,
  "original" text NOT NULL,
  "post" text NOT NULL,
  "preview" text NOT NULL,
  "message" text NOT NULL
);

CREATE TABLE "message" (
  "id" SERIAL PRIMARY KEY,
  "chat_id" int NOT NULL,
  "sender_id" int NOT NULL,
  "content" text NOT NULL,
  "time" bigint NOT NULL
);

CREATE TABLE "post" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int NOT NULL,
  "title" varchar(255) NOT NULL,
  "content" TEXT NOT NULL,
  "time" bigint NOT NULL,
  "visibility" varchar(255) NOT NULL,
  "link" text NOT NULL
);

CREATE TABLE "comment" (
  "id" SERIAL PRIMARY KEY,
  "post_id" int NOT NULL,
  "commentator_id" int NOT NULL,
  "content" text NOT NULL,
  "time" bigint NOT NULL,
  "link" text NOT NULL
);

CREATE TABLE "follow_comment" (
  "id" SERIAL PRIMARY KEY,
  "comment_id" int NOT NULL,
  "commentator_id" int NOT NULL,
  "is_follow" boolean NOT NULL
);

CREATE TABLE "follow_post" (
  "id" SERIAL PRIMARY KEY,
  "post_id" int NOT NULL,
  "user_id" int NOT NULL,
  "is_follow" boolean NOT NULL
);

ALTER TABLE "photo" 
	ADD FOREIGN KEY ("user_id") 
	REFERENCES "user" ("id")
	ON DELETE CASCADE;

ALTER TABLE "activation" 
	ADD FOREIGN KEY ("user_id") 
	REFERENCES "user" ("id")
	ON DELETE CASCADE;

ALTER TABLE "token" 
	ADD FOREIGN KEY ("user_id") 
	REFERENCES "user" ("id")
	ON DELETE CASCADE;

ALTER TABLE "subscription" 
	ADD FOREIGN KEY ("user_id") 
	REFERENCES "user" ("id")
	ON DELETE CASCADE;

ALTER TABLE "subscription" 
	ADD FOREIGN KEY ("subscriber_id") 
	REFERENCES "user" ("id")
	ON DELETE CASCADE;

ALTER TABLE "subscribe" 
	ADD FOREIGN KEY ("user_id") 
	REFERENCES "user" ("id")
	ON DELETE CASCADE;

ALTER TABLE "subscribe" 
	ADD FOREIGN KEY ("subscription_id") 
	REFERENCES "user" ("id")
	ON DELETE CASCADE;

ALTER TABLE "user_chat" 
	ADD FOREIGN KEY ("user_id") 
	REFERENCES "user" ("id")
	ON DELETE CASCADE;

ALTER TABLE "user_chat" 
	ADD FOREIGN KEY ("chat_id") 
	REFERENCES "chat" ("id")
	ON DELETE CASCADE;

ALTER TABLE "chat" 
	ADD FOREIGN KEY ("last_message_id") 
	REFERENCES "message" ("id")
	ON DELETE CASCADE;

ALTER TABLE "photo_chat" 
  ADD FOREIGN KEY ("chat_id") 
  REFERENCES "chat" ("id")
	ON DELETE CASCADE;

ALTER TABLE "message" 
	ADD FOREIGN KEY ("chat_id") 
	REFERENCES "chat" ("id")
	ON DELETE CASCADE;

ALTER TABLE "message" 
	ADD FOREIGN KEY ("sender_id") 
	REFERENCES "user" ("id")
	ON DELETE CASCADE;

ALTER TABLE "post" 
	ADD FOREIGN KEY ("user_id") 
	REFERENCES "user" ("id")
	ON DELETE CASCADE;

ALTER TABLE "comment" 
	ADD FOREIGN KEY ("post_id") 
	REFERENCES "post" ("id")
	ON DELETE CASCADE;

ALTER TABLE "comment" 
	ADD FOREIGN KEY ("commentator_id") 
	REFERENCES "user" ("id")
	ON DELETE CASCADE;

ALTER TABLE "follow_comment" 
	ADD FOREIGN KEY ("comment_id") 
	REFERENCES "comment" ("id")
	ON DELETE CASCADE;

ALTER TABLE "follow_comment" 
	ADD FOREIGN KEY ("commentator_id") 
	REFERENCES "user" ("id")
	ON DELETE CASCADE;

ALTER TABLE "follow_post" 
	ADD FOREIGN KEY ("post_id") 
	REFERENCES "post" ("id")
	ON DELETE CASCADE;

ALTER TABLE "follow_post" 
	ADD FOREIGN KEY ("user_id") 
	REFERENCES "user" ("id")
	ON DELETE CASCADE;
