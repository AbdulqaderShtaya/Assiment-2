export class Notifications {
    static playSound() {
        const audio = new Audio('notification.mp3');
        audio.play();
    }
}