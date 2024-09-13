import clsx from 'clsx';
import './not-found-page.scss';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--login">
        <div className={clsx('notFound', 'container')}>
          <h1 className={'notFound__title'}>404. Page not found</h1>
          <a href='/'>
            Вернуться на главную
          </a>
        </div>
      </main>
    </div>
  );
}

export default NotFoundPage;
