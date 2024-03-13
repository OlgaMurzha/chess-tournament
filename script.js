function showAnswer(paragraphId) {
    var paragraph = document.getElementById(paragraphId);
    var question = document.getElementById('question'+paragraphId.slice(-1));

    if (!paragraph.classList.contains('show-answer')) {
        // Calculate the height of the answer content
        var maxHeight = paragraph.scrollHeight + 'px';
        
        // Apply the calculated max-height
        paragraph.style.maxHeight = maxHeight;
        paragraph.classList.add('show-answer');
        question.classList.add('rotate');
    } else {
        // Collapse the answer smoothly
        paragraph.style.maxHeight = '0';
        paragraph.classList.remove('show-answer');
        question.classList.remove('rotate');
    }
}


document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent form submission
    
    // Display the message container and message
    document.getElementById("messageContainer").style.display = "block";
    document.getElementById("submittedMessage").textContent = "Registration submitted!";
    
    // Optionally, clear the form fields after submission
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("rating").selectedIndex = 0;
    document.getElementById("participation-true").checked = false;
    document.getElementById("participation-false").checked = false;
  });
  