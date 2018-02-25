#!/bin/bash

sh ./bin/build-base-image.sh
docker stop app-container
docker build -f Dockerfile.app -t app-image .
docker run -p 9229:9229 -p 8080:8080 --name app-container --rm -d app-image

sleep .5