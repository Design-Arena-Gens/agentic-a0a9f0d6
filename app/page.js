'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentScene, setCurrentScene] = useState(0);

  const scenes = [
    {
      title: "Welcome to",
      subtitle: "AMRUTHSAI STUDIO",
      description: "Where Creativity Meets Excellence"
    },
    {
      title: "We Create",
      subtitle: "STUNNING VISUALS",
      description: "Film • Photography • Design • Animation"
    },
    {
      title: "We Deliver",
      subtitle: "YOUR VISION",
      description: "Professional Production Services"
    },
    {
      title: "Let's Create",
      subtitle: "TOGETHER",
      description: "Your Story, Our Expertise"
    }
  ];

  useEffect(() => {
    if (isVideoPlaying) {
      const interval = setInterval(() => {
        setCurrentScene((prev) => (prev + 1) % scenes.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVideoPlaying, scenes.length]);

  return (
    <div style={styles.container}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700;900&display=swap');

        body {
          font-family: 'Montserrat', sans-serif;
          overflow: hidden;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideIn {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes zoomIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-slide-in {
          animation: slideIn 1s ease-out forwards;
        }

        .animate-zoom-in {
          animation: zoomIn 0.8s ease-out forwards;
        }

        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>

      {!isVideoPlaying ? (
        <div style={styles.landingPage}>
          <div style={styles.logoContainer} className="animate-zoom-in">
            <div style={styles.logoCircle}>
              <div style={styles.logoText}>AS</div>
            </div>
            <h1 style={styles.studioName} className="animate-fade-in">
              AMRUTHSAI STUDIO
            </h1>
            <p style={styles.tagline} className="animate-fade-in">
              Creative Production & Design
            </p>
          </div>
          <button
            onClick={() => setIsVideoPlaying(true)}
            style={styles.playButton}
            className="animate-pulse"
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            <div style={styles.playIcon}>▶</div>
            <span style={styles.playText}>PLAY INTRO</span>
          </button>
        </div>
      ) : (
        <div style={styles.videoContainer}>
          <div style={styles.backgroundAnimation}></div>

          <div key={currentScene} style={styles.sceneContainer}>
            <div style={styles.scene} className="animate-fade-in">
              <h2 style={styles.sceneTitle} className="animate-slide-in">
                {scenes[currentScene].title}
              </h2>
              <h1 style={styles.sceneSubtitle} className="animate-zoom-in">
                {scenes[currentScene].subtitle}
              </h1>
              <p style={styles.sceneDescription} className="animate-fade-in">
                {scenes[currentScene].description}
              </p>
            </div>

            <div style={styles.progressBar}>
              {scenes.map((_, idx) => (
                <div
                  key={idx}
                  style={{
                    ...styles.progressDot,
                    ...(idx === currentScene ? styles.progressDotActive : {}),
                  }}
                />
              ))}
            </div>
          </div>

          {currentScene === scenes.length - 1 && (
            <button
              onClick={() => {
                setIsVideoPlaying(false);
                setCurrentScene(0);
              }}
              style={styles.replayButton}
              className="animate-fade-in"
            >
              ↻ REPLAY
            </button>
          )}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    margin: 0,
    padding: 0,
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  landingPage: {
    textAlign: 'center',
    color: 'white',
    zIndex: 10,
  },
  logoContainer: {
    marginBottom: '60px',
  },
  logoCircle: {
    width: '180px',
    height: '180px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto 30px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
    border: '5px solid rgba(255,255,255,0.3)',
  },
  logoText: {
    fontSize: '72px',
    fontWeight: '900',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  studioName: {
    fontSize: '54px',
    fontWeight: '900',
    margin: '0 0 15px 0',
    letterSpacing: '4px',
    textShadow: '0 4px 20px rgba(0,0,0,0.3)',
  },
  tagline: {
    fontSize: '20px',
    fontWeight: '300',
    margin: 0,
    letterSpacing: '2px',
    opacity: 0.9,
  },
  playButton: {
    background: 'rgba(255,255,255,0.95)',
    border: 'none',
    borderRadius: '50px',
    padding: '20px 50px',
    fontSize: '20px',
    fontWeight: '700',
    color: '#667eea',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    margin: '0 auto',
    boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
    transition: 'transform 0.3s ease',
  },
  playIcon: {
    fontSize: '24px',
  },
  playText: {
    letterSpacing: '2px',
  },
  videoContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
  },
  backgroundAnimation: {
    position: 'absolute',
    width: '200%',
    height: '200%',
    background: 'radial-gradient(circle, rgba(102,126,234,0.1) 0%, transparent 70%)',
    animation: 'rotate 20s linear infinite',
  },
  sceneContainer: {
    textAlign: 'center',
    color: 'white',
    zIndex: 10,
    padding: '40px',
  },
  scene: {
    minHeight: '400px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sceneTitle: {
    fontSize: '36px',
    fontWeight: '300',
    margin: '0 0 20px 0',
    letterSpacing: '3px',
    opacity: 0.8,
  },
  sceneSubtitle: {
    fontSize: '72px',
    fontWeight: '900',
    margin: '0 0 30px 0',
    letterSpacing: '6px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textShadow: '0 0 30px rgba(102,126,234,0.5)',
  },
  sceneDescription: {
    fontSize: '24px',
    fontWeight: '400',
    margin: 0,
    letterSpacing: '2px',
    opacity: 0.9,
  },
  progressBar: {
    display: 'flex',
    gap: '15px',
    justifyContent: 'center',
    marginTop: '60px',
  },
  progressDot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.3)',
    transition: 'all 0.3s ease',
  },
  progressDotActive: {
    background: 'white',
    width: '40px',
    borderRadius: '6px',
    boxShadow: '0 0 20px rgba(255,255,255,0.5)',
  },
  replayButton: {
    position: 'absolute',
    bottom: '40px',
    right: '40px',
    background: 'rgba(255,255,255,0.1)',
    border: '2px solid rgba(255,255,255,0.3)',
    borderRadius: '30px',
    padding: '15px 35px',
    fontSize: '16px',
    fontWeight: '700',
    color: 'white',
    cursor: 'pointer',
    letterSpacing: '2px',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
  },
};
