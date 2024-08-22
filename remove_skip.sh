#!/bin/bash
rg "\.skip" --files-with-matches --glob '**/*.js' | xargs sed -i 's/\.skip//g'
