# Quiz Application

Welcome to the Quiz Application! This project is a web-based quiz application designed to test users' general knowledge on various topics. The application is built using HTML, CSS, and JavaScript, and it provides an interactive and engaging quiz-taking experience.

## Features

- **Dynamic Questions:** Questions are loaded dynamically from a JSON file.
- **Timer Functionality:** Each question must be answered within 15 seconds.
- **Score Calculation:** The user's score is calculated based on correct answers.
- **Retry Option:** Users can retry the quiz after completing it.
- **Responsive Design:** The application is responsive and works well on various screen sizes.
- **Navigation Buttons:** Previous and Next buttons allow users to navigate through the questions.

## Technologies Used

- HTML
- CSS
- JavaScript

## Project Structure

```
quiz-app/
│
├── index.html          # Main HTML file
├── style.css           # CSS file for styling
├── script.js           # JavaScript file for functionality
├── questions.json      # JSON file containing quiz questions
└── README.md           # This README file
```

## Getting Started

### Prerequisites

- A modern web browser (e.g., Chrome, Firefox, Edge)

### Installation

1. **Clone the Repository:**
   ```sh
   git clone https://github.com/rahulchauhan04/quiz-app.git
   cd quiz-app
   ```

2. **Open the Application:**
   Open `index.html` in your web browser to start the quiz application.

## Usage

1. **Start the Quiz:**
   - Click on the "Start Quiz" button on the home page to begin the quiz.

2. **Answer Questions:**
   - Select the correct answer for each question within 15 seconds.
   - Use the "Next" and "Previous" buttons to navigate through the questions.

3. **View Results:**
   - After completing the quiz, your score will be displayed along with a message.
   - If your score is below 50%, an upset emoji will be displayed.

4. **Retry the Quiz:**
   - Click the "Retry Quiz" button to restart the quiz.

## Customization

### Adding Questions

To add more questions, update the `questions.json` file with new sections and questions. Each question should have the following structure:

```json
{
    "section": "Section Name",
    "questions": [
        {
            "question": "Question text?",
            "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
            "answer": "Correct Option"
        }
    ]
}
```

### Styling

To customize the styling of the quiz application, update the `style.css` file. You can change colors, fonts, and layout styles to match your preferences.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please create an issue or submit a pull request.

## Contact

For any questions or feedback, please contact:
- **Name:** Rahul Chauhan
- **Email:** [rahulg0004@gmail.com](mailto:rahulg0004@gmail.com)

---

Enjoy the quiz!
```

This README file includes a project description, features, technologies used, project structure, installation instructions, usage guidelines, customization options, contribution guidelines, and contact information. Feel free to customize it further to better fit your project's details.