const listener = {
    set: function(obj, prop, value) {
        console.log("old value", obj[prop] || "", "\tnew value", value, " of ", prop);
        obj[prop] = value;
    }
};
