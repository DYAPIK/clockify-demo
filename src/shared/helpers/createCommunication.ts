import { createStore, Effect, Store } from "effector";

type CommunicationStatus = "initial" | "loading" | "done" | "fail"

export type Communication<Err> = {
  error$: Store<Err | null>,
  status$: Store<CommunicationStatus>,
  isDone$: Store<boolean>,
  isFailed$: Store<boolean>,
  isLoading$: Store<boolean>,
}

function createCommunication<Params, Done, Err>(
  effect: Effect<Params, Done, Err>,
): Communication<Err> {
  const error$: Store<Err | null> = createStore<Err | null>(null)
    .reset(effect)
    .reset(effect.done)
    .on(effect.fail, (_, { error: value }) => value);

  const status$: Store<CommunicationStatus> = createStore<CommunicationStatus>('initial')
    .on(effect, () => "loading")
    .on(effect.done, () => "done")
    .on(effect.fail, () => "fail");

  const isDone$: Store<boolean> = status$.map((state) => state === "done");
  const isFailed$: Store<boolean> = status$.map((state) => state === "fail");
  const isLoading$: Store<boolean> = status$.map((state) => state === "loading");
  
  return { error$, status$, isDone$, isFailed$, isLoading$ };
}

export { createCommunication };
