# TimerJS

TimerJS is a simple JavaScript library for creating and managing timers and stopwatches. It provides an easy-to-use API for starting, pausing, and stopping timers and stopwatches with various time units.

## Installation

To install TimerJS, simply download the `timer.js` file and include it in your project.

## Usage

First, create an instance of the `Timer` class:

```javascript
const timer = new Timer("s", true);
```

### Constructor

```javascript
constructor(unit = "s", dp = false)
```

- `unit` (optional): The unit of time. Valid units are:
    - `"ms"`: milliseconds (native)
    - `"s"`: seconds
    - `"m"`: minutes
    - `"h"`: hours
- `dp` (optional): Boolean indicating whether to round the time to the specified decimal places.

### Methods

#### `startStopwatch(dateObj = new Date())`

Starts a stopwatch.

- `dateObj` (optional): A `Date` object representing the start time. Defaults to the current date and time.
- **Validation**: Must be an instance of `Date`.

#### `startTimer(time = 0, whenDone = false)`

Starts a timer.

- `time` (optional): The duration of the timer in the specified unit. Defaults to `0`.
- `whenDone` (optional): A callback function to be executed when the timer finishes.
- **Validation**:
    - `time` must be a non-negative number.
    - `whenDone` must be a function if provided.

#### `getTime(timeNow = new Date())`

Gets the current time of the stopwatch or timer.

- `timeNow` (optional): A `Date` object representing the current time. Defaults to the current date and time.
- **Validation**: Must be an instance of `Date`.

#### `pause()`

Pauses the current stopwatch or timer.

#### `unpause()`

Unpauses the current stopwatch or timer.

#### `stop()`

Stops the current stopwatch or timer.

### Example Uses

Here are some examples of how to use TimerJS in your projects:

#### Example 1: Basic Stopwatch

```javascript
const stopwatch = new Timer("s", true);
stopwatch.startStopwatch();

// After some time, get the elapsed time
setTimeout(() => {
    console.log(`Elapsed time: ${stopwatch.getTime()} seconds`);
    stopwatch.pause();
}, 5000);
```

#### Example 2: Basic Timer

```javascript
const timer = new Timer("s", true);
timer.startTimer(10, () => {
    console.log("Timer finished!");
});

// Check the remaining time after 5 seconds
setTimeout(() => {
    console.log(`Remaining time: ${timer.getTime()} seconds`);
    timer.pause();
}, 5000);
```

#### Example 3: Timer with Minutes

```javascript
const timer = new Timer("m", true);
timer.startTimer(1, () => {
    console.log("1 minute timer finished!");
});

// Check the remaining time after 30 seconds
setTimeout(() => {
    console.log(`Remaining time: ${timer.getTime()} minutes`);
    timer.pause();
}, 30000);
```

#### Example 4: Unpausing a Timer

```javascript
const timer = new Timer("s", true);
timer.startTimer(20, () => {
    console.log("Timer finished!");
});

// Pause the timer after 10 seconds
setTimeout(() => {
    timer.pause();
    console.log("Timer paused.");
}, 10000);

// Unpause the timer after another 5 seconds
setTimeout(() => {
    timer.unpause();
    console.log("Timer unpaused.");
}, 15000);
```
## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
