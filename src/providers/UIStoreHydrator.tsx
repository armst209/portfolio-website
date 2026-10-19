'use client';

import { useEffect } from 'react';
import useUIStore from '@/stores/useUIStore';

/** Restores persisted UI prefs after mount to avoid hydration mismatches. */
const UIStoreHydrator = () => {
  useEffect(() => {
    void useUIStore.persist.rehydrate();
  }, []);

  return null;
};

export default UIStoreHydrator;
