import { LoadingDots } from "@/components/animations/loading-dots"

export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Loading</h2>
        <LoadingDots size={8} space={6} />
      </div>
    </div>
  )
}
