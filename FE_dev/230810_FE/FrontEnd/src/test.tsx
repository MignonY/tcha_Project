import React from "react";
import { useOpenvidu } from "./hooks/use-openvidu";

const VideoCallComponent = () => {
  const { publisher, streamList, onChangeCameraStatus, onChangeMicStatus } =
    useOpenvidu(1, 1);

  return (
    <div>
      {publisher && (
        <div>
          <video
            ref={(videoRef) => {
              if (videoRef && publisher && publisher.stream) {
                videoRef.srcObject = publisher.stream.getMediaStream();
              }
            }}
            autoPlay
            muted
          />
          {/* publisher를 표시하거나 영상 통화 상태를 UI에 반영하는 등의 기능 추가 */}
        </div>
      )}
    </div>
  );
};

export default VideoCallComponent;
