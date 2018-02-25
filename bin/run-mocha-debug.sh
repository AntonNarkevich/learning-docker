#!/bin/bash

sh ./bin/build-base-image.sh
docker stop mocha-container
docker build -f Dockerfile.mocha -t mocha-image .
docker run -p 9230:9230 --name mocha-container --rm -d mocha-image

sleep .5