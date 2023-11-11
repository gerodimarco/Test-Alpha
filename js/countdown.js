
simplyCountdown('#countdown', {
    year: 2023, 
    month: 12, 
    day: 1, 
    hours: 13, 
    minutes: 0, 
    seconds: 0, 
    words: { 
        days: { singular: 'day', plural: 'days' },
        hours: { singular: 'hour', plural: 'hours' },
        minutes: { singular: 'minute', plural: 'minutes' },
        seconds: { singular: 'second', plural: 'seconds' }
    },
    plural: true, 
    inline: false, 
    inlineClass: 'simply-countdown-inline',
    enableUtc: false, 
    onEnd: function() {
        alert('Countdown Complete');
        return; 
    },
    refresh: 1000, 
    sectionClass: 'simply-section', 
    amountClass: 'simply-amount', 
    wordClass: 'simply-word', 
    zeroPad: false,
    countUp: false
});