document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("scamForm");

    if (!form) {
        console.log("Form not found!");
        return;
    }


    form.addEventListener("submit", function (event) {

        event.preventDefault();


        const company =
            document.getElementById("company").value;

        const fee =
            Number(document.getElementById("fee").value);

        const contact =
            document.getElementById("contact").value;

        const certificate =
            document.getElementById("certificate").value;

        const urgency =
            document.getElementById("urgency").value;


        let score = 0;

        let warnings = [];


        // PAYMENT CHECK

        if (fee > 0) {

            score += 35;

            warnings.push(
                "Registration or training fee is requested."
            );
        }


        // CONTACT CHECK

        if (contact === "personal") {

            score += 15;

            warnings.push(
                "Personal email address is being used."
            );
        }


        if (contact === "whatsapp") {

            score += 20;

            warnings.push(
                "Communication is mainly through WhatsApp."
            );
        }


        if (contact === "telegram") {

            score += 25;

            warnings.push(
                "Communication is mainly through Telegram."
            );
        }


        // PROMISE CHECK

        if (certificate === "guaranteed") {

            score += 20;

            warnings.push(
                "Guaranteed job or unrealistic promise detected."
            );
        }


        if (certificate === "certificate") {

            score += 25;

            warnings.push(
                "Certificate is linked to payment."
            );
        }


        // PRESSURE CHECK

        if (urgency === "yes") {

            score += 20;

            warnings.push(
                "You are being pressured to pay quickly."
            );
        }


        // MAX SCORE

        if (score > 100) {
            score = 100;
        }


        // RESULT ELEMENTS

        const result =
            document.getElementById("result");

        const resultIcon =
            document.getElementById("resultIcon");

        const resultTitle =
            document.getElementById("resultTitle");

        const resultMessage =
            document.getElementById("resultMessage");

        const scoreElement =
            document.getElementById("score");

        const warningsElement =
            document.getElementById("warnings");


        // SCORE

        scoreElement.innerText = score;


        // WARNINGS

        warningsElement.innerHTML = "";


        if (warnings.length > 0) {

            let html =
                "<div class='warning-list'>" +
                "<h4>⚠️ Warning Signs Found</h4>" +
                "<ul>";

            warnings.forEach(function (item) {

                html += "<li>" + item + "</li>";

            });

            html += "</ul></div>";

            warningsElement.innerHTML = html;

        }


        // FINAL RESULT

        if (score >= 60) {

            resultIcon.innerText = "🚨";

            resultTitle.innerText =
                "High Risk – Be Careful!";

            resultMessage.innerText =
                "Several warning signs were detected. Verify the company before paying or sharing personal information.";

        }

        else if (score >= 30) {

            resultIcon.innerText = "⚠️";

            resultTitle.innerText =
                "Medium Risk – Verify Carefully";

            resultMessage.innerText =
                "Some warning signs were detected. Research the company before proceeding.";

        }

        else {

            resultIcon.innerText = "✅";

            resultTitle.innerText =
                "Low Risk – No Major Warning Signs";

            resultMessage.innerText =
                "No major warning indicators were detected from the information provided.";

        }


        // SHOW RESULT

        result.classList.remove("hidden");

        result.scrollIntoView({
            behavior: "smooth"
        });

    });

});


function resetChecker() {

    const form =
        document.getElementById("scamForm");

    const result =
        document.getElementById("result");

    form.reset();

    document.getElementById("fee").value = "0";

    result.classList.add("hidden");

}
