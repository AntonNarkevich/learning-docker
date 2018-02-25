#!/bin/bash

docker rmi $(docker images --quiet --filter "dangling=true") 2> /dev/null
exit 0