export function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
  if (/^[a-zA-Z]$/.test(e.key)) {
    e.preventDefault();
  }
}
