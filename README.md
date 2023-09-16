# Ques-1, ans:- 3 Project features is given below:
### 1. You can't add same course twice. If you select same course more than one then it will show a toast.
### 2. The remaining course hour can't be less than zero or more than twenty.
### 3. when you select the courses, the course title will add serially in the sidebar.

# Ques-2, ans:- Discussing how I managed the state in my assignment project is given below:
#### "In the project, I start by declaring the state using `useState` in the `App.jsx` file. Then, I define a handler function. Next, I pass this state as props to the `Cards.jsx` component.

#### In the `Card.jsx` component, I use an `onClick` event on a button. When the button is clicked, it triggers a callback function. In this callback function, I pass the `card` prop, which contains all the necessary data.

#### Following this, I send this data to the `Sidebar.jsx` component to display the title in the project's sidebar."