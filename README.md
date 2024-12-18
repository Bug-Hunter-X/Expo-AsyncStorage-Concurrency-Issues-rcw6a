# Expo AsyncStorage Concurrency Bug

This repository demonstrates a common bug encountered when using AsyncStorage in Expo applications.  AsyncStorage is not thread-safe, meaning concurrent operations can lead to data corruption or unexpected behavior. This example shows how to reproduce the problem and provides a solution using promises to ensure sequential access.

## Reproducing the Bug

The `bug.js` file contains code that attempts to concurrently set and get values from AsyncStorage.  This often results in incorrect or missing data.  Run the `bug.js` file to see the erratic behavior.

## Solution

The `bugSolution.js` file demonstrates a solution using async/await to ensure that AsyncStorage operations are performed sequentially. This prevents concurrency issues and ensures data integrity.  Run the `bugSolution.js` file to observe the correct behavior.

## Setup

Make sure you have Node.js and npm or yarn installed.  Then run:
```bash
npm install expo
```
Then run the `bug.js` and `bugSolution.js` file using Expo Go.