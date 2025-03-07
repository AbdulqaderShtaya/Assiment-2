import { Timer } from './timer.js';
import { UI } from './ui.js';
import { Settings } from './settings.js';
import { Notifications } from './notifications.js';
import './style.css'; // استيراد ملف CSS حتى يتعامل معه Webpack

document.addEventListener('DOMContentLoaded', () => {
    // إنشاء كائنات للفئات الأساسية
    const settings = new Settings();
    settings.loadSettings();

    const timer = new Timer(settings.workDuration, settings.breakDuration);
    const ui = new UI(timer);

    // تشغيل الإشعارات عند انتهاء المؤقت
    timer.start((remainingTime) => {
        ui.updateDisplay(remainingTime);
        if (remainingTime === 0) {
            Notifications.playSound();
        }
    });

    // تحديث القيم عند تغيير إعدادات المستخدم
    document.getElementById('work-duration').addEventListener('change', (event) => {
        const workTime = parseInt(event.target.value, 10) || 25;
        settings.saveSettings(workTime, settings.breakDuration);
        timer.workDuration = workTime * 60;
        timer.reset(ui.updateDisplay.bind(ui));
    });

    document.getElementById('break-duration').addEventListener('change', (event) => {
        const breakTime = parseInt(event.target.value, 10) || 5;
        settings.saveSettings(settings.workDuration, breakTime);
        timer.breakDuration = breakTime * 60;
        timer.reset(ui.updateDisplay.bind(ui));
    });
});