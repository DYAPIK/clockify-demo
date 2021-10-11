import { Header } from '../Header';

import { block } from 'bem-cn'

import './style.scss';

type Props = {
  children: JSX.Element;
};

const b = block('base-layout')

function BaseLayout({ children }: Props) {
  return (
    <main className={b()}>
      <Header />
      <div className={b('content')}>{children}</div>
    </main>
  );
}

export { BaseLayout };
