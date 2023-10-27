const colors = ["#C6EBC9", "#70AF85", "#F0E2D0", "#AA8976"];
// brain;
const myUI = document.getElementById("my-ui");

// binding state with listener;
const myState = new Proxy({
    backgroundColor: "#ABCDEF"
}, listener);

const myAction = {
    changeUI: function() {
        // get random color;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        myState.backgroundColor = color;
        // dynamic property;
        myState[Date.now()] = Math.random();

        // update ui with new color;
        myUI.innerHTML = myState.backgroundColor;
        myUI.style.backgroundColor = myState.backgroundColor;
    }
};


myAction.changeUI();
