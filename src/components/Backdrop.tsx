export default function Backdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="bg-grid absolute inset-0" />
      <div className="orb orb-a" />
      <div className="orb orb-b" />
      <div className="orb orb-c" />
      <div className="sheen" />
      <span className="spark spark-1" />
      <span className="spark spark-2" />
      <span className="spark spark-3" />
      <span className="spark spark-4" />
    </div>
  )
}
