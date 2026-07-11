const NODES = [
  { x: 30, y: 170 },
  { x: 130, y: 90 },
  { x: 230, y: 170 },
  { x: 330, y: 90 },
  { x: 430, y: 170 },
];

export default function PipelineMotif({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 460 240"
      role="img"
      aria-label="Abstract diagram of connected pipeline nodes"
      className={`mx-auto w-full max-w-md ${className}`.trim()}
    >
      {NODES.slice(1).map((node, i) => (
        <line
          key={`line-${i}`}
          x1={NODES[i].x}
          y1={NODES[i].y}
          x2={node.x}
          y2={node.y}
          stroke="var(--gray)"
          strokeOpacity="0.5"
          strokeWidth="2"
        />
      ))}
      {NODES.map((node, i) => (
        <circle
          key={`node-${i}`}
          cx={node.x}
          cy={node.y}
          r="18"
          fill={i % 2 === 0 ? "var(--teal-deep)" : "var(--teal)"}
        />
      ))}
    </svg>
  );
}
