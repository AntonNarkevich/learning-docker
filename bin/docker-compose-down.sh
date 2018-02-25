#!/bin/bash

docker-compose -f dc.app.yml down
docker-compose -f dc.mocha.yml down
