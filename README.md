# ModuLib

ModuLib is a versatile and robust component library designed for React projects. It aims to simplify the development process by providing a collection of reusable and customizable components. Each component is well-documented and can be viewed in an interactive environment using Storybook. The library leverages Vue for component development, ensuring a seamless integration and optimal performance.

## Features
- Reusable Components: A wide range of reusable components to accelerate development.
- Customizable: Highly customizable to fit the needs of your project.
- Storybook Integration: Interactive documentation with Storybook to view and test components.
- Vite-Based Development: Developed using Vite to ensure performance and flexibility.
- Responsive Design: Components are designed to be fully responsive and work across various screen sizes.

## Getting Started

To start using ModuLib in your React project, add it as a dependency in your package.json file and install it via npm. You can link directly to the GitHub repository:

First, add ModuLib to your package.json dependencies:

```
"dependencies": {
  "modulib": "https://github.com/gregorisbachtsevanos/ModuLib/tree/master"
}
```

Then, install the dependencies using npm:
```
npm i
```

## Usage
Import the necessary components into your React application:

```
import { Button, Card, Modal } from 'modulib';

function App() {
  return (
    <div>
      <Button label="Click Me" />
      <Card title="Card Title" content="Card Content" />
      <Modal isOpen={true} onClose={() => console.log('Modal Closed')} />
    </div>
  );
}
```

## Documentation and Storybook
ModuLib uses Storybook for interactive component documentation. To view the components and their usage, run Storybook:

```
npm run storybook
```

This will start the Storybook server, and you can view the components in your browser at http://localhost:6006.

License
ModuLib is licensed under the MIT License. See the LICENSE file for more details.

Support
If you have any questions or need support, please open an issue on our GitHub repository.
