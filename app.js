const express = require('express');
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

// POST /bfhl
app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    if (!Array.isArray(data)) {
        return res.status(400).json({ is_success: false, message: "Invalid input, 'data' should be an array." });
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item) && isNaN(parseFloat(item)));

    const lowercaseAlphabets = alphabets.filter(char => char === char.toLowerCase());
    const highestLowercaseAlphabet = lowercaseAlphabets.length > 0
        ? [lowercaseAlphabets.sort().slice(-1)[0]]
        : [];

    res.json({
        is_success: true,
        user_id: "vaidehikaushik21012004",  // Replace with your full name and DOB
        email: "vaidehi.kaushik2021@vitbhopal.ac.in",    // Replace with your college email
        roll_number: "21BCE10316",    // Replace with your roll number
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet
    });
});

// GET /bfhl
app.get('/bfhl', (req, res) => {
    res.status(200).json({
        "data": ["A","C","Z","c","i"]
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
