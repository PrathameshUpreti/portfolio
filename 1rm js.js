const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    const repetationInput = document.querySelector("#repetation");
    const weightLiftedInput = document.querySelector("#weight-lifted");
    const rm = document.querySelector("#rm");

    const repetation = parseFloat(repetationInput.value);
    const weightLifted = parseFloat(weightLiftedInput.value);
    const exercise = document.querySelector("#exercise").value;
    
    console.log("Repetation:", repetation);
    console.log("Weight Lifted:", weightLifted);
    console.log("Exercise:", exercise);

    let oneRM;

    switch (exercise) {
        case 'Squats':
            oneRM = weightLifted * (36 / (37 - repetation));
            break;
        case 'Deadlift':
            oneRM = (weightLifted * repetation * 0.0333) + weightLifted;
            break;
        case 'Bench Press':
            oneRM = weightLifted * (1 + repetation / 30);
            break;
        case 'Overhead Press':
            oneRM = weightLifted / (1.0278 - (0.0278 * repetation));
            break;
        default:
            console.error("Invalid exercise:", exercise);
            rm.innerHTML = "Invalid exercise";
            return;
    }

    if (isNaN(oneRM) || oneRM <= 0) {
        console.error("Invalid oneRM value:", oneRM);
        rm.innerHTML = "Invalid oneRM value";
    } else {
        rm.innerHTML = oneRM;
    }
});

