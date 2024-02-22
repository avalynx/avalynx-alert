#!/bin/bash
docker exec --user=application -it -w /app "${COMPOSE_PROJECT_NAME}"-web-1 bash