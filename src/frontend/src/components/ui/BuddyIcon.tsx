import brandLogoUrl from '../../assets/favicon.svg';
import { POLARIS_TEAL } from './PolarisLogo';

/** CrownbioBuddy 的标识（favicon.svg）。size 为正方形容器边长，图片按原比例居中。

    ``dot`` 保留原 PolarisMark 的用法：右上角那个绿点。Buddy 拿它当状态——
    思考/作答中只画标识主体，答完才把点补上。 */
export function BuddyIcon({
  size = 26,
  title = 'CrownbioBuddy',
  dot = true,
}: {
  size?: number;
  title?: string;
  dot?: boolean;
}) {
  return (
    <span
      role="img"
      aria-label={title}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        flexShrink: 0,
      }}
    >
      <img src={brandLogoUrl} alt="" style={{ height: '100%', width: '100%', objectFit: 'contain', display: 'block' }} />
      {dot && (
        <span
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: Math.max(4, size * 0.18),
            height: Math.max(4, size * 0.18),
            borderRadius: '50%',
            background: POLARIS_TEAL,
          }}
        />
      )}
    </span>
  );
}
