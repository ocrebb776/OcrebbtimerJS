# TimerJS

TimerJS is a simple JavaScript library for creating and managing timers and stopwatches. It provides an easy-to-use API for starting, pausing, unpausing, and stopping timers and stopwatches.

## Features

- Start and manage stopwatches
- Start and manage timers with a specified duration
- Pause and unpause timers and stopwatches
- Get the current time of a running timer or stopwatch
- Supports multiple time units: milliseconds, seconds, minutes, and hours

## Installation

You can include TimerJS in your project by downloading the `timer.js` file and including it in your HTML file:

```html
<script src="timer.js"></script>
```

## Usage

### Creating a Timer

To create a new timer, instantiate the `Timer` class with the desired time unit and optional decimal places for rounding:

```js
const timer = new Timer("s", 2); // Time unit in seconds, rounded to 2 decimal places
```

### Starting a Stopwatch

To start a stopwatch, use the `startStopwatch` method:

```js
timer.startStopwatch();
```

### Starting a Timer

To start a timer with a specified duration, use the `startTimer` method:

```js
timer.startTimer(30000, () => alert('Timer Done!')); // 30 seconds timer
```

### Pausing and Unpausing

To pause and unpause the timer or stopwatch, use the `pause` and `unpause` methods:

```js
timer.pause();
timer.unpause();
```

### Getting the Current Time

To get the current time of the running timer or stopwatch, use the `getTime` method:

```js
const currentTime = timer.getTime();
console.log(`Current Time: ${currentTime}`);
```

### Stopping the Timer or Stopwatch

To stop the timer or stopwatch, use the `stop` method:

```js
timer.stop();
```

## Example

Here is a complete example of using TimerJS in an HTML file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TimerJS Demo</title>
    <script src="timer.js"></script>
</head>
<body>
    <h1>TimerJS Demo</h1>
    <button onclick="startStopwatch()">Start Stopwatch</button>
    <button onclick="startTimer()">Start Timer (30s)</button>
    <button onclick="pause()">Pause</button>
    <button onclick="unpause()">Unpause</button>
    <button onclick="stop()">Stop</button>
    <div id="timerDisplay">Time: 0.00</div>

    <script>
        const timer = new Timer("s", 2);
        const timerDisplay = document.getElementById('timerDisplay');

        function startStopwatch() {
            timer.startStopwatch();
        }

        function startTimer() {
            timer.startTimer(30000, () => alert('Timer Done!'));
        }

        function pause() {
            timer.pause();
        }

        function unpause() {
            timer.unpause();
        }

        function getTime() {
            const time = timer.getTime().toFixed(2);
            timerDisplay.textContent = `Time: ${time}`;
        }

        function updateDisplay() {
            setInterval(() => {
                getTime();
            }, 10);
        }

        function stop() {
            timer.stop();
        }

        window.startStopwatch = startStopwatch;
        window.startTimer = startTimer;
        window.pause = pause;
        window.unpause = unpause;
        window.getTime = getTime;
        window.stop = stop;

        updateDisplay();
    </script>
</body>
</html>
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.