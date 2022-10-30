import { signal } from '@preact/signals';

const count = signal(0);

export function Counter() {
  return (
    <button type="button" onClick={() => (count.value += 1)}>
      Counter {count.value}
    </button>
  );
}
