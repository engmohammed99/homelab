let counter1=document.getElementById("counter1");
let counter2=document.getElementById("counter2");
console.log(counter1)
let count1 = 0;
let count2 = 0;

function increment11(){
    count1 += 1;
    counter1.textContent = count1
}
function increment12(){
    count1 += 2;
    counter1.textContent = count1
}
function increment13(){
    count1 += 3;
    counter1.textContent = count1
}


function increment21(){
    count2 += 1;
    counter2.textContent = count2
}
function increment22(){
    count2 += 2;
    counter2.textContent = count2
}
function increment23(){
    count2 += 3;
    counter2.textContent = count2
}

/*better version : 

<h1 id="counter1">0</h1>
<h1 id="counter2">0</h1>

<!-- Home team -->
<button onclick="increment(1, 1)">+1</button>
<button onclick="increment(1, 2)">+2</button>
<button onclick="increment(1, 3)">+3</button>

<!-- Guest team -->
<button onclick="increment(2, 1)">+1</button>
<button onclick="increment(2, 2)">+2</button>
<button onclick="increment(2, 3)">+3</button>

<script>
let counters = {
    1: { value: 0, element: document.getElementById("counter1") },
    2: { value: 0, element: document.getElementById("counter2") }
};

function increment(team, points) {
    counters[team].value += points;
    counters[team].element.textContent = counters[team].value;
}

</script>
*/