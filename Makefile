.PHONY: up
up:
	@make build
	docker compose up

.PHONY: build
build:
	docker compose build

.PHONY: exec-sns
exec-sns:
	docker compose exec sns bash

.PHONY: exec-db
exec-db:
	docker compose exec db bash

.PHONY: down
down:
	docker compose down