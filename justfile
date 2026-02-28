default:
    @just --list

dev:
    hugo server -D

build:
    hugo --minify
