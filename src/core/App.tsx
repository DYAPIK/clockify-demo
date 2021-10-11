import { DepsProvider } from './deps';
import { Root } from 'pages';

function App() {
  return (
    <DepsProvider>
      <Root />
    </DepsProvider>
  );
}

export { App };
