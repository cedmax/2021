const currentVersion = 'v3';

const Icon = ({ type, className }: { type: string; className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
  >
    <use xlinkHref={`/sprite-${currentVersion}.svg#${type}`} />
  </svg>
);

export default Icon;
