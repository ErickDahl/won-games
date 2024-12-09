SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.6
-- Dumped by pg_dump version 15.6

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

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."audit_log_entries" ("instance_id", "id", "payload", "created_at", "ip_address") VALUES
	('00000000-0000-0000-0000-000000000000', '266a40cb-6448-4ea3-a9e6-fc939c7de08a', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"test@tes.com","user_id":"f261a1ee-7fa0-4197-a889-18130694d520","user_phone":""}}', '2024-12-07 18:54:09.555245+00', ''),
	('00000000-0000-0000-0000-000000000000', '2ef5f5c8-9d89-4adc-8854-2655b991eaf7', '{"action":"user_deleted","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"test@tes.com","user_id":"f261a1ee-7fa0-4197-a889-18130694d520","user_phone":""}}', '2024-12-07 19:52:09.104205+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: key; Type: TABLE DATA; Schema: pgsodium; Owner: supabase_admin
--



--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."categories" ("id", "name", "created_at") VALUES
	(1, 'Action', '2024-12-08 14:26:59.68844'),
	(2, 'RPG', '2024-12-08 14:26:59.68844'),
	(3, 'Adventure', '2024-12-08 14:26:59.68844'),
	(4, 'Simulation', '2024-12-08 14:26:59.68844');


--
-- Data for Name: classifications; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."classifications" ("id", "name", "age_limit", "created_at") VALUES
	(1, 'Everyone', 0, '2024-12-08 14:26:59.68844'),
	(2, 'Teen', 13, '2024-12-08 14:26:59.68844'),
	(3, 'Mature', 17, '2024-12-08 14:26:59.68844');


--
-- Data for Name: games; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."games" ("id", "title", "description", "release_date", "price", "stock", "created_at", "classification_id") VALUES
	(1, 'The Legend of Zelda: Breath of the Wild', 'An action-adventure game set in a vast open world.', '2017-03-03', 59.99, 100, '2024-12-08 14:26:59.68844', 2),
	(2, 'Elden Ring', 'A fantasy action RPG developed by FromSoftware.', '2022-02-25', 69.99, 200, '2024-12-08 14:26:59.68844', 3),
	(3, 'The Sims 4', 'A life simulation game that allows players to create and control people.', '2014-09-02', 39.99, 300, '2024-12-08 14:26:59.68844', 1),
	(4, 'Halo Infinite', 'A first-person shooter game in the Halo franchise.', '2021-12-08', 59.99, 150, '2024-12-08 14:26:59.68844', 2);


--
-- Data for Name: game_categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."game_categories" ("game_id", "category_id") VALUES
	(1, 2),
	(1, 3),
	(2, 1),
	(2, 2),
	(3, 3),
	(3, 4),
	(4, 1),
	(4, 2);


--
-- Data for Name: platforms; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."platforms" ("id", "name", "created_at") VALUES
	(1, 'PC', '2024-12-08 14:26:59.68844'),
	(2, 'PlayStation 5', '2024-12-08 14:26:59.68844'),
	(3, 'Xbox Series X', '2024-12-08 14:26:59.68844'),
	(4, 'Switch', '2024-12-08 14:26:59.68844');


--
-- Data for Name: game_platforms; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."game_platforms" ("game_id", "platform_id") VALUES
	(1, 2),
	(1, 3),
	(2, 1),
	(2, 2),
	(3, 3),
	(3, 4),
	(4, 1),
	(4, 2);


--
-- Data for Name: publishers; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."publishers" ("id", "name", "created_at") VALUES
	(1, 'Electronic Arts', '2024-12-08 14:26:59.68844'),
	(2, 'Ubisoft', '2024-12-08 14:26:59.68844'),
	(3, 'Nintendo', '2024-12-08 14:26:59.68844'),
	(4, 'Bandai Namco', '2024-12-08 14:26:59.68844'),
	(5, 'Microsoft', '2024-12-08 14:26:59.68844');


--
-- Data for Name: game_publishers; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."game_publishers" ("game_id", "publisher_id") VALUES
	(1, 2),
	(2, 4),
	(3, 1),
	(4, 2);


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

INSERT INTO "storage"."buckets" ("id", "name", "owner", "created_at", "updated_at", "public", "avif_autodetection", "file_size_limit", "allowed_mime_types", "owner_id") VALUES
	('won-games', 'won-games', NULL, '2024-12-08 14:45:01.076129+00', '2024-12-08 14:45:01.076129+00', false, false, NULL, NULL, NULL);


--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

INSERT INTO "storage"."objects" ("id", "bucket_id", "name", "owner", "created_at", "updated_at", "last_accessed_at", "metadata", "version", "owner_id", "user_metadata") VALUES
	('76626e00-d857-4c7f-8ee9-ab1f56e06ebf', 'won-games', 'vote-card.png', NULL, '2024-12-08 14:45:53.675467+00', '2024-12-08 14:45:53.675467+00', '2024-12-08 14:45:53.675467+00', '{"eTag": "\"105dcf85fe67731774d2cc9db0b48f3c-1\"", "size": 1734107, "mimetype": "image/png", "cacheControl": "max-age=3600", "lastModified": "2024-12-08T14:45:54.000Z", "contentLength": 1734107, "httpStatusCode": 200}', '5ff47618-9a0e-46bf-a3cc-25993327d0e4', NULL, NULL);


--
-- Data for Name: s3_multipart_uploads; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads_parts; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: secrets; Type: TABLE DATA; Schema: vault; Owner: supabase_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 1, false);


--
-- Name: key_key_id_seq; Type: SEQUENCE SET; Schema: pgsodium; Owner: supabase_admin
--

SELECT pg_catalog.setval('"pgsodium"."key_key_id_seq"', 1, false);


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."categories_id_seq"', 4, true);


--
-- Name: classifications_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."classifications_id_seq"', 3, true);


--
-- Name: games_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."games_id_seq"', 4, true);


--
-- Name: platforms_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."platforms_id_seq"', 4, true);


--
-- Name: publishers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."publishers_id_seq"', 5, true);


--
-- PostgreSQL database dump complete
--

RESET ALL;