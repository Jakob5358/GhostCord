#!bin/bash

if [[ "$OSTYPE" =~ ^linux ]]; then
    clear
    echo "[TEST-SCRIPT-GHOSTCORD] Starting test for GhostCord..."
    yarn run test
else 
    echo "[TEST-SCRIPT-GHOSTCORD] Your OS is not yet supported..."
    exit 1
fi