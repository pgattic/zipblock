
PHONY: all

all:
	mkdir -p out/
	zip -r out/chrome-extension.zip chrome-extension/*
