(
    function() {
        let name = 'DIO';
        return name;
    }
)();

(
    function(a,b) {
        return a + b;
    }
)(1,2);

const soma3 = (
    function() {
        return a + b;
    }
)(1,2);

console.log(soma3);