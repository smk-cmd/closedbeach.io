REPO_DIR=$(shell git rev-parse --show-toplevel)
PACKAGES_DIR=$(REPO_DIR)/packages
WEB_DIR=$(PACKAGES_DIR)/web

NODE_MODULES_DIRS=$(REPO_DIR)/node_modules $(WEB_DIR)/node_modules

GIT_BRANCH=$(shell git rev-parse --abbrev-ref HEAD)

.PHONY: all install clean branch git-pull git-push git-rebase

all:
	@echo "'make' can be called with:"
	@echo "install		- installs all the dependencies"
	@echo "clean		- clean the node_modules directory"
	@echo "branch		- create a new branch from the current branch"
	@echo "git-pull	- git pull with rebase instead of merge"
	@echo "git-push	- git push local branch to remote repository"
	@echo "git-rebase	- fetches the remote repo and does a rebase"

install:
	yarn
	yarn install

clean:
	-rm -r $(NODE_MODULES_DIR)
	yarn cache clean

# create a new branch from the current branch
# usage: make branch JIRA=XXXX OR make branch NAME=YYYY
# example 1: make branch JIRA=CBIO-49
# example 2: make branch NAME=CBIO-49-migrate-frontend
branch:
	$(eval NAME := $(if $(JIRA),$(NAME)))
	@if [ -z "$(NAME)" ]; then \
		echo "usage: make branch JIRA=XXXX OR make branch NAME=YYYY"; \
		exit 1; \
	fi
	git pull --rebase --autostash
	git switch -C $(NAME)

git-pull:
	git pull --rebase --autostash

git-push:
	git push --set-upstream origin "$(GIT_BRANCH)"

git-rebase:
	git fetch origin
	git rebase origin/$(GIT_BRANCH)
