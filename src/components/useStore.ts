import { useEffect, useState } from 'preact/hooks';
import { getStore, StorageUnavailable, type State, type Store } from '../lib/store.ts';

/** Live learner state for islands. `null` until mounted (SSR) or when storage is blocked (the layout shows a banner). */
export function useStore(): { state: State | null; store: Store | null } {
  const [store, setStore] = useState<Store | null>(null);
  const [state, setState] = useState<State | null>(null);
  useEffect(() => {
    let s: Store;
    try {
      s = getStore();
    } catch (e) {
      if (e instanceof StorageUnavailable) return;
      throw e;
    }
    setStore(s);
    setState(s.get());
    return s.subscribe(setState);
  }, []);
  return { state, store };
}
