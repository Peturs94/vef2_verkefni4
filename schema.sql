CREATE TABLE todos (
  id serial primary key,
  title varchar(128) not null,
  position int default 0,
  due timestamp with time zone,
  created timestamp with time zone not null default current_timestamp,
  updated timestamp with time zone not null default current_timestamp,
  completed boolean DEFAULT false
);
