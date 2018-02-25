#!/bin/bash

docker-compose -f dc.base.yml build
docker-compose -f dc.mocha.yml build
docker-compose -f dc.mocha.yml up --abort-on-container-exit