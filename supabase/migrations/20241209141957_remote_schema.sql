

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;


CREATE EXTENSION IF NOT EXISTS "pgsodium" WITH SCHEMA "pgsodium";






COMMENT ON SCHEMA "public" IS 'standard public schema';



CREATE EXTENSION IF NOT EXISTS "pg_graphql" WITH SCHEMA "graphql";






CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";






CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";






CREATE EXTENSION IF NOT EXISTS "pgjwt" WITH SCHEMA "extensions";






CREATE EXTENSION IF NOT EXISTS "supabase_vault" WITH SCHEMA "vault";






CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";





SET default_tablespace = '';

SET default_table_access_method = "heap";


CREATE TABLE IF NOT EXISTS "public"."categories" (
    "id" integer NOT NULL,
    "name" character varying(100) NOT NULL,
    "created_at" timestamp without time zone DEFAULT "now"()
);


ALTER TABLE "public"."categories" OWNER TO "postgres";


CREATE SEQUENCE IF NOT EXISTS "public"."categories_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "public"."categories_id_seq" OWNER TO "postgres";


ALTER SEQUENCE "public"."categories_id_seq" OWNED BY "public"."categories"."id";



CREATE TABLE IF NOT EXISTS "public"."classifications" (
    "id" integer NOT NULL,
    "name" character varying(50) NOT NULL,
    "age_limit" integer NOT NULL,
    "created_at" timestamp without time zone DEFAULT "now"(),
    CONSTRAINT "classifications_age_limit_check" CHECK (("age_limit" >= 0))
);


ALTER TABLE "public"."classifications" OWNER TO "postgres";


CREATE SEQUENCE IF NOT EXISTS "public"."classifications_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "public"."classifications_id_seq" OWNER TO "postgres";


ALTER SEQUENCE "public"."classifications_id_seq" OWNED BY "public"."classifications"."id";



CREATE TABLE IF NOT EXISTS "public"."game_categories" (
    "game_id" integer NOT NULL,
    "category_id" integer NOT NULL
);


ALTER TABLE "public"."game_categories" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."game_platforms" (
    "game_id" integer NOT NULL,
    "platform_id" integer NOT NULL
);


ALTER TABLE "public"."game_platforms" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."game_publishers" (
    "game_id" integer NOT NULL,
    "publisher_id" integer NOT NULL
);


ALTER TABLE "public"."game_publishers" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."games" (
    "id" integer NOT NULL,
    "title" character varying(255) NOT NULL,
    "description" "text",
    "release_date" "date",
    "price" numeric(10,2) NOT NULL,
    "stock" integer NOT NULL,
    "created_at" timestamp without time zone DEFAULT "now"(),
    "classification_id" integer NOT NULL,
    CONSTRAINT "games_price_check" CHECK (("price" >= (0)::numeric)),
    CONSTRAINT "games_stock_check" CHECK (("stock" >= 0))
);


ALTER TABLE "public"."games" OWNER TO "postgres";


CREATE SEQUENCE IF NOT EXISTS "public"."games_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "public"."games_id_seq" OWNER TO "postgres";


ALTER SEQUENCE "public"."games_id_seq" OWNED BY "public"."games"."id";



CREATE TABLE IF NOT EXISTS "public"."platforms" (
    "id" integer NOT NULL,
    "name" character varying(100) NOT NULL,
    "created_at" timestamp without time zone DEFAULT "now"()
);


ALTER TABLE "public"."platforms" OWNER TO "postgres";


CREATE SEQUENCE IF NOT EXISTS "public"."platforms_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "public"."platforms_id_seq" OWNER TO "postgres";


ALTER SEQUENCE "public"."platforms_id_seq" OWNED BY "public"."platforms"."id";



CREATE TABLE IF NOT EXISTS "public"."publishers" (
    "id" integer NOT NULL,
    "name" character varying(100) NOT NULL,
    "created_at" timestamp without time zone DEFAULT "now"()
);


ALTER TABLE "public"."publishers" OWNER TO "postgres";


CREATE SEQUENCE IF NOT EXISTS "public"."publishers_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "public"."publishers_id_seq" OWNER TO "postgres";


ALTER SEQUENCE "public"."publishers_id_seq" OWNED BY "public"."publishers"."id";



ALTER TABLE ONLY "public"."categories" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."categories_id_seq"'::"regclass");



ALTER TABLE ONLY "public"."classifications" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."classifications_id_seq"'::"regclass");



ALTER TABLE ONLY "public"."games" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."games_id_seq"'::"regclass");



ALTER TABLE ONLY "public"."platforms" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."platforms_id_seq"'::"regclass");



ALTER TABLE ONLY "public"."publishers" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."publishers_id_seq"'::"regclass");



ALTER TABLE ONLY "public"."categories"
    ADD CONSTRAINT "categories_name_key" UNIQUE ("name");



ALTER TABLE ONLY "public"."categories"
    ADD CONSTRAINT "categories_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."classifications"
    ADD CONSTRAINT "classifications_name_key" UNIQUE ("name");



ALTER TABLE ONLY "public"."classifications"
    ADD CONSTRAINT "classifications_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."game_categories"
    ADD CONSTRAINT "game_categories_pkey" PRIMARY KEY ("game_id", "category_id");



ALTER TABLE ONLY "public"."game_platforms"
    ADD CONSTRAINT "game_platforms_pkey" PRIMARY KEY ("game_id", "platform_id");



ALTER TABLE ONLY "public"."game_publishers"
    ADD CONSTRAINT "game_publishers_pkey" PRIMARY KEY ("game_id", "publisher_id");



ALTER TABLE ONLY "public"."games"
    ADD CONSTRAINT "games_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."platforms"
    ADD CONSTRAINT "platforms_name_key" UNIQUE ("name");



ALTER TABLE ONLY "public"."platforms"
    ADD CONSTRAINT "platforms_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."publishers"
    ADD CONSTRAINT "publishers_name_key" UNIQUE ("name");



ALTER TABLE ONLY "public"."publishers"
    ADD CONSTRAINT "publishers_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."game_categories"
    ADD CONSTRAINT "game_categories_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."game_categories"
    ADD CONSTRAINT "game_categories_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "public"."games"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."game_platforms"
    ADD CONSTRAINT "game_platforms_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "public"."games"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."game_platforms"
    ADD CONSTRAINT "game_platforms_platform_id_fkey" FOREIGN KEY ("platform_id") REFERENCES "public"."platforms"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."game_publishers"
    ADD CONSTRAINT "game_publishers_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "public"."games"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."game_publishers"
    ADD CONSTRAINT "game_publishers_publisher_id_fkey" FOREIGN KEY ("publisher_id") REFERENCES "public"."publishers"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."games"
    ADD CONSTRAINT "games_classification_id_fkey" FOREIGN KEY ("classification_id") REFERENCES "public"."classifications"("id") ON DELETE CASCADE;



ALTER TABLE "public"."categories" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."classifications" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."game_categories" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."game_platforms" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."game_publishers" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."games" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."platforms" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."publishers" ENABLE ROW LEVEL SECURITY;




ALTER PUBLICATION "supabase_realtime" OWNER TO "postgres";


GRANT USAGE ON SCHEMA "public" TO "postgres";
GRANT USAGE ON SCHEMA "public" TO "anon";
GRANT USAGE ON SCHEMA "public" TO "authenticated";
GRANT USAGE ON SCHEMA "public" TO "service_role";



































































































































































































GRANT ALL ON TABLE "public"."categories" TO "anon";
GRANT ALL ON TABLE "public"."categories" TO "authenticated";
GRANT ALL ON TABLE "public"."categories" TO "service_role";



GRANT ALL ON SEQUENCE "public"."categories_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."categories_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."categories_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."classifications" TO "anon";
GRANT ALL ON TABLE "public"."classifications" TO "authenticated";
GRANT ALL ON TABLE "public"."classifications" TO "service_role";



GRANT ALL ON SEQUENCE "public"."classifications_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."classifications_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."classifications_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."game_categories" TO "anon";
GRANT ALL ON TABLE "public"."game_categories" TO "authenticated";
GRANT ALL ON TABLE "public"."game_categories" TO "service_role";



GRANT ALL ON TABLE "public"."game_platforms" TO "anon";
GRANT ALL ON TABLE "public"."game_platforms" TO "authenticated";
GRANT ALL ON TABLE "public"."game_platforms" TO "service_role";



GRANT ALL ON TABLE "public"."game_publishers" TO "anon";
GRANT ALL ON TABLE "public"."game_publishers" TO "authenticated";
GRANT ALL ON TABLE "public"."game_publishers" TO "service_role";



GRANT ALL ON TABLE "public"."games" TO "anon";
GRANT ALL ON TABLE "public"."games" TO "authenticated";
GRANT ALL ON TABLE "public"."games" TO "service_role";



GRANT ALL ON SEQUENCE "public"."games_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."games_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."games_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."platforms" TO "anon";
GRANT ALL ON TABLE "public"."platforms" TO "authenticated";
GRANT ALL ON TABLE "public"."platforms" TO "service_role";



GRANT ALL ON SEQUENCE "public"."platforms_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."platforms_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."platforms_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."publishers" TO "anon";
GRANT ALL ON TABLE "public"."publishers" TO "authenticated";
GRANT ALL ON TABLE "public"."publishers" TO "service_role";



GRANT ALL ON SEQUENCE "public"."publishers_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."publishers_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."publishers_id_seq" TO "service_role";



ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "service_role";






ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "service_role";






ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "service_role";






























RESET ALL;
