export class UI {
    constructor(timer) {
        this.timer = timer;
        this.display = document.getElementById('timer-display');
        this.startBtn = document.getElementById('start-btn');
        this.pauseBtn = document.getElementById('pause-btn');
        this.resetBtn = document.getElementById('reset-btn');
        this.workInput = document.getElementById('work-duration');
        this.breakInput = document.getElementById('break-duration');

        this.startBtn.addEventListener('click', () => {
            this.timer.start(this.updateDisplay.bind(this));
        });
        
        this.pauseBtn.addEventListener('click', () => {
            this.timer.pause();
        });
        
        this.resetBtn.addEventListener('click', () => {
            this.timer.reset(this.updateDisplay.bind(this));
        });

        this.workInput.addEventListener('change', () => this.updateSettings());
        this.breakInput.addEventListener('change', () => this.updateSettings());

        this.updateDisplay(this.timer.currentTime);
    }

    updateDisplay(time) {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        this.display.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    updateSettings() {
        const workTime = parseInt(this.workInput.value, 10) || 25;
        const breakTime = parseInt(this.breakInput.value, 10) || 5;
        this.timer.workDuration = workTime * 60;
        this.timer.breakDuration = breakTime * 60;
        this.timer.reset(this.updateDisplay.bind(this));
    }
}





