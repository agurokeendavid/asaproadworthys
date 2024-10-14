// Toggle chatbot window visibility
document.getElementById("open-chatbot").addEventListener("click", function() {
    document.getElementById("chatbot-window").classList.remove("d-none");
});

document.getElementById("close-chatbot").addEventListener("click", function() {
    document.getElementById("chatbot-window").classList.add("d-none");
});

// Simulate chatbot conversation
document.getElementById("send-message").addEventListener("click", function() {
    let userMessage = document.getElementById("chat-input").value;
    if (userMessage.trim() !== "") {
        appendMessage("You", userMessage);

        // Simulate bot response
        setTimeout(function() {
            handleBotResponse(userMessage);
        }, 1000);
    }
    document.getElementById("chat-input").value = "";
});

function appendMessage(sender, message) {
    let chatMessages = document.getElementById("chat-messages");
    let newMessage = document.createElement("div");
    newMessage.classList.add("mb-2");

    if (sender === "You") {
        newMessage.innerHTML = `<strong>${sender}:</strong> ${message}`;
    } else {
        newMessage.innerHTML = `<strong>${sender} (Bot):</strong> ${message}`;
    }

    chatMessages.appendChild(newMessage);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Auto scroll to latest message
}

// Simple bot response function
function handleBotResponse(userMessage) {
    let botResponse = "Sorry, I can't understand your query at the moment.";

    // FAQ responses
    if (userMessage.toLowerCase().includes("faq")) {
        botResponse = "Here are some FAQs:\n1. How can I contact support?\n2. What are your working hours?";
    } else if (userMessage.toLowerCase().includes("contact")) {
        botResponse = "You can reach us at info@warehouse.com or +(1) 123-878-1649.";
    }

    appendMessage("Chatbot", botResponse);
}