#!/bin/bash

# To Run: 
# 1. Changed directory in terminal to where shell script file is located 
# 2. Run `source ./simple-bash-cli.sh`

echo "Enter your name:"
read name
echo "Enter your favorite breakfast cereal:"
read cereal
echo "Hello" $name, "you enjoy" $cereal "at breakfast 🥣"