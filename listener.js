// I'm a listener;
const listener = {
    set: function(obj, prop, value) {
        console.log("old value", obj[prop] || "", "\tnew value", value);
        obj[prop] = value;
    }
};
