 const form = document.getElementById("otpForm");
        const inputs = document.querySelectorAll(".otp-inputs input");
        const message = document.getElementById("message");
        const resetBtn = document.getElementById("resetBtn");
        // Auto-move to next input
        inputs.forEach((input, index) => {
            input.addEventListener("input", () => {
                if (input.value.length === 1 && index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            });
        });
        // OTP Verify Event
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            let otp = "";
            inputs.forEach(input => otp += input.value);
            if (otp.length === 4) {
                message.textContent = "✅ OTP Verified Successfully!";
                message.className = "message success";
            } else {
                message.textContent = "❌ Please enter all 4 digits!";
                message.className = "message error";
            }
            message.style.display = "block";
        });
        // Reset Button Event
        resetBtn.addEventListener("click", () => {
            inputs.forEach(input => input.value = "");
            message.style.display = "none";
            inputs[0].focus(); // focus back to first input
        });