'use client';

import { 
  decrementheight, 
  incrementheight,
  decrementwidth,
  incrementwidth,
  resetBox
} from '@/feature/box/boxSlice';
import { RootState } from '@/app/store';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Box: React.FC = () => {
  const dispatch = useDispatch();
  const { height, width } = useSelector((state: RootState) => state.box);
  const [step, setStep] = useState(10);

  const handleIncrementHeight = () => dispatch(incrementheight(step));
  const handleDecrementHeight = () => dispatch(decrementheight(step));
  const handleIncrementWidth = () => dispatch(incrementwidth(step));
  const handleDecrementWidth = () => dispatch(decrementwidth(step));
  const handleReset = () => dispatch(resetBox());

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-1">
              Box Resizer
            </h2>
            <p className="text-sm text-gray-500">
              Adjust the box dimensions dynamically
            </p>
          </div>

          {/* Box Preview */}
          <div className="mb-8 flex items-center justify-center bg-gray-50 rounded-xl p-8 border border-gray-100 min-h-[300px]">
            <div
              style={{
                height: `${height}px`,
                width: `${width}px`,
                transition: 'height 0.3s ease, width 0.3s ease',
              }}
              className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-lg flex items-center justify-center border-2 border-white"
            >
              <span className="text-white font-semibold text-lg">Box</span>
            </div>
          </div>

          {/* Dimensions Display */}
          <div className="mb-6 grid grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
              <p className="text-xs text-gray-500 mb-1">Height</p>
              <p className="text-2xl font-bold text-gray-800">{height}px</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
              <p className="text-xs text-gray-500 mb-1">Width</p>
              <p className="text-2xl font-bold text-gray-800">{width}px</p>
            </div>
          </div>

          {/* Step Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Adjustment Step
            </label>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min={1}
                max={100}
                value={step}
                onChange={(e) => setStep(Number(e.target.value))}
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-800"
              />
              <div className="flex items-center gap-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 min-w-[80px]">
                <input
                  type="number"
                  min={1}
                  max={100}
                  value={step}
                  onChange={(e) => setStep(Number(e.target.value))}
                  className="w-12 bg-transparent text-gray-800 font-medium text-center focus:outline-none"
                />
                <span className="text-gray-500 text-sm">px</span>
              </div>
            </div>
          </div>

          {/* Height Controls */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Height Controls
            </label>
            <div className="flex gap-3">
              <button
                onClick={handleDecrementHeight}
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
                onClick={handleIncrementHeight}
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
          </div>

          {/* Width Controls */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Width Controls
            </label>
            <div className="flex gap-3">
              <button
                onClick={handleDecrementWidth}
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
                onClick={handleIncrementWidth}
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
          </div>

          {/* Reset Button */}
          <button
            onClick={handleReset}
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
            Reset to Default
          </button>
        </div>
      </div>
    </div>
  );
};

export default Box;