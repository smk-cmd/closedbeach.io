REPO_DIR=$(shell git rev-parse --show-toplevel)
NODE_MODULES_DIR=node_modules

GIT_BRANCH=$(shell git rev-parse --abbrev-ref HEAD)

.PHONY: all install clean branch git-rebase

all:
	@echo "'make' can be called with:"
	@echo "install		- installs all the dependencies"
	@echo "clean		- clean the node_modules directory"
	@echo "branch		- create a new branch from the current branch"
	@echo "git-rebase	- fetches the remote repo and does a rebase"

install:
	yarn
	yarn install

clean:
	-rm -r $(NODE_MODULES_DIR)

# create a new branch from the current branch
# usage: make branch JIRA=XXXX OR make branch NAME=YYYY
# example 1: make branch JIRA=CBIO-3
# example 2: make branch NAME=fix-frontend
branch:
	$(eval NAME := $(if $(JIRA),CBIO-$(JIRA),$(NAME)))
	@if [ -z "$(NAME)" ]; then \
		echo "usage: make branch JIRA=XXXX OR make branch NAME=YYYY"; \
		exit 1; \
	fi
	git pull --rebase --autostash
	git switch -C $(NAME)

git-rebase:
	git fetch origin
	git rebase origin/$(GIT_BRANCH)
