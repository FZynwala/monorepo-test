#!/bin/bash
fly -t tutorial set-pipeline -p frontend-pipeline -c frontend-pipeline.yml --load-vars-from vars.yml