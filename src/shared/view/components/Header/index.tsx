import { block } from 'bem-cn';

import './style.scss';

const b = block('clockify-header');

function Header() {
  return (
    <header className={b()}>
      <div>
        Clockify Demo
      </div>
    </header>
  );
}

export { Header };
