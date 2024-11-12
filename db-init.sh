#!/bin/sh -e

psql --variable=ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
  CREATE DATABASE "instagram_development";
  CREATE DATABASE "instagram_test";
EOSQL

psql --variable=ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname=instagram_development <<-EOSQL
  CREATE EXTENSION "citext";
  CREATE EXTENSION "uuid-ossp";
EOSQL

psql --variable=ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname=instagram_test <<-EOSQL
  CREATE EXTENSION "citext";
  CREATE EXTENSION "uuid-ossp";
EOSQL
