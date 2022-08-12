import { createEvent, createStore } from 'effector';

const boot = createEvent();

const $ready = createStore(false);

const $$boot = {
  $ready,

  boot
};

$ready.on(boot, () => true);

export { $$boot };
