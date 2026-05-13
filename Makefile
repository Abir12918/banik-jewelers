SHELL := /bin/zsh

APP_NAME := Banik Jewelers
PORT ?= 3000
PID_FILE := .next-dev.pid
LOG_FILE := .next-dev.log
NPM_CACHE := /private/tmp/banik-jewelers-npm-cache

BOLD := \033[1m
DIM := \033[2m
RESET := \033[0m
GOLD := \033[38;5;178m
GREEN := \033[32m
BLUE := \033[34m
RED := \033[31m

.DEFAULT_GOAL := help

.PHONY: help install run dev stop restart status lint build start clean clean-all audit open

define banner
	@printf "$(GOLD)$(BOLD)\n%s$(RESET)\n" "✦ $(APP_NAME)"
	@printf "$(DIM)%s$(RESET)\n\n" "$(1)"
endef

help:
	$(call banner,Developer commands)
	@printf "$(BOLD)Usage$(RESET)\n"
	@printf "  make <command>\n\n"
	@printf "$(BOLD)Commands$(RESET)\n"
	@printf "  $(GOLD)%-12s$(RESET) %s\n" "install" "Install dependencies with a project-safe npm cache"
	@printf "  $(GOLD)%-12s$(RESET) %s\n" "run" "Start Next dev server in the background on PORT=$(PORT)"
	@printf "  $(GOLD)%-12s$(RESET) %s\n" "dev" "Start Next dev server in the foreground"
	@printf "  $(GOLD)%-12s$(RESET) %s\n" "stop" "Stop the background dev server"
	@printf "  $(GOLD)%-12s$(RESET) %s\n" "restart" "Restart the background dev server"
	@printf "  $(GOLD)%-12s$(RESET) %s\n" "status" "Show dev server and git status"
	@printf "  $(GOLD)%-12s$(RESET) %s\n" "lint" "Run ESLint"
	@printf "  $(GOLD)%-12s$(RESET) %s\n" "build" "Run production build"
	@printf "  $(GOLD)%-12s$(RESET) %s\n" "start" "Start production server after build"
	@printf "  $(GOLD)%-12s$(RESET) %s\n" "audit" "Run npm audit"
	@printf "  $(GOLD)%-12s$(RESET) %s\n" "clean" "Remove Next build output and dev logs"
	@printf "  $(GOLD)%-12s$(RESET) %s\n" "clean-all" "Remove build output, logs, and node_modules"
	@printf "  $(GOLD)%-12s$(RESET) %s\n" "open" "Open the local site in the browser"

install:
	$(call banner,Installing dependencies)
	@npm install --cache "$(NPM_CACHE)"
	@printf "$(GREEN)✓ Dependencies installed$(RESET)\n"

run:
	$(call banner,Starting dev server)
	@if [ -s "$(PID_FILE)" ] && kill -0 "$$(cat $(PID_FILE))" 2>/dev/null && lsof -ti tcp:$(PORT) >/dev/null 2>&1; then \
		printf "$(BLUE)Already running at http://localhost:$(PORT) $$(printf '(%s)' "$$(cat $(PID_FILE))")$(RESET)\n"; \
	elif lsof -ti tcp:$(PORT) >/dev/null 2>&1; then \
		printf "$(RED)✕ Port $(PORT) is already in use$(RESET)\n"; \
		printf "$(DIM)Run 'make stop' to stop the process using this port, or use PORT=3001 make run.$(RESET)\n"; \
		exit 1; \
	else \
		nohup env PORT="$(PORT)" npm run dev > "$(LOG_FILE)" 2>&1 < /dev/null & echo $$! > "$(PID_FILE)"; \
		sleep 2; \
		if [ -s "$(PID_FILE)" ] && kill -0 "$$(cat $(PID_FILE))" 2>/dev/null && lsof -ti tcp:$(PORT) >/dev/null 2>&1; then \
			printf "$(GREEN)✓ Running at http://localhost:$(PORT)$(RESET)\n"; \
			printf "$(DIM)Logs: $(LOG_FILE)$(RESET)\n"; \
		else \
			printf "$(RED)✕ Dev server failed to start$(RESET)\n"; \
			cat "$(LOG_FILE)"; \
			rm -f "$(PID_FILE)"; \
			exit 1; \
		fi; \
	fi

dev:
	$(call banner,Starting foreground dev server)
	@PORT="$(PORT)" npm run dev

stop:
	$(call banner,Stopping dev server)
	@if [ -s "$(PID_FILE)" ] && kill -0 "$$(cat $(PID_FILE))" 2>/dev/null; then \
		kill "$$(cat $(PID_FILE))"; \
		rm -f "$(PID_FILE)"; \
		printf "$(GREEN)✓ Stopped$(RESET)\n"; \
	elif lsof -ti tcp:$(PORT) >/dev/null 2>&1; then \
		lsof -ti tcp:$(PORT) | xargs kill; \
		rm -f "$(PID_FILE)"; \
		printf "$(GREEN)✓ Stopped process using port $(PORT)$(RESET)\n"; \
	else \
		rm -f "$(PID_FILE)"; \
		printf "$(DIM)No background dev server is running$(RESET)\n"; \
	fi

restart: stop run

status:
	$(call banner,Project status)
	@if [ -s "$(PID_FILE)" ] && kill -0 "$$(cat $(PID_FILE))" 2>/dev/null && lsof -ti tcp:$(PORT) >/dev/null 2>&1; then \
		printf "$(GREEN)✓ Dev server running$(RESET) http://localhost:$(PORT) $$(printf '(%s)' "$$(cat $(PID_FILE))")\n"; \
	elif lsof -ti tcp:$(PORT) >/dev/null 2>&1; then \
		printf "$(BLUE)Port $(PORT) is in use$(RESET) $$(lsof -ti tcp:$(PORT) | tr '\n' ' ')\n"; \
	else \
		rm -f "$(PID_FILE)"; \
		printf "$(DIM)Dev server is not running via make run$(RESET)\n"; \
	fi
	@printf "\n$(BOLD)Git$(RESET)\n"
	@git status -sb

lint:
	$(call banner,Running lint)
	@npm run lint
	@printf "$(GREEN)✓ Lint passed$(RESET)\n"

build:
	$(call banner,Building production app)
	@npm run build
	@printf "$(GREEN)✓ Build passed$(RESET)\n"

start:
	$(call banner,Starting production server)
	@PORT="$(PORT)" npm run start

audit:
	$(call banner,Running npm audit)
	@npm audit

clean:
	$(call banner,Cleaning build artifacts)
	@rm -rf .next "$(LOG_FILE)" "$(PID_FILE)"
	@printf "$(GREEN)✓ Cleaned build output and dev logs$(RESET)\n"

clean-all: clean
	$(call banner,Removing dependencies)
	@rm -rf node_modules
	@printf "$(GREEN)✓ Removed node_modules$(RESET)\n"

open:
	$(call banner,Opening local site)
	@open "http://localhost:$(PORT)"
