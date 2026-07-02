"use client";

import React, { useRef, useState, useEffect, MouseEvent } from "react";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { FaReact, FaFigma, FaCss3Alt, FaMobile } from "react-icons/fa";
import { SiTailwindcss, SiAdobeaftereffects, SiFlutter } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { IconType } from "react-icons";

interface TechItem {
  icon: IconType;
  name: string;
}

const Drone: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);

  const techStack: TechItem[] = [
    { icon: FaReact, name: "React" },
    { icon: TbBrandNextjs, name: "Next.js" },
    { icon: SiTailwindcss, name: "Tailwind" },
    { icon: FaFigma, name: "Figma" },
    { icon: SiFlutter, name: "Flutter" },
    { icon: FaCss3Alt, name: "CSS3" },
    { icon: SiAdobeaftereffects, name: "After Effects" },
    { icon: FaMobile, name: "Responsive" },
  ];

  const deliverables: string[] = [
    "UI/UX Design for Dashboard",
    "UI/UX Design for Website",
    "UI/UX Design for Flutter App",
    "UI Development of Dashboard",
    "UI Development of Website",
    "Video Presentation",
    "Overall Management",
    "Team Coordination",
  ];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
      setVideoLoaded(true);
    };

    const handleCanPlay = () => {
      setVideoLoaded(true);
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("canplay", handleCanPlay);
    
    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || duration === 0) return;

    const handleTimeUpdate = () => {
      const currentProgress = (video.currentTime / duration) * 100;
      setProgress(currentProgress);
      setCurrentTime(video.currentTime);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [duration]);

  const togglePlay = (): void => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (): void => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleProgressClick = (e: MouseEvent<HTMLDivElement>): void => {
    if (!progressRef.current || !videoRef.current || duration === 0) return;
    const progressBar = progressRef.current;
    const rect = progressBar.getBoundingClientRect();
    const clickPosition = e.clientX - rect.left;
    const progressBarWidth = rect.width;
    const seekPercentage = Math.min(Math.max((clickPosition / progressBarWidth) * 100, 0), 100);
    const seekTime = (duration * seekPercentage) / 100;
    videoRef.current.currentTime = seekTime;
    setProgress(seekPercentage);
  };

  const formatTime = (timeInSeconds: number): string => {
    if (isNaN(timeInSeconds) || !isFinite(timeInSeconds)) return "0:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                <span className="text-sm text-gray-400">Healthcare Platform</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Doctor ONE
              </h1>
              <p className="text-gray-400 text-lg mb-8">
                A comprehensive wellness platform for all your medical needs
              </p>
              <div className="flex gap-8">
                <div>
                  <p className="text-2xl font-semibold">500+</p>
                  <p className="text-gray-500 text-sm">Doctors</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold">50k+</p>
                  <p className="text-gray-500 text-sm">Patients</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold">24/7</p>
                  <p className="text-gray-500 text-sm">Support</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <p className="text-lg font-semibold mb-3 text-white">About Doctor ONE</p>
              <p className="text-gray-400 leading-relaxed">
                Doctor ONE is a comprehensive wellness platform designed to meet all your medical needs 
                in one place. Users can easily search for doctors, find diagnostic labs, locate nearby 
                hospitals, and purchase medicines through an e-commerce-style pharmacy section.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-gray-800 mb-2">Tech Stack</h2>
          <div className="w-12 h-0.5 bg-gray-300 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {techStack.map((tech, idx) => (
            <div key={idx} className="text-center p-4 hover:bg-gray-50 transition-colors rounded-lg">
              <tech.icon className="text-2xl text-gray-600 mx-auto mb-2" />
              <p className="text-xs text-gray-500">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* My Role Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                className="w-full rounded-lg shadow-md"
                src="/dr1banner.webp"
                alt="Doctor One Dashboard"
              />
            </div>
            <div>
              <div className="mb-4">
                <span className="text-sm text-gray-500 uppercase tracking-wider">My Role</span>
                <h2 className="text-3xl font-light text-gray-800 mt-1">What I Delivered</h2>
                <div className="w-12 h-0.5 bg-gray-300 mt-3"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                {deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-gray-800 mb-2">Video Presentation</h2>
          <div className="w-12 h-0.5 bg-gray-300 mx-auto"></div>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-sm">
            Project in progress — First phase demonstration
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Video Container */}
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm border border-gray-200">
            <video
              ref={videoRef}
              className="w-full aspect-video"
              onClick={togglePlay}
              poster="/video-poster.jpg"
              preload="metadata"
            >
              <source src="/dr1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Video Controls - Only show when video is loaded */}
          {videoLoaded && duration > 0 && (
            <div className="mt-5">
              {/* Progress Bar */}
              <div
                ref={progressRef}
                className="relative w-full h-1 bg-gray-200 rounded-full cursor-pointer group"
                onClick={handleProgressClick}
              >
                <div
                  className="absolute h-full bg-gray-600 rounded-full transition-all group-hover:bg-gray-700"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Controls Bar */}
              <div className="flex justify-between items-center mt-4">
                <span className="text-xs text-gray-400 font-mono">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>

                <div className="flex gap-2">
                  <button
                    onClick={toggleMute}
                    className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                    type="button"
                  >
                    {isMuted ? <FaVolumeMute size={12} /> : <FaVolumeUp size={12} />}
                  </button>

                  <button
                    onClick={togglePlay}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors"
                    aria-label={isPlaying ? "Pause" : "Play"}
                    type="button"
                  >
                    {isPlaying ? <FaPause size={10} /> : <FaPlay size={10} className="ml-0.5" />}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Loading State */}
          {!videoLoaded && (
            <div className="mt-5 flex justify-center">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
                <span className="text-xs text-gray-400">Loading video...</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-100 py-8 text-center">
        <p className="text-gray-400 text-xs">Doctor ONE — Integrated Healthcare Solution</p>
      </div>
    </div>
  );
};

export default Drone;