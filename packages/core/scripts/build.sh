#!bin/bash

DIR="dist/"

echo "Starting run.sh"

clear

echo "..."

# Check if the emited javascript exitst in the project.
# If it does, remove it else continue with the execution.

if [[ "$OSTYPE" =~ ^darwin ]]; then
    echo "Not yet supported..."
fi

if [[ "$OSTYPE" =~ ^windows ]]; then
    echo "Not yet supported..."
fi

if [[ "$OSTYPE" =~ ^linux ]]; then
    if [ -d "$DIR" ]; then 
  echo "[BUILD-SCRIPT-LINUX-LINUX] Removing old emited files..."
  rm -rf "../$DIR" # Removes the dir, this only works in unix based systems.
  echo "[BUILD-SCRIPT-LINUX] Files removed, continuing with the build..."
  yarn run build # Builds the typescript files.
  echo "[BUILD-SCRIPT-LINUX] Build script successfully executed."
else
  echo "[BUILD-SCRIPT-LINUX] Building a fresh project..."
  yarn run build # Builds the typescript files.
  echo "[BUILD-SCRIPT-LINUX] Build script successfully executed."
  fi
fi