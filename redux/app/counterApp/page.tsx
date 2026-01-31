"use client";
import { decrement, increment, reset } from "@/feature/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";


export default function Page() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-sm">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-1">
              Counter
            </h2>
            <p className="text-sm text-gray-500">Simple counter application</p>
          </div>

          {/* Counter Display */}
          <div className="mb-8">
            <div className="bg-gray-50 rounded-xl p-8 text-center border border-gray-100">
              <div className="text-6xl font-bold text-gray-800 tabular-nums">
                {count}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-3">
            {/* Increment and Decrement */}
            <div className="flex gap-3">
              <button
                onClick={() => dispatch(decrement())}
                className="flex-1 bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-150 flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 12H4"
                  />
                </svg>
                Decrease
              </button>

              <button
                onClick={() => dispatch(increment())}
                className="flex-1 bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-150 flex items-center justify-center gap-2"
              >
                Increase
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>

            {/* Reset Button */}
            <button
              onClick={() => dispatch(reset())}
              className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors duration-150 flex items-center justify-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Reset to 0
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}