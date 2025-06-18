"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Play, Pause, Volume2, SkipBack, SkipForward, Square } from "lucide-react";

export default function CustomAudioPlayer() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (!audio) return;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
    };

    const handleLoadedMetadata = () => {
        if (audioRef.current) setDuration(audioRef.current.duration);
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        if (audioRef.current) audioRef.current.volume = newVolume;
        setVolume(newVolume);
    };

    const handleStop = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            setIsPlaying(false);
        }
    };

    const handleSkipBack = () => {
        if (audioRef.current) audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 10);
    };

    const handleSkipForward = () => {
        if (audioRef.current) audioRef.current.currentTime = Math.min(duration, audioRef.current.currentTime + 10);
    };

    const formatTime = (time: number): string => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60).toString().padStart(2, "0");
        return `${minutes}:${seconds}`;
    };

    return (
        <div className="rounded-xl shadow relative">
            <audio
                ref={audioRef}
                src="/audio/sample.mp3"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
            />

            {/* Waveform & Play */}
            <div className="flex items-center space-x-2 mb-2">
                <div className="flex-grow h-6 overflow-hidden relative">
                    <div
                        className="bg-[#6F0C15] h-full absolute top-0 left-0"
                        style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
                    ></div>
                </div>
                <button
                    onClick={togglePlay}
                    className="ml-2 p-2 rounded-full bg-[#6F0C15] text-white"
                >
                    {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                </button>
            </div>

            {/* Time */}
            <div className="text-sm text-[#6F0C15] mb-2">
                {formatTime(currentTime)} / {formatTime(duration)}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between">
                <a
                    href="/audio/sample.mp3"
                    download
                    className="border border-[#6F0C15] text-[#6F0C15] px-2 py-1 rounded text-sm"
                >
                    Download
                </a>

                <div className="flex items-center space-x-4">
                    <button className="text-[#6F0C15]" onClick={handleSkipBack}>
                        <SkipBack size={20} />
                    </button>
                    <button
                        className="w-8 h-8 rounded-full bg-[#6F0C15] flex items-center justify-center"
                        onClick={handleStop}
                    >
                        <Square size={16} className="text-white" />
                    </button>
                    <button className="text-[#6F0C15]" onClick={handleSkipForward}>
                        <SkipForward size={20} />
                    </button>
                    <Volume2 size={18} className="text-[#6F0C15]" />
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="accent-[#6F0C15]"
                    />
                </div>
            </div>
        </div>
    );
}
