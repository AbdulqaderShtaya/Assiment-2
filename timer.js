export class Timer {
    constructor(workDuration = 25, breakDuration = 5) {
        this.workDuration = workDuration * 60;
        this.breakDuration = breakDuration * 60;
        this.longBreakDuration = 15 * 60;
        this.currentTime = this.workDuration;
        this.isRunning = false;
        this.isWorkSession = true;
        this.interval = null;
        this.workSessionsCompleted = 0;
    }

    start(callback) {
        if (!this.isRunning) {
            this.isRunning = true;
            this.interval = setInterval(() => {
                if (this.currentTime > 0) {
                    this.currentTime--;
                    callback(this.currentTime);
                } else {
                    this.switchMode();
                    callback(this.currentTime);
                }
            }, 1000);
        }
    }

    pause() {
        this.isRunning = false;
        clearInterval(this.interval);
    }

    reset(callback) {
        this.isRunning = false;
        clearInterval(this.interval);
        this.currentTime = this.isWorkSession ? this.workDuration : this.breakDuration;
        callback(this.currentTime);
    }

    switchMode() {
        if (this.isWorkSession) {
            this.workSessionsCompleted++;
            this.currentTime = (this.workSessionsCompleted % 4 === 0) ? this.longBreakDuration : this.breakDuration;
        } else {
            this.currentTime = this.workDuration;
        }
        this.isWorkSession = !this.isWorkSession;
    }
}