interface VideoProps {
  src: string;
};

export const Video: React.FC<VideoProps> = (props: VideoProps) => {
  return <div className="rounded-lg overflow-hidden">
    <video
      src={props.src}
      muted
      loop
      playsInline
      autoPlay
      className="m-0"
    />
  </div>
}