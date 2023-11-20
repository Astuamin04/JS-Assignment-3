document.getElementById('student-info').innerHTML = `
    <p>Student ID: 200543616 </p>
    <p>Name: Astu Amin</p>
`;

let currentStep = 1;
const totalSteps = 5;
const pizzaOrder = {
    size: '',
    crust: '',
    sauce: '',
    cheese: '',
    toppings: []
};

function updateStepDisplay() {
    for (let i = 1; i <= totalSteps; i++) {
        document.getElementById(`step${i}`).classList.remove('active-step');
    }
    document.getElementById(`step${currentStep}`).classList.add('active-step');
    document.getElementById('prev-button').style.display = currentStep === 1 ? 'none' : 'inline';
    document.getElementById('next-button').style.display = currentStep === totalSteps ? 'none' : 'inline';
    document.getElementById('order-button').style.display = currentStep === totalSteps ? 'inline' : 'none';
}

function nextStep() {
    if (currentStep < totalSteps) {
        currentStep++;
        updateStepDisplay();
    }
}

function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        updateStepDisplay();
    }
}

function placeOrder() {
    // Gather data from form elements
    pizzaOrder.size = document.getElementById('size').value;
    pizzaOrder.crust = document.getElementById('crust').value;
    pizzaOrder.sauce = document.getElementById('sauce').value;
    pizzaOrder.cheese = document.getElementById('cheese').value;
    pizzaOrder.toppings = Array.from(document.querySelectorAll('input[name="toppings"]:checked')).map(el => el.value);

    // Display order summary and success message
    displayOrder();
}

function displayOrder() {
    let orderSummary = "<h3>Your Pizza Order Summary:</h3>";

    orderSummary += "<p><strong>Size:</strong> " + pizzaOrder.size + "</p>";
    orderSummary += "<p><strong>Crust:</strong> " + pizzaOrder.crust + "</p>";
    orderSummary += "<p><strong>Sauce:</strong> " + pizzaOrder.sauce + "</p>";
    orderSummary += "<p><strong>Cheese:</strong> " + pizzaOrder.cheese + "</p>";

    if (pizzaOrder.toppings.length > 0) {
        orderSummary += "<p><strong>Toppings:</strong> " + pizzaOrder.toppings.join(", ") + "</p>";
    } else {
        orderSummary += "<p><strong>Toppings:</strong> None</p>";
    }

    document.getElementById('pizza-output').innerHTML = orderSummary + '<p>Your pizza order has been placed successfully!</p>';
}

// Initialize the first step
updateStepDisplay();
