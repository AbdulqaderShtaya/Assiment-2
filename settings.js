export class Settings {
    constructor() {
        this.workDuration = 25;
        this.breakDuration = 5;
    }

    saveSettings(work, breakTime) {
        this.workDuration = work;
        this.breakDuration = breakTime;
        localStorage.setItem('workDuration', work);
        localStorage.setItem('breakDuration', breakTime);
    }

    loadSettings() {
        const work = localStorage.getItem('workDuration');
        const breakTime = localStorage.getItem('breakDuration');
        if (work && breakTime) {
            this.workDuration = parseInt(work);
            this.breakDuration = parseInt(breakTime);
        }
    }
}