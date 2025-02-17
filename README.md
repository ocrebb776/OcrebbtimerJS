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

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
