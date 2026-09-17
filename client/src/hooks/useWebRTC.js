import { useRef } from "react";

const useWebRTC = (stream) => {
  const peerConnections = useRef({});

  const createPeerConnection = (socketId) => {
    const peer = new RTCPeerConnection({
      iceServers: [
        {
          urls: "stun:stun.l.google.com:19302",
        },
      ],
    });

    // Camera + Mic
    stream?.getTracks().forEach((track) => {
      peer.addTrack(track, stream);
    });

    peerConnections.current[socketId] = peer;

    return peer;
  };

  return {
    peerConnections,
    createPeerConnection,
  };
};

export default useWebRTC;