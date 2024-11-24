# Savings Tracker App

A mobile app built using React Native, allowing users to track their savings goals and monitor progress toward achieving them. The app allows users to define multiple savings goals, track their progress, and visualize it with interactive components like progress bars and goal cards.

## Features

- **Track Savings Goals**: Define and track savings goal with target amounts and current savings.
- **Progress Visualization**: Visualize your savings progress with a progress bar for your goal.
- **Goal Overview**: See a summary of your goal with detailed information on savings and progress.
- **Real-time Updates**: Update savings information and see progress in real-time.

## Tech Stack
- **React Native**: For building the mobile app.
- **TypeScript**: For static type checking.
- **React Context API**: For state management.
- **Styled Components**: For styling the components.

## Installation

To set up and run the Savings Tracker app locally, follow the instructions below.

### Prerequisites

Ensure you have the following installed on your local machine:

- **Node.js**: [Download and Install Node.js](https://nodejs.org/)
- **npm**: (Preferred package manager) [Install npm](https://docs.npmjs.com/cli/v9/commands/npm-install)
- **React Native CLI**: [Install React Native CLI](https://reactnative.dev/docs/environment-setup)

### Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/Jclinch/savings-tracker.git
    cd savings-tracker
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Install required CocoaPods for iOS (if using macOS):

    ```bash
    cd ios
    pod install
    cd ..
    ```

4. Run the app:

    - For iOS:

    ```bash
    npm ios
    ```

    - For Android:

    ```bash
    npm android
    ```
## Contributing

Contributions to the Savings Tracker app are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

Please ensure that your code follows the existing style and includes tests where applicable.

## Contact

If you have any questions or suggestions, feel free to open an issue or contact me at [sunnyugwu2011@gmail.com](mailto:sunnyugwu2011@gmail.com).
