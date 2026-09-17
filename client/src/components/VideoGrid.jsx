import VideoTile from "./VideoTile";
import "./VideoGrid.css";

const VideoGrid = ({ localStream, remoteStreams, cameraOff }) => {
  return (
    <div className="video-grid">
      {localStream && (
        <VideoTile
          stream={localStream}
          muted={true}
          label="You"
          cameraOff={cameraOff}
        />
      )}

      {Object.entries(remoteStreams).map(
        ([socketId, stream]) => (
          <VideoTile
            key={socketId}
            stream={stream}
            label="Participant"
          />
        )
      )}
    </div>
  );
};

export default VideoGrid;