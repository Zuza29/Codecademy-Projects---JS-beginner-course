const getSleepHours = (day) => {
    day.toLowerCase();
    switch (day) {
        case "monday":
            return 8;
            break;
        case "tuesday":
            return 7;
            break;
        case "wednesday":
            return 9;
            break;
        case "thursday":
            return 7;
            break;
        case "friday":
            return 8;
            break;
        case "saturday":
            return 9;
            break;
        case "sunday":
            return 6;
            break;
    }
};

const getActualSleepHours = () => {
    const result =
        getSleepHours("monday") +
        getSleepHours("tuesday") +
        getSleepHours("wednesday") +
        getSleepHours("thursday") +
        getSleepHours("friday") +
        getSleepHours("saturday") +
        getSleepHours("sunday");
    return result;
};

const getIdealSleepHours = (idealAmount) => {
    if (typeof idealAmount !== "number" || idealAmount < 1) {
        return "Please enter a valid amount.";
    }
    return idealAmount * 7;
};

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(9);

    if (actualSleepHours === idealSleepHours) {
        console.log("You got the perfect amount of sleep!");
    } else if (actualSleepHours > idealSleepHours) {
        console.log(
            `You got even more sleep than needed by ${actualSleepHours - idealSleepHours
            } hours.`
        );
    } else {
        console.log(
            `You slept ${idealSleepHours - actualSleepHours
            } hours fewer than you should have. Get some rest.`
        );
    }
};

calculateSleepDebt();
