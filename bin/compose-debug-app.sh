#!/bin/bash

docker-compose -f dc.base.yml build
docker-compose -f dc.app.yml build
docker-compose -f dc.app.yml up