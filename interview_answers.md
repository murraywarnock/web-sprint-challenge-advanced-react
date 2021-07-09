# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
A stateful component is either a class component that uses state to modify state data, or a functional component that uses hooks to do the same thing. A functional component that does not use hooks is stateless.

2. When does a componentWillMount function be called? What about a componentWillUpdate?
componentWillMount is called before the component is first rendered. componentWillUpdate is called after the state changes, but before the component is re-rendered.

3. Define stateful logic.
Stateful logic is either dependent on, or manipulates, state data.

4. What are the three step of creating a successful test? What is done in each phase?
Arrange - create conditions for test. Import dependencies, set state appropiately, pass in props, render visual component, if necessary; explicitly identify items (elements, etc) to be tested.

Act - perform an action on the environment Arranged. Likely a user action like an populating an input and/or clicking a submit button.

Assert - perform a check that the Act has resulted in an expected outcome - likely a change in one of the items to be tested identified in Arrange.
