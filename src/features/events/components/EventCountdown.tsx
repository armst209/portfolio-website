'use client';

import { useSyncExternalStore } from 'react';
import { getCountdown } from '../data';

const subscribe = (onTick: () => void) => {
  const id = setInterval(onTick, 1000);
  return () => clearInterval(id);
};
// Second-resolution snapshot so React re-renders once per tick.
const getNow = () => Math.floor(Date.now() / 1000) * 1000;
// The server has no "now" worth rendering; the client fills it in.
const getServerNow = () => null;

const EventCountdown = ({ startsAt }: { startsAt: string }) => {
  const now = useSyncExternalStore(subscribe, getNow, getServerNow);
  if (now === null) {
    return (
      <div
        aria-hidden
        className="h-24 animate-pulse rounded-lg bg-surface"
      />
    );
  }

  const countdown = getCountdown(new Date(startsAt).getTime(), now);
  if (!countdown) {
    return (
      <p className="rounded-lg bg-surface px-5 py-4 font-bold text-subdued">
        This event has ended. Thanks to everyone who came out!
      </p>
    );
  }

  return (
    <dl
      aria-label="Time until the event"
      className="grid grid-cols-4 gap-2">
      {Object.entries(countdown).map(([unit, value]) => (
        <div
          key={unit}
          className="flex flex-col-reverse items-center rounded-lg bg-surface py-4">
          <dt className="text-xs font-bold tracking-widest text-subdued uppercase">
            {unit}
          </dt>
          <dd className="font-display text-3xl font-extrabold text-groovy-yellow tabular-nums md:text-4xl">
            {value}
          </dd>
        </div>
      ))}
    </dl>
  );
};

export default EventCountdown;
