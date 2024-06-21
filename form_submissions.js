$(document).ready(function(){
    $('#contactForm').submit(function(event) {
        event.preventDefault();

        var formData = {
            name: $("input[name=name]").val(),
            email: $("input[name=email]").val(),
            subject: $("input[name=subject]").val(),
            content: $("textarea[name=message]").val()
        };

        $.ajax({
            url: "https://localhost:44303/api/formsubmission",
            type: "POST",
            data: JSON.stringify(formData),
            contentType: "application/json",
            success: function(response) {
                alert("Form submitted successfully: " + response);
            },
            error: function(xhr, status, error) {
                alert("Form submission failed: " + xhr.responseText);
            }
        });
    });
});
