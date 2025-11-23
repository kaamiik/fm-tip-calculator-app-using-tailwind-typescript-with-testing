function Header({ className = '' }: { className: string }) {
  return (
    <header className={className}>
      <a
        href="/"
        aria-labelledby="home"
        className="focus-visible:outline-very-dark-cyan outline-0 focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        <span id="home" hidden>
          SPLITTER HOME
        </span>
        <img src="/images/logo.svg" alt="" className="mx-auto" />
      </a>
    </header>
  );
}

export default Header;
