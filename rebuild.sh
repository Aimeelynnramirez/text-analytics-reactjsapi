#!/usr/bin/env bash
docker-compose down
docker-compose build
docker-compose start
docker-compose up