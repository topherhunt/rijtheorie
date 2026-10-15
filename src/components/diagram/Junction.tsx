/** @jsxImportSource preact */
// Top-down junction diagram, north up, traffic drives on the right.
// Geometry is drawn in a local frame for an arm coming from the south and rotated into place,
// so every arm/vehicle shares one set of coordinates (see ROT).
import type { Diagram, Vehicle } from '../../lib/schema.ts';

const S = 400; // viewBox size
const C = S / 2; // centre
const H = 40; // half road width (one lane each way, lane = 40)
const RING = H + 34; // roundabout outer radius
const RMID = 54; // radius of the roundabout driving line
const BP = 12; // gap between road edge and fietspad
const BW = 16; // fietspad width
const GAP = 12; // stop line to first vehicle (leaves room for haaientanden)
const ROT = { s: 0, w: 90, n: 180, e: 270 } as const;
type Dir = keyof typeof ROT;

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

const COLORS: Record<Vehicle['kind'], string> = {
  car: '#2563eb', truck: '#7c3aed', bus: '#0891b2', bike: '#16a34a', moped: '#ea580c',
  tram: '#ca8a04', pedestrian: '#db2777', police: '#1e3a8a', ambulance: '#facc15',
};
const SIZE: Record<Vehicle['kind'], [number, number]> = {
  car: [20, 36], truck: [24, 60], bus: [24, 64], bike: [7, 22], moped: [9, 24],
  tram: [22, 90], pedestrian: [12, 12], police: [20, 36], ambulance: [22, 40],
};
const LABEL_R = 13;

function Arm({ dir, arm, edge }: { dir: Dir; arm: NonNullable<Diagram['arms'][Dir]>; edge: number }) {
  const len = S - (C + H);
  return (
    <g transform={`rotate(${ROT[dir]} ${C} ${C})`}>
      <rect x={C - H} y={C + H} width={2 * H} height={len} fill={arm.surface === 'unpaved' ? '#c8a97e' : '#6b7280'} />
      {arm.surface === 'unpaved' && <rect x={C - H} y={C + H} width={2 * H} height={len} fill="url(#gravel)" />}
      {arm.surface === 'paved' && <line x1={C} y1={edge + 10} x2={C} y2={S} stroke="#fff" stroke-width={2} stroke-dasharray="12 10" />}
      {arm.tram && (
        <g stroke="#d1d5db" stroke-width={2}>
          <line x1={C - 6} y1={C + H} x2={C - 6} y2={S} />
          <line x1={C + 6} y1={C + H} x2={C + 6} y2={S} />
        </g>
      )}
      {arm.bike && (
        <g fill="#b91c1c">
          <rect x={C + H + BP} y={C + H + BP} width={BW} height={len - BP} />
          <rect x={C - H - BP - BW} y={C + H + BP} width={BW} height={len - BP} />
        </g>
      )}
      {arm.shark && (
        <g fill="#fff">
          {[0, 1, 2, 3].map((i) => {
            const x = C + 2 + i * 9.5;
            const y = edge + 2;
            return <path key={i} d={`M${x} ${y} L${x + 8} ${y} L${x + 4} ${y + 9} Z`} />;
          })}
        </g>
      )}
      {arm.sign && (() => {
        const sx = C + H + (arm.bike ? BP + BW : 0) + 24;
        const sy = edge + 6;
        return (
          <g>
            <line x1={sx} y1={sy + 18} x2={sx} y2={sy + 46} stroke="#374151" stroke-width={2} />
            <image href={`${BASE}/signs/${arm.sign}.webp`} x={sx - 18} y={sy - 18} width={36} height={36} transform={`rotate(${-ROT[dir]} ${sx} ${sy})`} />
          </g>
        );
      })()}
    </g>
  );
}

function VehicleShape({ v, laneX, frontY }: { v: Vehicle; laneX: number; frontY: number }) {
  const [w, h] = SIZE[v.kind];
  const color = v.you ? '#dc2626' : COLORS[v.kind];
  if (v.kind === 'pedestrian') return <circle cx={laneX} cy={frontY + 6} r={6} fill={color} stroke="#fff" stroke-width={1.5} />;
  const two = v.kind === 'bike' || v.kind === 'moped';
  return (
    <g>
      <rect x={laneX - w / 2} y={frontY} width={w} height={h} rx={two ? 3 : 4} fill={color} stroke="#111827" stroke-width={1} />
      {two && <circle cx={laneX} cy={frontY + h / 2} r={4} fill="#fde68a" stroke="#111827" stroke-width={1} />}
      {!two && v.kind !== 'tram' && <rect x={laneX - w / 2 + 3} y={frontY + 5} width={w - 6} height={7} rx={1} fill="#e5e7eb" />}
      {v.siren && <rect x={laneX - 5} y={frontY + 15} width={10} height={4} fill="#3b82f6" stroke="#fff" stroke-width={1} />}
    </g>
  );
}

function crossPath(v: Vehicle, laneX: number): string {
  const y0 = C + H;
  if (v.to === 'straight') return `M${laneX} ${y0} L${laneX} ${C - H - 26}`;
  if (v.to === 'right') return `M${laneX} ${y0} Q${laneX} ${C + 20} ${C + H} ${C + 20} L${C + H + 26} ${C + 20}`;
  return `M${laneX} ${y0} Q${laneX} ${C - 20} ${C - H} ${C - 20} L${C - H - 26} ${C - 20}`;
}

/** Counter-clockwise around the island (driving on the right), exiting into the target arm's outbound lane. */
function roundaboutPath(v: Vehicle, laneX: number): string {
  const off = Math.sqrt(RMID ** 2 - 20 ** 2);
  const entryY = C + off;
  const exit = {
    right: { p: [C + off, C + 20], out: [C + RING + 26, C + 20], large: 0 },
    straight: { p: [C + 20, C - off], out: [C + 20, C - RING - 26], large: 0 },
    left: { p: [C - off, C - 20], out: [C - RING - 26, C - 20], large: 1 },
  }[v.to!];
  return `M${laneX} ${C + RING} L${laneX} ${entryY} A${RMID} ${RMID} 0 ${exit.large} 0 ${exit.p[0]} ${exit.p[1]} L${exit.out[0]} ${exit.out[1]}`;
}

function VehicleGroup({ v, frontY, round }: { v: Vehicle; frontY: number; round: boolean }) {
  const laneX = v.lane === 'path' ? C + H + BP + BW / 2 : v.kind === 'tram' ? C : C + 20;
  const [, h] = SIZE[v.kind];
  const d = !v.to || v.kind === 'pedestrian' ? null : round ? roundaboutPath(v, laneX) : crossPath(v, laneX);
  const r = ROT[v.from];
  // Label sits behind the vehicle in its own lane (arrows only go forward); counter-rotated to stay upright.
  const lx = laneX;
  const ly = frontY + h + 4 + LABEL_R;
  return (
    <g transform={`rotate(${r} ${C} ${C})`}>
      {d && <path d={d} fill="none" stroke={v.you ? '#dc2626' : '#111827'} stroke-width={3} stroke-dasharray={v.you ? undefined : '6 4'} marker-end={v.you ? 'url(#arrow-you)' : 'url(#arrow)'} opacity={0.85} />}
      <VehicleShape v={v} laneX={laneX} frontY={frontY} />
      <g transform={`rotate(${-r} ${lx} ${ly})`}>
        <circle cx={lx} cy={ly} r={LABEL_R} fill="#fff" stroke={v.you ? '#dc2626' : '#111827'} stroke-width={2} />
        <text x={lx} y={ly + 5} text-anchor="middle" font-size={14} font-weight={700} font-family="system-ui, sans-serif" fill="#111827">{v.label}</text>
      </g>
    </g>
  );
}

/** Front y (local frame) of each vehicle: queued behind lower-`pos` vehicles on the same arm and lane. */
function layout(vehicles: Vehicle[], edge: number): number[] {
  return vehicles.map((v) => {
    const ahead = vehicles.filter((o) => o.from === v.from && o.lane === v.lane && o.pos < v.pos);
    return edge + GAP + ahead.reduce((sum, o) => sum + SIZE[o.kind][1] + 2 * LABEL_R + 12, 0);
  });
}

export default function Junction({ d, class: cls }: { d: Diagram; class?: string }) {
  const dirs = (Object.keys(d.arms) as Dir[]).filter((k) => d.arms[k]);
  const round = d.kind === 'roundabout';
  const edge = round ? C + RING : C + H;
  const fronts = layout(d.vehicles, edge);
  return (
    <svg viewBox={`0 0 ${S} ${S}`} role="img" aria-label={d.alt} class={`qa-diagram w-full max-w-md ${cls ?? ''}`}>
      <defs>
        <pattern id="gravel" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="3" r="1.2" fill="#8b6b43" />
          <circle cx="7" cy="8" r="1" fill="#8b6b43" />
        </pattern>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill="#111827" />
        </marker>
        <marker id="arrow-you" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill="#dc2626" />
        </marker>
      </defs>
      <rect width={S} height={S} fill="#d9e8c4" />
      {round ? (
        <g>
          {dirs.map((k) => <Arm key={k} dir={k} arm={d.arms[k]!} edge={edge} />)}
          <circle cx={C} cy={C} r={RING} fill="#6b7280" />
          <circle cx={C} cy={C} r={RING - 2 * 20} fill="#86a86b" stroke="#e5e7eb" stroke-width={3} />
        </g>
      ) : (
        <>
          {dirs.map((k) => <Arm key={k} dir={k} arm={d.arms[k]!} edge={edge} />)}
          <rect x={C - H} y={C - H} width={2 * H} height={2 * H} fill="#6b7280" />
        </>
      )}
      {d.vehicles.map((v, i) => <VehicleGroup key={i} v={v} frontY={fronts[i]} round={round} />)}
      <g font-family="system-ui, sans-serif" font-size={12} fill="#374151">
        <text x={S - 14} y={20} text-anchor="middle" font-weight={700}>N</text>
        <path d={`M${S - 14} 24 L${S - 14} 40`} stroke="#374151" stroke-width={2} marker-start="url(#arrow)" />
      </g>
    </svg>
  );
}
