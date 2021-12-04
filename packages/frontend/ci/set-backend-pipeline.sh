#!/bin/bash
fly -t tutorial set-pipeline -p backend-pipeline -c backend-pipeline.yml --load-vars-from vars.yml