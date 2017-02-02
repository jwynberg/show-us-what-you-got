import Logger from './logger';

class BossHog {

    constructor() {
        
    }

// performs a number of BossHog translations equal to the 'count' and uses the logger helper
// to log them out to the console
    run(count) {
        let logger = new Logger();

        for(let i = 1; i <= count; i++) {
            logger.log(this.translate(i));
        }
    }

// takes in a 'number' and returns the translation, according to predefined BossHog rules
    translate(number) {
        if(number % 15 === 0) {
            return "BossHog";
        }
        else if(number % 5 === 0) {
            return "Hog";
        }
        else if(number % 3 === 0) {
            return "Boss";
        }
        else {
            return number;
        }
    }
}

module.exports = BossHog;