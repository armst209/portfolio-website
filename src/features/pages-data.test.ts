import { isPrivateRoute } from '@/lib/routes';
import { artistInquirySchema } from './artists/schemas';
import {
  sampleCollection,
  splitCollection,
} from './collection/data/sample-collection';
import { getCountdown } from './events/data';
import { formatReleaseWindow } from './vault/data/sample-vault';

describe('getCountdown', () => {
  const start = Date.UTC(2026, 0, 1);

  it('breaks the remaining time into units', () => {
    const now = start - (2 * 86_400_000 + 3 * 3_600_000 + 4 * 60_000 + 5000);
    expect(getCountdown(start, now)).toEqual({
      days: 2,
      hours: 3,
      minutes: 4,
      seconds: 5,
    });
  });

  it('returns null once the event has started', () => {
    expect(getCountdown(start, start)).toBeNull();
    expect(getCountdown(start, start + 1)).toBeNull();
  });
});

describe('formatReleaseWindow', () => {
  it('formats both dates in UTC', () => {
    expect(formatReleaseWindow('2021-11-12', '2021-11-26')).toBe(
      'Nov 12, 2021 - Nov 26, 2021',
    );
  });
});

describe('splitCollection', () => {
  it('separates live and expired biscuits', () => {
    const { live, expired } = splitCollection(sampleCollection);
    expect(live.every((release) => !release.isExpired)).toBeTrue();
    expect(expired.every((release) => release.isExpired)).toBeTrue();
    expect(live.length + expired.length).toBe(sampleCollection.length);
  });
});

describe('artistInquirySchema', () => {
  it('requires an email, artist name and message', () => {
    const result = artistInquirySchema.safeParse({
      email: 'nope',
      artistName: '  ',
      message: '',
    });
    expect(result.success).toBeFalse();
    expect(
      result.error?.issues.map((issue) => issue.path[0]),
    ).toIncludeSameMembers(['email', 'artistName', 'message']);
  });
});

describe('isPrivateRoute', () => {
  it('guards the account and collection pages only', () => {
    expect(isPrivateRoute('/account')).toBeTrue();
    expect(isPrivateRoute('/collection')).toBeTrue();
    expect(isPrivateRoute('/collections')).toBeFalse();
    expect(isPrivateRoute('/vault')).toBeFalse();
  });
});
