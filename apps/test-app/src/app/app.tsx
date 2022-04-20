// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <>
      <NxWelcome title="test-app" />
      <span>Trigger run 1</span>
    </>
  );
}

export default App;
