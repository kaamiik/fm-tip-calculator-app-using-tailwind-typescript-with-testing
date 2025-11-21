function Header({ className = '' }: { className: string }) {
  return (
    <header className={className}>
      <a href="/" aria-labelledby="home">
        <span id="home" hidden>
          SPLITTER HOME
        </span>
        <img src="/images/logo.svg" alt="" className="mx-auto" />
      </a>
    </header>
  );
}

export default Header;
